import sanity from "./sanity"

export default class SanityPageService {
  query = ''

  constructor(query) {
    this.query = query || this.query
  }
  
  getPreviewHook(initialData = {}, params = {}) {
    const subscription = { initialData, enabled: initialData.preview, params: {} }
    subscription.params = params
    if (initialData.slug?.length > 0) subscription.params.slug = initialData.slug
    return () => sanity.usePreviewSubscription(this.query, subscription)
  }

  async fetchQuery ({params, preview = false}) {
    sanity.setPreviewMode(preview)
    const slug = params?.slug
    const res = await sanity.fetchQuery({query: this.query, params})
    res.preview = preview
    if (slug?.length > 0) res.slug = slug
    return res
  }

  fetchPaths(schemaType, filter = '') {
    const filterClause = filter ? ` && ${filter}` : '';
    const query = `*[_type == "${schemaType}" && defined(slug.current)${filterClause}]{
      "params": {
        "slug": slug.current
      }
    }`
    return sanity.fetchQuery({query})
  }
}