import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import IconSlattedUnderline from "@/icons/slatted-underline.svg";
import IconSquiggleUnderline from "@/icons/squiggle-underline.svg";
import IconZagUnderline from "@/icons/zag-underline.svg";
import IconCircle from "@/icons/circle.svg";
import Link from "next/link";
import Image from "next/image";
import ImageScale from "@/components/image-scale";
import { whatsOnQuery } from "@/helpers/queries";
import { eventsQuery } from "@/helpers/queries";
import { offersQuery } from "@/helpers/queries";
import useIsMobile from "@/helpers/isMobile";
import SanityPageService from "@/services/sanityPageService";
import { reveal } from "@/helpers/transitions";
import Button from "@/components/button";
import CustomPortableText from "@/components/CustomPortableText";
import SanityImageScale from "@/components/sanity-image-scale";
import Head from "next/head";
import SanityImage from "@/components/sanity-image";
import SanityImageResponsive from "@/components/sanity-image-responsive";
import EventsCarousel from "@/components/events-carousel";
import MobileVerticalSlider from "@/components/mobileVerticalSlider";
import Line from "@/icons/line.svg";
const pageService = new SanityPageService(whatsOnQuery);
const pageService2 = new SanityPageService(eventsQuery);
const pageService3 = new SanityPageService(offersQuery);
const container = {
  enter: {
    transition: {
      staggerChildren: 0.066,
    },
  },
};

const draw = {
  initial: { pathLength: 0 },
  enter: {
    pathLength: 1,
    transition: { delay: 0.3, duration: 0.66, ease: [0.71, 0, 0.17, 1] },
  },
  exit: {
    pathLength: 0,
    transition: { duration: 0.33, ease: [0.71, 0, 0.17, 1] },
  },
};

