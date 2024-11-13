import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import NewsCarousel from '@/components/news-carousel'
import HomeHero from '@/components/home-hero'
import ImageScale from '@/components/image-scale'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import Button from '@/components/button'
import { useRef } from 'react'
import PortableText from 'react-portable-text'
import SanityImageScale from '@/components/sanity-image-scale'
import Head from 'next/head'
const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const x = useTransform(scrollYProgress,[0, 1],['-100%', '75%'],{ clamp: true })
  const x2 = useTransform(scrollYProgress,[0, 1],['-25%', '-100%'],{ clamp: true })

  const { data: { contact, policies, home, global }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo
        title={home.seo?.metaTitle ? home.seo?.metaTitle : home.title}
        description={home.seo?.metaDesc ? home.seo?.metaDesc : null}
        canonical = 'https://www.itsinnottingham.com'
        openGraph={{
          title: home.seo?.metaTitle ? home.seo?.metaTitle : home.title,
          description: home.seo?.metaDesc ? home.seo?.metaDesc : null,
          images: home.seo?.shareGraphic?.asset ? [
            {
              url: home.seo?.shareGraphic?.asset.url ? home.seo?.shareGraphic?.asset.url : null,
              width: home.seo?.shareGraphic?.asset.metadata.dimensions.width ? home.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: home.seo?.shareGraphic?.asset.metadata.dimensions.height ? home.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ] : null
        }}
      />

      {home.seo?.jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: home.seo.jsonLd }}
            key="product-jsonld"
          />
        </Head>
      )}

      <LazyMotion features={domAnimation}>
        <m.div
          className="relative"
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="overflow-hidden relative lg:sticky lg:top-0">
            <HomeHero
              heroVideoFull={home.heroVideoFull}
              heroVideoMobile={home.heroVideoMobile}
              heroVideoDesktop={home.heroVideo}
              heroVideoPosterDesktop={home.heroVideoPosterDesktop.asset.url}
              heroVideoPosterMobile={home.heroVideoPosterMobile.asset.url}
            />
          </div>

          <main className="mt-screen bg-white relative z-[10]">
            <article>
              <div className="p-[5vw] pt-8 lg:pr-0 pb-[7vw] mb-[10vw] lg:mb-[15vw] lg:pb-[33vw] lg:pt-[5vw] relative">
                <div className="flex flex-wrap relative">
                  <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
                    {home.introContentHeading && (
                      <h1 className="text-[9.5vw] leading-none lg:text-[4vw] lg:leading-[0.9] xl:leading-[0.9] uppercase text-[#FF5F38] max-w-[100%] mb-5 lg:mb-[2vw]">
                        <PortableText
                          content={home.introContentHeading}
                        />
                      </h1>
                    )}
                    
                    {/* <IconSlattedUnderline className="w-[45%] text-[#FF5F38] mb-[3vw]" /> */}
                    
                    {home.introContentText && (
                      <div className="content mb-5 lg:mb-[3vw] text-base leading-tight lg:text-lg lg:leading-tight 2xl:text-2xl 2xl:leading-tight max-w-[530px] 2xl:max-w-[740px]">
                        <PortableText
                          content={home.introContentText}
                        />
                      </div>
                    )}

                    {/* <Link href="/about" className="a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">Find out more about us</Link> */}

                    <Button href="/whats-on" label="Discover what's on" className="block lg:inline-block w-full lg:w-auto" />
                  </div>

                  <div className="w-full lg:w-[28vw] h-[100vw] lg:h-[40vw] relative lg:absolute top-0 right-0">
                    <SanityImageScale
                      image={home.introContentImages[0]}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-[25vw] lg:h-[19vw] relative lg:absolute lg:bottom-[8vw] lg:left-0 hidden lg:block">
                  <SanityImageScale
                    image={home.introContentImages[1]}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="w-full lg:w-[38vw] lg:h-[26vw] relative lg:absolute lg:bottom-[-8vw] lg:left-[30vw] hidden lg:block">
                  <SanityImageScale
                    image={home.introContentImages[2]}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>

              <div className="mb-[10vw] lg:mb-[5vw]">
                <div className="relative flex overflow-hidden text-[17vw] lg:text-[10vw] leading-[0] uppercase">
                  <m.div style={{ x: x }} className="will-change-transform whitespace-nowrap">
                    {home.textTicker1Words.map((e, i) => {
                      return (
                        <span key={i} className={`relative overflow-hidden ${(i % 2) === 0 ? 'font-display italic' : '' }`}>{e}<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>    
                      )
                    })}
                    {home.textTicker1Words.map((e, i) => {
                      return (
                        <span key={i} className={`relative overflow-hidden ${(i % 0) === 0 ? 'font-display italic' : '' }`}>{e}<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>    
                      )
                    })}
                  </m.div>

                  {/* <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Entertainment<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                    <span className="relative overflow-hidden inline-block">Food<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  </div> */}
                </div>

                <div className="relative flex overflow-hidden text-[17vw] leading-[0] lg:text-[10vw] lg:leading-[0] uppercase mt-[-1vw]">
                  <m.div style={{ x: x2 }} className="will-change-transform whitespace-nowrap">
                    {home.textTicker2Words.map((e, i) => {
                      return (
                        <span key={i} className={`relative overflow-hidden ${(i % 3) === 0 ? 'font-display italic' : '' }`}>{e}<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>    
                      )
                    })}
                    {home.textTicker2Words.map((e, i) => {
                      return (
                        <span key={i} className={`relative overflow-hidden ${(i % 3) === 0 ? 'font-display italic' : '' }`}>{e}<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>    
                      )
                    })}
                    {home.textTicker2Words.map((e, i) => {
                      return (
                        <span key={i} className={`relative overflow-hidden ${(i % 3) === 0 ? 'font-display italic' : '' }`}>{e}<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>    
                      )
                    })}
                  </m.div>
                  
                  {/* 
                  <div className="absolute top-0 animate-marqueeReverse2 will-change-transform whitespace-nowrap">
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block font-display italic">Shopping<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                    <span className="relative overflow-hidden inline-block">Leisure<span className="inline-block w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow-reverse aspect-square" /></span></span>
                  </div> */}
                </div>
              </div>

              <div className="py-[5vw] pr-0 lg:pb-[10vw] bg-[#f3f3ed]">
                <div className="px-[5vw]">
                  <h2 className="text-[9.5vw] leading-none lg:text-[6vw] lg:leading-[0.9] xl:text-[5.5vw] xl:leading-[0.9] max-w-[550px] lg:max-w-[100%] text-[#BDB800] mb-2">
                    <span className="uppercase block">Latest</span>
                    <span className="uppercase block">News</span>
                  </h2>

                  {/* <IconSquiggleUnderline className="w-[50%] lg:w-[40%] xl:w-[33%] text-[#BDB800] lg:translate-x-[-2vw] mb-[4vw]" /> */}

                  <svg className="w-[50%] lg:w-[40%] xl:w-[33%] text-[#BDB800] lg:translate-x-[-2vw] mb-6 lg:mb-[4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.568 14.617">
                    <defs>
                      <clipPath id="a">
                        <path fill="none" d="M0 14.617h332.568V0H0Z" data-name="Path 1260"/>
                      </clipPath>
                    </defs>
                    <g data-name="Group 565">
                      <g clip-path="url(#a)" data-name="Group 564">
                        <g data-name="Group 563">
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M331.786.881S138.656 2.527 19.558 13.068c-31.5 2.787-13.2-4.083-15.959-4" data-name="Path 1259"/>
                        </g>
                      </g>
                    </g>
                  </svg>

                  {/* <svg className="w-[50%] lg:w-[40%] xl:w-[33%] text-[#BDB800] lg:translate-x-[-2vw] mb-6 lg:mb-[4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054.61 41.078">
                    <path  stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="5" d="M1052.091 2.519S439.691 7.143 62.04 36.748c-99.9 7.827-41.862-11.468-50.6-11.237" data-name="Path 1259"/>
                  </svg> */}
                </div>

                <div className="mb-[8vw] lg:mb-[5vw]">
                  { home.latestNewsPosts?.length > 0
                      ? <NewsCarousel items={ home.latestNewsPosts }/>
                      : <NewsCarousel items={ home.latestNews }/> }
                </div>

                <div className="lg:text-center px-4 lg:px-0 pb-5 lg:pb-0">
                  <Button href="/news" label="View More News" className="block w-full lg:w-1/3" large />
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden selection:bg-[#EBEA33] selection:text-[#176B75]">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-16 lg:py-[8vw] pb-6 lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">
                    <span className="text-2xl lg:text-3xl 2xl:text-4xl leading-none lg:leading-none 2xl:leading-none block mb-6 lg:mb-3">What&apos;s on?</span>
                    <h2 className="text-[10.9vw] leading-none lg:text-[5vw] lg:leading-[0.9] xl:text-[5vw] xl:leading-[0.9] mb-8 text-[#EBEA33] max-w-[550px] xl:max-w-[95%]">
                      <PortableText
                        content={home.whatsOnSectionHeading}
                      />
                      {/* <span className="uppercase block">Nottingham</span>
                      <span className="font-display"><span className="italic">in your</span> pocket</span> */}
                    </h2>

                    <div className="content text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-[530px] w-full lg:w-[10/12] mb-8 lg:mb-[10%]">
                      <PortableText
                        content={home.whatsOnSectionText}
                      />
                    </div>
                  
                    <div className="hidden lg:block">
                      <div className="relative rotate-[-2deg] w-[125px] lg:w-[140px] xl:w-[180px] 2xl:w-[220px] aspect-square border-2 border-[#EBEA33] rounded-full flex items-center justify-center">
                        
                          <Image
                            quality={80}
                            width={358}
                            height={356}
                            src="/icons/qr-home.svg"
                            alt="QR Code to download the app"
                            className="w-[65%]"
                          />

                        <span className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-[#EBEA33] block uppercase absolute bottom-[-50px] lg:bottom-[-50px] xl:bottom-[-65px] right-[-190px] lg:right-[-260px] xl:right-[-300px] rotate-[-2deg] xl:rotate-[-5deg] w-[180px] lg:w-[250px] xl:w-[270px] text-center">
                        <svg className="w-[50%] lg:w-[45%]" xmlns="http://www.w3.org/2000/svg" width="140.089" height="173.374" viewBox="0 0 140.089 173.374">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="Path_1181" data-name="Path 1181" d="M0,0H157.986V72.6H0Z" fill="none"/>
                            </clipPath>
                          </defs>
                          <g id="Group_422" data-name="Group 422" transform="translate(63.496) rotate(61)">
                            <g id="Group_421" data-name="Group 421" transform="translate(0 0)" clip-path="url(#clip-path)">
                              <g id="Group_419" data-name="Group 419" transform="translate(3.725 0.831)">
                                <path id="Path_1179" data-name="Path 1179" d="M153.89,8.407S69.6-33.659,0,70.4" fill="none" stroke="#ebea33" stroke-width="3"/>
                              </g>
                              <g id="Group_420" data-name="Group 420" transform="translate(0.822 53.01)">
                                <path id="Path_1180" data-name="Path 1180" d="M21.032,16.285,2.374,18.658,0,0" fill="none" stroke="#ebea33" stroke-width="3"/>
                              </g>
                            </g>
                          </g>
                        </svg>


                          {/* <svg className="w-[50%] lg:w-[45%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.089 173.374">
                            <defs>
                              <clipPath id="a">
                              <path fill="none" d="M0 0h157.986v72.6H0Z" data-name="Path 1181"/>
                              </clipPath>
                            </defs>
                            <g data-name="Group 422">
                              <g clipPath="url(#a)" data-name="Group 421" transform="rotate(61 31.748 53.897)">
                                <g data-name="Group 419">
                                  <path fill="none" stroke="currentColor" strokeWidth="3" d="M157.615 9.238S73.325-32.828 3.725 71.231" data-name="Path 1179"/>
                                </g>
                                <g data-name="Group 420">
                                  <path fill="none" stroke="currentColor" strokeWidth="3" d="M21.854 69.295 3.196 71.668.822 53.01" data-name="Path 1180"/>
                                </g>
                              </g>
                            </g>
                          </svg> */}
                          <span className="font-display"><span className="italic">Scan me</span></span> with your phone camera to download!
                        </span>
                      </div>
                    </div>

                    <div className="lg:hidden mb-6">
                      <a href="https://qrco.de/be9W9S" target="_blank" rel="noopener noreferrer" className="a11y-focus block w-full rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 leading-[1.025] 2xl:text-2xl 2xl:leading-[1.025] mx-auto relative group overflow-hidden text-center">Download The App</a>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-2 relative">
                  <SanityImageScale
                    image={home.whatsOnSectionImage}
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </div>
              </div>
            </article>
          </main>

          <div className="relative z-[10]">
            <Footer policies={policies} contact={contact} />
          </div>
        </m.div>
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