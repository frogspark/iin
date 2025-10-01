import {
  groq,
  createClient,
  createPreviewSubscriptionHook,
} from 'next-sanity'

class Sanity {
  config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    // Disable CDN for staging to see changes immediately
    useCdn: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_SANITY_DATASET !== 'staging',
    apiVersion: '2021-03-25',
  }

  previewMode = false
  setPreviewMode = (previewMode) => this.previewMode = previewMode

  sanityClient = createClient(this.config)

  previewClient = createClient({
    ...this.config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })

  usePreviewSubscription = createPreviewSubscriptionHook(this.config)

  get client() {
    return this.previewMode ? this.previewClient : this.sanityClient
  }

  async fetchQuery({ query = '', params }) {
    const res = await this.client.fetch(groq`${query}`, params)
    if (!res) throw new Error(`Nothing was returned from the query: ${query}, with params: ${JSON.stringify(params)}`)
    return res
  }

  async checkIfSlugExists(slug) {
    const query = `*[slug.current == $slug]`
    try {
      const res = await this.fetchQuery({ query, params: { slug }})
      return !!res
    } catch (e) {
      return false
    }
  }
}

export default new Sanity()