import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconSquiggleUnderline from '@/icons/squiggle-underline.svg'
import IconWaveUnderline from '@/icons/wave-underline.svg'
import IconSmile from '@/icons/smile.svg'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import NewsCarousel from '@/components/news-carousel'
import SanityPageService from '@/services/sanityPageService'
import { aboutQuery } from '@/helpers/queries'
import { reveal } from '@/helpers/transitions'
import Button from '@/components/button'
import SanityImageScale from '@/components/sanity-image-scale'
import Head from 'next/head';
import LerpImage from '@/components/lerp-image'
import SanityImage from '@/components/sanity-image'
import CustomPortableText from "@/components/CustomPortableText";
const pageService = new SanityPageService(aboutQuery)

const container = {
  enter: {
    transition: {
      staggerChildren: 0.066
    }
  }
}

const svg = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { delay: 0.2, duration: 0.66, ease: [0.71,0,0.17,1] }},
};

const draw = {
  initial: { pathLength: 0 },
  enter: { pathLength: 1, transition: { delay: 0.3, duration: 0.66, ease: [0.71,0,0.17,1] }},
  exit: { pathLength: 0, transition: { duration: 0.33, ease: [0.71,0,0.17,1] }},
};

export default function AboutUs(initialData) {
  const { data: { contact, policies, about }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
       <NextSeo
        title={about.seo?.metaTitle ? about.seo?.metaTitle : about.title}
        canonical = 'https://www.itsinnottingham.com/about/'
        description={about.seo?.metaDesc ? about.seo?.metaDesc : null}
        openGraph={{
          title: about.seo?.metaTitle ? about.seo?.metaTitle : about.title,
          description: about.seo?.metaDesc ? about.seo?.metaDesc : null,
          images: about.seo?.shareGraphic?.asset ? [
            {
              url: about.seo?.shareGraphic?.asset.url ? about.seo?.shareGraphic?.asset.url : null,
              width: about.seo?.shareGraphic?.asset.metadata.dimensions.width ? about.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: about.seo?.shareGraphic?.asset.metadata.dimensions.height ? about.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ] : null
        }}
      />

      {about.seo?.jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: about.seo.jsonLd }}
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
          <main className="">
            <article>
              <div className="w-full bg-[#4000B5] selection:text-[#4000B5] selection:bg-[#23D6D1] relative min-h-[98vh] lg:min-h-screen flex flex-col lg:items-center lg:justify-center">
                <LerpImage className="w-[40%] lg:w-[19vw] 2xl:w-[18vw] h-[55vw] lg:h-[28vw] 2xl:h-[26vw] absolute top-[36%] lg:top-[13%] left-0 overflow-hidden hidden lg:block" amount="500%">
                  <SanityImageScale
                    image={about.heroImage[0]} 
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </LerpImage>

                {about.heroImage[0] && (
                  <LerpImage amount="-250%" className="w-[40%] lg:w-[25vw] h-[66vw] lg:h-[37vw] absolute top-[40%] lg:top-[18%] right-0 overflow-hidden hidden lg:block">
                    <SanityImageScale
                      image={about.heroImage[2]}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </LerpImage>
                )}

                {about.heroImage[1] && (
                  <LerpImage amount="-250%" className="w-[100%] lg:w-[45vw] h-[47vw] lg:h-[37vw] absolute bottom-[5%] lg:bottom-[10%] lg:left-[-5%] overflow-hidden hidden lg:hidden">
                    <div className="h-full relative overflow-hidden w-full">
                      <SanityImageScale
                        image={about.heroImage[1]}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                  </LerpImage>
                )}

                {about.heroImage[1] && (
                  <div className="w-[100%] lg:w-[45vw] h-[75vw] lg:h-[37vw] absolute bottom-[0%] lg:bottom-[10%] lg:left-[-5%] overflow-hidden block lg:hidden">
                    <div className="h-full relative overflow-hidden w-full">
                      <SanityImageScale
                        image={about.heroImage[1]}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </div>
                  </div>
                )}
                
                <div className="w-full text-center uppercase relative z-10 pt-[50%] lg:pt-0">
                  <m.h1 variants={container} className="text-[15vw] lg:text-[12vw] 2xl:text-[12vw] leading-none lg:leading-none 2xl:leading-none text-[#23D6D1]">
                    <span className="block overflow-hidden relative">
                      <m.span className="block" variants={reveal}>Get To</m.span>
                    </span>
                    <span className="block overflow-hidden relative font-display italic">
                      <m.span className="block" variants={reveal}>Know Us</m.span>
                    </span>

                    <m.svg variants={svg} className="w-[75%] lg:w-[60%] mx-auto mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1054.61 41.078">
                      <m.path variants={draw} stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="5" d="M1052.091 2.519S439.691 7.143 62.04 36.748c-99.9 7.827-41.862-11.468-50.6-11.237" data-name="Path 1259"/>
                    </m.svg>

                    {/* <IconSquiggleUnderline className="w-[80%] lg:w-[60%] mx-auto mt-2" /> */}
                  </m.h1>
                </div>
              </div>

              <div className="flex flex-wrap relative lg:pl-[5vw] 2xl:pl-[7.5vw] bg-[#4000B5] pb-[16vw] lg:pb-[100px] xl:pb-[120px] mb-[5vw] lg:mb-[10vw] selection:text-[#4000B5] selection:bg-[#23D6D1] z-[10] pt-10 lg:pt-0">
                {about.heroImage[2] && (
                  <div className="w-full lg:w-[43%] hidden lg:block translate-y-[-15vh]">
                    <LerpImage amount="-100%" className="h-[27vw] relative overflow-hidden w-full">
                      <SanityImageScale
                        image={about.heroImage[1]}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                      />
                    </LerpImage>
                  </div>
                )}
                <div className="ml-auto w-full lg:w-[54%] px-5 lg:pl-12 2xl:pl-20 relative z-[20]">
                  <div className="content content--small font-display text-white text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[36px] leading-[1.2] lg:leading-[1.2] 2xl:leading-[1.2] max-w-[95%] lg:max-w-[90%]">
                    <CustomPortableText
                      className="content content--small"
                      content={about.introText}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw] pt-6 lg:pt-0">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <h2 className="text-[11.2vw] leading-none lg:text-[5.5vw] lg:leading-[0.9] xl:leading-[0.9] uppercase text-[#176B75] max-w-[100%] mb-10 lg:mb-10">
                    <CustomPortableText content={about.firstSectionHeading} />
                  </h2>

                  <div className="mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <CustomPortableText content={about.firstSectionText} className="content content--fancy-first" />
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:ml-auto mb-6">
                  <div className="w-full h-[120vw] lg:h-[44vw]  relative overflow-hidden">
                    <SanityImageScale
                      image={about.firstSectionImage}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
                  <h2 className="text-[11.2vw] leading-none lg:text-[5.5vw] lg:leading-[0.9] xl:leading-[0.9] uppercase text-[#FC8200] max-w-[100%] mb-10 lg:mb-10"><CustomPortableText content={about.secondSectionHeading} /></h2>

                  <div className="mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <CustomPortableText content={about.secondSectionText} className="content content--fancy-first mb-8 lg:mb-12" />
                  
                    {about.secondSectionButtonLink && (
                      <Button href={`/news/${about.secondSectionButtonLink.slug.current}`} label="Find Out More" className="w-full lg:w-auto" />
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:mr-auto mb-6 lg:order-1">
                  <div className="w-full h-[120vw] lg:h-[44vw]  relative overflow-hidden">
                    <SanityImageScale
                      image={about.secondSectionImage}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#176B75] text-[#F5F1E1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden mb-[5vw] lg:mb-[10vw] selection:text-[#176B75] selection:bg-[#EBEA33]">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 pb-6 lg:py-[8vw] lg:pb-[10vw] order-1 lg:order-2">
                  <div className="w-full lg:px-0">
                    <span className="text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-non 2xl:leading-none block mb-5 lg:mb-6">What’s on?</span>
                    
                    <div className="mb-8 lg:mb-12">
                      <h2 className="text-[12.5vw] leading-none lg:text-[5.5vw] lg:leading-[0.9] xl:text-[5.5vw] xl:leading-[0.9] text-[#EBEA33] max-w-[550px] lg:max-w-[100%] mb-3">
                        <span className="uppercase block"><CustomPortableText content={about.eventCalendarSectionHeading} /></span>
                      </h2>
                      <IconWaveUnderline className="w-full text-[#EBEA33] max-w-[80%] lg:max-w-[75%]"/>
                    </div>

                    <div className="text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug lg:max-w-none w-11/12 lg:w-[10/12] mb-8 lg:mb-12">
                      <CustomPortableText className="content" content={about.eventCalenderSectionText} />
                    </div>

                    
                    {about.eventCalenderSectionPdfDownload?.asset && (
                      <a target="_blank" rel="noopener noreferrer" href={about.eventCalenderSectionPdfDownload?.asset.url} className={`a11y-focus rounded-full border border-[#B4C0C6] py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-[1.025] 2xl:text-2xl 2xl:leading-[1.025] mx-auto relative group overflow-hidden text-center w-full lg:w-auto `}>
                        <div className="relative z-[1] overflow-hidden">
                          <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">View Calendar</span>
                          <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">View Calendar</span>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                          <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[1200ms] group-hover:scale-[120] origin-center bg-black/30`}></div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-2 lg:order-2 relative h-[75vw] lg:h-auto">
                  <SanityImageScale
                    image={about.eventCalendarSectionImage}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-[5vw] lg:mb-[10vw]">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
                  <h2 className="text-[11.2vw] leading-none lg:text-[5.5vw] lg:leading-[0.9] xl:leading-[0.9] uppercase text-[#FF5F38] max-w-[100%] mb-10 lg:mb-10 pt-5 lg:pt-0"><CustomPortableText content={about.thirdSectionHeading} /></h2>

                  <div className="mb-[3vw] max-w-[530px] 2xl:max-w-[740px]">
                    <CustomPortableText content={about.thirdSectionText} className="content content--fancy-first" />
                  </div>
                </div>

                <div className="w-full lg:w-[37%] lg:mr-auto mb-6 lg:order-1">
                  <div className="w-full h-[120vw] lg:h-[44vw]  relative overflow-hidden">
                    <SanityImageScale
                      image={about.thirdSectionImage}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>

              <div className="pr-0 mb-[5vw] lg:mb-[10vw]">
                <div className="px-[5vw]">
                  <h3 className="font-display text-off-black text-[32px] lg:text-[32px] 2xl:text-[40px] leading-[1.1] lg:leading-tight 2xl:leading-tight mb-3 lg:mb-3 pt-6 lg:pt-0">
                    <span className="block">Our crime reduction initiatives</span>
                  </h3>

                  <svg className="w-[98%] lg:w-[50%] 2xl:w-[38%] max-w-[440px] text-off-black mb-8 lg:mb-[4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.568 14.617">
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

                  {/* <IconSquiggleUnderline className="w-[90%] lg:w-[36%] 2xl:w-[38%] max-w-[570px] text-off-black translate-x-[-1vw] mb-8 lg:mb-[4vw]" /> */}
                </div>

                <div className="mb-[8vw] lg:mb-[5vw]">
                  <NewsCarousel items={about.crimeReductionInitiatives} initiatives />
                  
                  {about.crimeReductionButtonLink && (
                    <div className="lg:flex lg:justify-center px-5">
                      <Button href={`/news/categories/managed-city`} label="Find Out More" className="w-full lg:w-1/3" large />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-[#BDB800] text-off-black grid grid-cols-1 lg:grid-cols-2 overflow-hidden mb-[5vw] lg:mb-[10vw] selection:text-[#BDB800] selection:bg-off-black">
                <div className="col-span-1 flex items-center justify-center px-[5vw] py-10 pb-6 lg:py-[10vw] lg:pb-[10vw] order-2 lg:order-2">
                  <div className="w-full lg:px-0">
                    <span className="text-xl lg:text-2xl 2xl:text-3xl leading-none lg:leading-non 2xl:leading-none block mb-5 lg:mb-5">Our People</span>
                    
                    <div className="mb-8 lg:mb-12">
                      <h2 className="text-[12.5vw] leading-none lg:text-[5.6vw] lg:leading-[0.9] xl:text-[5.6vw] xl:leading-[0.9] text-[#EBEA33] max-w-[550px] lg:max-w-[100%] mb-3">
                        <span className="uppercase block"><CustomPortableText content={about.ourPeopleSectionHeading } /></span>
                      </h2>
                      {/* <IconWaveUnderline className="w-full text-[#EBEA33] max-w-[60%]"/> */}
                    </div>

                    <div className="content text-base leading-tight lg:text-lg 2xl:text-2xl lg:leading-snug 2xl:leading-snug lg:max-w-none w-11/12 lg:w-[10/12] mb-8 lg:mb-12">
                      <CustomPortableText content={about.ourPeopleSectionText} className="content" />
                    </div>

                    <div className="">
                      {about.ourPeopleSectionBoardOfDirectorsLink && (
                        <a target="_blank" rel="noopener noreferrer" href={about.ourPeopleSectionBoardOfDirectorsLink} className="w-full lg:w-auto border border-off-black a11y-focus rounded-full py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-[1.025] 2xl:text-2xl 2xl:leading-[1.025] mx-auto relative group overflow-hidden text-center">
                          <div className="relative z-[1] overflow-hidden">
                            <span className="block transition-transform ease-out duration-[450ms] translate-y-none group-hover:translate-y-[-105%]">Meet Our Board</span>
                            <span className="block absolute inset-0 transition-transform ease-out duration-[450ms] translate-y-[105%] group-hover:translate-y-0">Meet Our Board</span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                            <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] lg:group-hover:duration-[600ms] lg:group-hover:scale-[75] origin-center bg-black/20`}></div>
                          </div>
                        </a>
                      )}

                      {/* {about.ourPeopleSectionTheIinTeamLink && (
                        <Button href="/" label="The IIN Team" borderColor="border-off-black" bgColor="bg-black/20" large className="w-full" />
                      )} */}
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-off-black bg-opacity-50 order-1 lg:order-1 relative h-[90vw] lg:h-auto">
                  <SanityImage
                    image={about.ourPeopleSectionImage}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              {/* <div className="bg-[#BDB800] text-[#EBEA33] py-[10vw]">
                <h3 className="font-display italic text-off-black text-[20px] lg:text-[25px] 2xl:text-[40px] leading-tight lg:leading-tight 2xl:leading-tight px-5 lg:px-[7.5vw] max-w-[90%] lg:max-w-[75%] mb-[7.5vw]">
                  <span className="block">The It&apos;s in Nottingham team are your day to day point of contact; we are dedicated to listening to your business needs and making time to communicate effectively with you.</span>
                </h3>

                <div className="flex flex-wrap px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <h3 className="text-[6.5vw] leading-none lg:text-[3.5vw] 2xl:text-[3vw] lg:leading-none xl:leading-none 2xl:leading-none mb-6 lg:mb-12 uppercase text-off-black lg:max-w-[90%] 2xl:max-w-[80%]">Meet <span className="relative"><IconSquiggleUnderline className="absolute -bottom-2 left-0 right-0 w-full scale-[1.1]" />our <span className="font-display italic relative">board</span></span></h3>
                    
                    <div className="text-off-black text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight max-w-[75%]">
                      <p className="mb-8 lg:mb-12">Our operation and management is overseen by a Board of Directors drawn from the retail, leisure, office and education sectors.</p>

                    <Link href="/" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto text-off-black">Meet the team!</Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h3 className="text-[6.5vw] leading-none lg:text-[3.5vw] 2xl:text-[3vw] lg:leading-none xl:leading-none 2xl:leading-none mb-8 lg:mb-12 uppercase text-off-black lg:max-w-[90%] 2xl:max-w-[80%] relative">
                      Meet the <span className="font-display italic">IIN Team</span>
                      <IconSlattedUnderline className="absolute -bottom-5 left-0 right-0 w-[55%]" />
                    </h3>
                    
                    <div className="text-off-black text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight max-w-[85%]">
                      <p className="mb-8 lg:mb-12">Together, the It&apos;s in Nottingham team will make the city centre a vibrant and safe place to visit and ensure sustainable economic growth for Nottingham.</p>

                      <Link href="/" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none mx-auto text-off-black">Meet the team!</Link>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="relative flex overflow-x-hidden text-[17vw] lg:text-[10vw] leading-[0] uppercase my-12 lg:my-[7vw] text-[#FF5F38]">
                <div className="animate-marquee will-change-transform whitespace-nowrap">
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                </div>

                <div className="absolute top-0 animate-marquee2 will-change-transform whitespace-nowrap">
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block font-display italic">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                  <span className="relative overflow-hidden inline-block">Read All About It<span className="inline-block w-[17vw] lg:w-[10vw] translate-y-[-9%] ml-2"><IconSmile className="inline-block animate-spin-slow aspect-square-reverse" /></span></span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
                <div className="col-span-1 flex items-center justify-center px-[5vw] pb-16 lg:pb-[10vw] order-2 lg:order-1">
                  <div className="w-full lg:px-0">                    
                    <h2 className="text-3xl leading-none lg:text-3xl lg:leading-none xl:text-4xl xl:leading-none max-w-[550px] lg:max-w-[100%] mb-6 lg:mb-4">Key Resources</h2>
                    
                    <div className="text-base leading-tight lg:text-lg 2xl:text-xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-11/12 lg:w-[10/12] mb-10 lg:mb-6">
                      <CustomPortableText content={about.keyResourcesSectionText} className="content" />
                    </div>

                    <div className="text-base leading-tight lg:text-lg 2xl:text-xl lg:leading-snug 2xl:leading-snug max-w-[530px] lg:max-w-none w-11/12 lg:w-[10/12]">
                      {about.keyResourcesDownloads.map((e, i) => {
                        return (
                          <p key={i} className="mb-1"><a href={e.file?.asset?.url ? e.file.asset.url : e.link } target="_blank" rel="noopener noreferrer" className="border-b border-black/30">{e.file?.asset?.url ? "Download" : 'View'} {e.title}</a></p>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>

          <Footer policies={policies} contact={contact} />
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