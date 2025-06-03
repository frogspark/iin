import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation } from "framer-motion";
import IconFacebook from "@/icons/facebook.svg";
import IconLinkedin from "@/icons/linkedin.svg";
import IconTwitter from "@/icons/twitter.svg";
import { eventsSlugQuery } from "@/helpers/queries";
import SanityPageService from "@/services/sanityPageService";
import SanityImageResponsive from "@/components/sanity-image-responsive";
import { redirect } from "next/navigation";
const pageService = new SanityPageService(eventsSlugQuery);
var slugify = require("slugify");

export default function Events(initialData) {
  console.log('SINGLE EVENT')
  console.log(initialData)
  const {
    data: { contact, policies, current },
  } = pageService.getPreviewHook(initialData)();

  if(!current) {
    // redirect('/');
    return (
        <h1>no content</h1>
    );
  }

  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full selection:text-white selection:bg-[#176B75] pt-[33vw] lg:pt-[15vw] xl:pt-[10vw]">
                <div className="font-display italic text-base lg:text-xl xl:text-2xl flex justify-center mb-5 lg:mb-12">
                  <div>
                    {/* <Link href="/news">IIN News</Link>
                    <span>&nbsp;/&nbsp;</span>
                    <Link
                      href={`/news/categories/${current.category.slug.current}`}
                    >
                      {current.category.title}
                    </Link> */}
                  </div>
                </div>
                <div className="w-full text-center uppercase px-5 lg:px-[10vw] pb-[3.3vw]">
                  <h1 className="text-[10.5vw] lg:text-[5.5vw] leading-[0.9] lg:leading-[0.9] text-[#437256]">
                    {current.title}
                  </h1>
                </div>
              </div>

              <div className={`w-full relative px-5 lg:px-[7.5vw] mb-[5vw]`}>
                {current.heroImage && (
                  <SanityImageResponsive
                    priority
                    quality={75}
                    image={current.mobileHeroImage}
                    className="w-full"
                    sizes={`(max-width: 1024px) 100vw, 89vw`}
                  />
                )}
              </div>

              <div className="flex flex-wrap px-5 lg:px-[7.5vw] mb-12 lg:mb-[7.5vw]">
                <div className="w-full lg:w-[72%] mb-8 lg:mb-0">
                  <div className="w-[95%] lg:w-[80%]">
                    {current.introText && (
                      <p className="font-display text-[5.25vw] lg:text-3xl xl:text-4xl leading-[1.2] lg:leading-[1.2] xl:leading-[1.2] mb-8 lg:mb-12">
                        {current.introText}
                      </p>
                    )}

                    <p className="text-base lg:text-lg xl:text-xl leading-none lg:leading-none xl:leading-none mb-6 lg:mb-12">
                      <strong>Posted:</strong> {mainMo} {mainYe}
                    </p>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <p className="text-base lg:text-lg xl:text-xl font-bold mb-3 lg:mb-5">
                      Share Article:
                    </p>

                    <div className="flex space-x-3 lg:space-x-3 xl:space-x-3 items-center">
                      <a
                        href={`https://www.facebook.com/share.php?u=https://www.itsinnottingham.com//news/${current.slug.current}&quote=${current.title}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-[#B4C0C6] bg-opacity-40 relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms] text-off-black"
                      >
                        <IconFacebook className="w-[25%] relative z-10" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                          <div
                            className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}
                          ></div>
                        </div>
                      </a>

                      <a
                        href={`http://twitter.com/share?text=${current.title}&url=https://www.itsinnottingham.com//news/${current.slug.current}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-[#B4C0C6] bg-opacity-40 relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms] text-off-black"
                      >
                        <IconTwitter className="w-[70%] relative z-10" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                          <div
                            className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}
                          ></div>
                        </div>
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.itsinnottingham.com//news/${current.slug.current}&quote=${current.title}`}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-[#B4C0C6] bg-opacity-40 relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms] text-off-black"
                      >
                        <IconLinkedin className="w-[45%] relative z-10" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                          <div
                            className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}
                          ></div>
                        </div>
                      </a>
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
  );
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context);
  return {
    props: props,
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths("events");
  return {
    paths: paths,
    fallback: false,
  };
}