export default function WhatsOn(initialData) {
  const {
    data: { contact, policies, whatsOn, events, offers },
  } = pageService.getPreviewHook(initialData)();
  const eventText = whatsOn.eventText;
  const match = eventText.match(/^([A-Z\s]+)(.*)$/);
  const upperText = match ? match[1].trim() : eventText;
  const lowerText = match ? match[2].trim() : "";
  const offerText = whatsOn.offerText;
  const match2 = offerText.match(/^([A-Z\s]+)(.*)$/);
  const upperText2 = match2 ? match2[1].trim() : offerText;
  const lowerText2 = match2 ? match2[2].trim() : "";
  const isMobile = useIsMobile();

  return (
    <Layout>
      <NextSeo
        title={whatsOn.seo?.metaTitle ? whatsOn.seo?.metaTitle : whatsOn.title}
        canonical={`https://www.itsinnottingham.com/whats-on/`}
        description={whatsOn.seo?.metaDesc ? whatsOn.seo?.metaDesc : null}
        openGraph={{
          title: whatsOn.seo?.metaTitle
            ? whatsOn.seo?.metaTitle
            : whatsOn.title,
          description: whatsOn.seo?.metaDesc ? whatsOn.seo?.metaDesc : null,
          images: whatsOn.seo?.shareGraphic?.asset
            ? [
                {
                  url: whatsOn.seo?.shareGraphic?.asset.url
                    ? whatsOn.seo?.shareGraphic?.asset.url
                    : null,
                  width: whatsOn.seo?.shareGraphic?.asset.metadata.dimensions
                    .width
                    ? whatsOn.seo?.shareGraphic?.asset.metadata.dimensions.width
                    : null,
                  height: whatsOn.seo?.shareGraphic?.asset.metadata.dimensions
                    .height
                    ? whatsOn.seo?.shareGraphic?.asset.metadata.dimensions
                        .height
                    : null,
                  type: "image/jpeg",
                },
              ]
            : null,
        }}
      />

      {whatsOn.seo?.jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: whatsOn.seo.jsonLd }}
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
          <main className="overflow-hidden">
            <article>
              <div className="w-full bg-[#ffc3d6] relative selection:bg-off-black selection:text-[#ffc3d6]">
                {/* <div className="absolute inset-0 w-full h-[100vh] lg:h-screen lg:opacity-0">
                  <SanityImage
                    p
                    image={whatsOn.mobileHeroImage}
                    fill
                  />
                  <div className="absolute bottom-0 left-0 right-0 w-full h-[] bg-gradient-to-t from-[#ffc3d6] via-[#ffc3d6] to-transparent"></div>
                </div> */}

                <div className="w-full text-center uppercase lg:min-h-screen flex flex-col items-center justify-center pt-[37vh] lg:pt-0 relative z-[10]">
                  <div className="translate-y-[-50%] lg:translate-y-0">
                    <m.h1
                      variants={container}
                      className="text-[12vw] lg:text-[11.5vw] leading-none lg:leading-none text-[#BD3146] mb-2 lg:mb-5 translate-x-[-1vw] lg:translate-x-0"
                    >
                      <span className="relative overflow-hidden block">
                        <m.span className="block" variants={reveal}>
                          Discover
                        </m.span>
                      </span>
                      <span className="block font-display italic relative overflow-hidden">
                        <m.span className="block" variants={reveal}>
                          Nottingham
                        </m.span>
                      </span>
                    </m.h1>

                    <svg
                      className="text-[#BD3146] w-[100%] lg:w-[100%] mx-auto mb-24 lg:mb-0 translate-x-[-1vw] lg:translate-x-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1519.962 29.772"
                    >
                      <defs>
                        <clipPath id="a">
                          <path
                            fill="none"
                            d="M0 29.772h1519.962V0H0Z"
                            data-name="Path 1258"
                          />
                        </clipPath>
                      </defs>
                      <g data-name="Group 562">
                        <g data-name="Group 561">
                          <g clipPath="url(#a)" data-name="Group 560">
                            <m.path
                              variants={draw}
                              fill="none"
                              stroke="currentColor"
                              strokeMiterlimit="120"
                              strokeWidth="5"
                              d="m2.182 4.398 20.949 20.949L43.557 4.398l20.949 20.949L85.454 4.398l20.428 20.949 20.947-20.949 20.953 20.949 20.423-20.949 20.949 20.949 20.949-20.949 20.423 20.949 20.95-20.949 20.949 20.949 20.426-20.949L313.8 25.347l20.949-20.949 20.426 20.949 20.949-20.949 20.949 20.949 20.948-20.949 20.434 20.949 20.433-20.949 20.949 20.949 20.945-20.949 20.39 20.949 20.386-20.949 20.949 20.949 20.948-20.949 20.427 20.949L624.83 4.398l20.952 20.949 20.423-20.949 20.949 20.949 20.949-20.949 20.424 20.949 20.949-20.949 20.949 20.949L790.85 4.398l20.949 20.949L832.75 4.398l20.426 20.949 20.949-20.949 20.949 20.949 20.948-20.949 20.434 20.949 20.433-20.949 20.949 20.949 20.949-20.949 20.5 20.949 21.025-20.949 20.426 20.949 20.944-20.949 20.846 20.947 20.326-20.947 20.949 20.949 20.949-20.949 20.43 20.949 20.944-20.949 20.949 20.949 20.426-20.949 20.949 20.949 20.949-20.949 20.424 20.949 20.949-20.949 20.949 20.949 20.426-20.949 20.949 20.949 20.95-20.949 20.426 20.949 20.949-20.949 20.949 20.949 20.949-20.949 20.434 20.949"
                              data-name="Path 1257"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>

                  {/* <IconZagUnderline className="text-[#BD3146] w-[90%] lg:w-[75%] mx-auto" /> */}
                </div>

                <div className="w-full h-[75vw] lg:opacity-0 lg:hidden relative overflow-hidden">
                  <SanityImage
                    p
                    image={whatsOn.mobileHeroImage}
                    fill
                    className="w-full h-[55vw]"
                  />
                </div>

                <div className="relative pt-8">
                  <div className="flex flex-wrap px-5 lg:px-[5vw] max-w-[1800px] mx-auto mb-5 lg:mb-0">
                    <div className="w-full lg:w-[55%]">
                      <div className="text-off-black mb-3 lg:mb-8 lg:max-w-[90%]">
                        <CustomPortableText
                          className="content content--whats-on"
                          content={whatsOn.introText}
                        />
                      </div>

                      <div className="hidden lg:block">
                        <div className="relative rotate-[-2deg] w-[125px] lg:w-[140px] xl:w-[180px] 2xl:w-[220px] aspect-square border-2 border-[#BD3146] rounded-full flex items-center justify-center">
                          <Image
                            quality={80}
                            width={358}
                            height={356}
                            src="/icons/qr-whats-on.svg"
                            alt="QR Code to download the app"
                            className="w-[65%]"
                          />

                          <span className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight text-[#BD3146] block uppercase absolute bottom-[-50px] lg:bottom-[-50px] xl:bottom-[-65px] right-[-190px] lg:right-[-260px] xl:right-[-300px] rotate-[-2deg] xl:rotate-[-5deg] w-[180px] lg:w-[250px] xl:w-[270px] text-center z-[100]">
                            <svg
                              className="w-[50%] lg:w-[45%]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="140.089"
                              height="173.374"
                              viewBox="0 0 140.089 173.374"
                            >
                              <defs>
                                <clipPath id="clip-path">
                                  <path
                                    id="Path_1181"
                                    data-name="Path 1181"
                                    d="M0,0H157.986V72.6H0Z"
                                    fill="none"
                                  />
                                </clipPath>
                              </defs>
                              <g
                                id="Group_422"
                                data-name="Group 422"
                                transform="translate(63.496) rotate(61)"
                              >
                                <g
                                  id="Group_421"
                                  data-name="Group 421"
                                  transform="translate(0 0)"
                                  clipPath="url(#clip-path)"
                                >
                                  <g
                                    id="Group_419"
                                    data-name="Group 419"
                                    transform="translate(3.725 0.831)"
                                  >
                                    <path
                                      id="Path_1179"
                                      data-name="Path 1179"
                                      d="M153.89,8.407S69.6-33.659,0,70.4"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                    />
                                  </g>
                                  <g
                                    id="Group_420"
                                    data-name="Group 420"
                                    transform="translate(0.822 53.01)"
                                  >
                                    <path
                                      id="Path_1180"
                                      data-name="Path 1180"
                                      d="M21.032,16.285,2.374,18.658,0,0"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                            <span className="font-display">
                              <span className="italic">Scan me</span>
                            </span>{" "}
                            with your phone camera to download!
                          </span>
                        </div>
                      </div>

                      {/* <Button href="/about" label="Check out Visit Notts!" borderColor="border-black" className="w-full lg:w-auto block lg:inline-block"  /> */}
                    </div>
                  </div>

                  {whatsOn.imageBlocks[0] && (
                    <div className="relative lg:absolute lg:top-[8%] 2xl:top-[7%] lg:right-0 mb-12 lg:mb-0 w-full lg:w-[40vw] 2xl:w-[44vw]">
                      <div className="overflow-hidden relative  h-[66vw] lg:h-[30vw] mb-5 lg:mb-0">
                        <SanityImageScale
                          p
                          image={whatsOn.imageBlocks[0].image}
                          sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                      </div>
                    </div>
                  )}
                  {whatsOn.offerText && (
                    <div className="absolute w-full lg:max-w-[432px] lg:mt-64 lg:left-36 z-10 lg:rotate-[-5deg]">
                      <IconCircle className="w-full text-[#BD3146] mx-5 lg:mx-[8%] absolute inset-0 lg:translate-x-[-20%] translate-y-[-20%] hidden lg:block" />
                      <h2 className="font-display whitespace-nowrap px-5 w-full text-[52px] leading-none  lg:leading-none xl:leading-none 2xl:leading-none mb-[1vw] lg:max-w-[90%] 2xl:max-w-[80%]">
                        <span>{upperText2}</span>
                        {lowerText2 && (
                          <>
                            <br />
                            <span>{lowerText2}</span>
                          </>
                        )}
                      </h2>
                      {isMobile && <Line className="w-full h-full px-5" />}
                    </div>
                  )}
                  <div className="w-full mb-36 mt-48 lg:mt-96 lg:mb-8 h-auto  overflow-hidden">
                    {isMobile ? (
                      <MobileVerticalSlider items={offers} offer />
                    ) : (
                      <EventsCarousel items={offers} offer={true} initiatives />
                    )}
                  </div>
                  {whatsOn.eventText && (
                    <div className="lg:absolute w-full lg:max-w-[432px]  lg:mt-26 lg:right-0 z-10 lg:rotate-[-5deg]">
                      <IconCircle className="w-full text-[#BD3146] mx-5 lg:mx-[13%] absolute inset-0 lg:translate-x-[-20%] translate-y-[-20%] hidden lg:block" />
                      <h2 className="font-display px-5 w-full text-[52px] leading-none  mb-[1vw] ">
                        <span>{upperText}</span>
                        {lowerText && (
                          <>
                            <br />
                            <span className=" lg:text-right">{lowerText}</span>
                          </>
                        )}
                      </h2>
                      {isMobile && <Line className="w-full h-full px-5" />}
                    </div>
                  )}

                  <div className="w-full pb-36 mt-8 lg:mt-40 h-auto  overflow-hidden">
                    {isMobile ? (
                      <MobileVerticalSlider items={events} offer={false} />
                    ) : (
                      <EventsCarousel
                        items={events}
                        offer={false}
                        initiatives
                      />
                    )}
                  </div>
                </div>
              </div>
            </article>
          </main>

          <Footer policies={policies} contact={contact} />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const whatsOnData = await pageService.fetchQuery(context);
  const eventsData = await pageService2.fetchQuery(context);
  const offersData = await pageService3.fetchQuery(context);

  return {
    props: {
      ...whatsOnData,
      events: eventsData.events || [],
      offers: offersData.offers || [],
    },
  };
}
