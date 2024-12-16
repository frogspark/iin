import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation} from 'framer-motion'
import IconFacebook from '@/icons/facebook.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import NewsTeaser from '@/components/news-teaser'
import { policiesSlugQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImageResponsive from '@/components/sanity-image-responsive'
import CustomPortableText from "@/components/CustomPortableText";
import Blockquote from '@/components/blockquote'
const pageService = new SanityPageService(policiesSlugQuery)

export default function News(initialData) {
  const { data: { contact, policies, current }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo canonical={`https://www.itsinnottingham.com/policies/${current.slug.current}/`} title={current.title} />

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full selection:text-white selection:bg-[#176B75] pt-[25vw] lg:pt-[15vw] xl:pt-[10vw]">
                <div className="font-display italic text-lg lg:text-xl xl:text-2xl flex justify-center mb-8 lg:mb-12">
                  <div>
                    <Link href="/">Back Home</Link>
                  </div>
                </div>
                <div className="w-full text-center uppercase px-5 lg:px-[10vw] pb-[3.3vw]">
                  <h1 className="text-[9vw] lg:text-[5.5vw] leading-[0.9] lg:leading-[0.9] text-[#437256]">{current.title}</h1>
                </div>
              </div>
              
              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-12 lg:mb-[7.5vw]">

                <div className="w-full lg:w-[72%] mb-8 lg:mb-0">
                  <div className="w-[95%] lg:w-[80%]">
                    <div className="mb-6 lg:mb-12">
                      {current.content ? (
                        <CustomPortableText
                          content={current.content}
                          className="content content--news"
                          serializers={{
                            Quote: (props) => <Blockquote quote={props.quote} author={props.author} />,
                            Image: (props) => <SanityImageResponsive image={props.image} />
                          }}
                        />
                      ) : (
                        <p>Content coming soon!</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          <Footer policies={policies} contact={contact} />
        </div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('policies')
  return {
    paths: paths,
    fallback: false,
  };
}