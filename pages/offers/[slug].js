import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation } from "framer-motion";
import IconFacebook from "@/icons/facebook.svg";
import IconInsta from "@/icons/instagram.svg";
import IconLinkedin from "@/icons/linkedin.svg";
import IconTwitter from "@/icons/twitter.svg";
import IconSquiggleUnderline from "@/icons/squiggle-underline.svg";
import { NextSeo } from "next-seo";
import Link from "next/link";
import NewsTeaser from "@/components/news-teaser";
import { newsSlugQuery } from "@/helpers/queries";
import SanityPageService from "@/services/sanityPageService";
import SanityImageResponsive from "@/components/sanity-image-responsive";
import Blockquote from "@/components/blockquote";
import Head from "next/head";
import CustomPortableText from "@/components/CustomPortableText";
const pageService = new SanityPageService(newsSlugQuery);
var slugify = require("slugify");

export default function Offers(initialData) {
  const {
    data: { contact, policies, current },
  } = pageService.getPreviewHook(initialData)();
  console.log(current);
  let mainD = new Date(current.postDate);
  let mainYe = new Intl.DateTimeFormat("en", { year: "numeric" }).format(mainD);
  let mainMo = new Intl.DateTimeFormat("en", { month: "short" }).format(mainD);

  let relatedPosts =
    current.customRelated?.length > 0 ? current.customRelated : current.related;

  return (
    <Layout>
      <NextSeo
        title={current.seo?.metaTitle ? current.seo?.metaTitle : current.title}
        canonical={`https://www.itsinnottingham.com/news/${current.slug.current}/`}
        description={current.seo?.metaDesc ? current.seo?.metaDesc : null}
        openGraph={{
          title: current.seo?.metaTitle
            ? current.seo?.metaTitle
            : current.title,
          description: current.seo?.metaDesc ? current.seo?.metaDesc : null,
          images: current.seo?.shareGraphic?.asset
            ? [
                {
                  url: current.seo?.shareGraphic?.asset.url
                    ? current.seo?.shareGraphic?.asset.url
                    : null,
                  width: current.seo?.shareGraphic?.asset.metadata.dimensions
                    .width
                    ? current.seo?.shareGraphic?.asset.metadata.dimensions.width
                    : null,
                  height: current.seo?.shareGraphic?.asset.metadata.dimensions
                    .height
                    ? current.seo?.shareGraphic?.asset.metadata.dimensions
                        .height
                    : null,
                  type: "image/jpeg",
                },
              ]
            : null,
        }}
      />

      {current.seo?.jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: current.seo.jsonLd }}
            key="product-jsonld"
          />
        </Head>
      )}

      <LazyMotion features={domAnimation}>
        <div>
          <main className="">
            <article>
              <div className="w-full selection:text-white selection:bg-[#176B75] pt-[33vw] lg:pt-[15vw] xl:pt-[10vw]">
                <div className="font-display italic text-base lg:text-xl xl:text-2xl flex justify-center mb-5 lg:mb-12">
                  <div>
                    <Link href="/news">IIN News</Link>
                    <span>&nbsp;/&nbsp;</span>
                    <Link
                      href={`/news/categories/${current.category.slug.current}`}
                    >
                      {current.category.title}
                    </Link>
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
                    image={current.heroImage}
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

                    <div className="mb-6 lg:mb-12">
                      {current.content ? (
                        <CustomPortableText
                          content={current.content}
                          className="content content--news"
                          serializers={{
                            Quote: (props) => (
                              <Blockquote
                                quote={props.quote}
                                author={props.author}
                              />
                            ),
                            Embed: (props) => (
                              <div
                                className="w-full"
                                dangerouslySetInnerHTML={{ __html: props.code }}
                              />
                            ),
                            Image: (props) => {
                              return (
                                <SanityImageResponsive
                                  image={props.image}
                                  wrap={props.wrapText}
                                  customLink={props.customLink}
                                />
                              );
                            },
                            internalLink: (props) => {
                              const { slug = {} } = props;

                              // Prefix
                              let prefix = "/";
                              props.type == "categories" &&
                                (prefix = "/news/categories/");
                              props.type == "news" && (prefix = "/news/");
                              props.type == "policies" &&
                                (prefix = "/policies/");

                              // HREF
                              const href = `${prefix}${
                                slug
                                  ? slug.current
                                  : slugify(JSON.stringify(props.title), {
                                      lower: true,
                                      remove: /[*+~.()'"!:@]/g,
                                    })
                              }`;

                              return <Link href={href}>{props.children}</Link>;
                            },
                            link: (props) => {
                              const { blank, href, children } = props;
                              return blank ? (
                                <a href={href} target="_blank" rel="noopener">
                                  {children}
                                </a>
                              ) : (
                                <a href={href}>{children}</a>
                              );
                            },
                            mailToLink: (props) => {
                              const { email, children } = props;
                              const link = `mailto:${email}`;
                              return <a href={link}>{children}</a>;
                            },
                          }}
                        />
                      ) : (
                        <p>Content coming soon!</p>
                      )}
                    </div>

                    <hr className="border-t-0 border-b border-[#B4C0C6] mb-6 lg:mb-12" />

                    <p className="text-base lg:text-lg xl:text-xl font-bold mb-3 lg:mb-5">
                      Share Article:
                    </p>

                    <div className="flex space-x-3 lg:space-x-3 xl:space-x-3 items-center">
                      {/* <a href={`https://www.facebook.com/share.php?u=https://www.itsinnottingham.com//news/${current.slug.current}&quote=${current.title}`} rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-[#B4C0C6] bg-opacity-40 relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms] text-off-black">
                      <IconInsta className="w-[45%] relative z-10" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
                        <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
                      </div>
                    </a> */}
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

                <div className="w-full lg:w-[28%]">
                  <div className="bg-[#EBE8DF] p-5 lg:p-[2vw] lg:pb-6">
                    <h3 className="text-2xl lg:text-2xl xl:text-3xl block leading-none lg:leading-none xl:leading-none">
                      Related Articles
                    </h3>

                    {relatedPosts.map((e, i) => {
                      let width = "w-full";
                      let imageHeight = "h-[50vw] lg:h-[15vw]";

                      return (
                        <NewsTeaser
                          key={i}
                          subHeading={e.category.title}
                          heading={e.title}
                          image={e.teaserImage}
                          className={`${width} mb-12`}
                          imageHeight={imageHeight}
                          href={`/news/${e.slug.current}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full mb-20 lg:mb-[7.5vw] px-5 lg:px-[7.5vw]">
                <div className="mb-8 lg:mb-12">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl block leading-none lg:leading-none xl:leading-none mb-2 lg:mb-3 pb-0">
                    More Stories
                  </h3>
                  <IconSquiggleUnderline className="w-[45%] lg:w-[30%] 2xl:w-[24%] -translate-x-2 lg:translate-x-[-8%]" />
                </div>

                <div className="grid grid-cols-4 gap-12 mb-12 lg:mb-[5vw]">
                  {current.more.map((e, i) => {
                    let width = "col-span-4 lg:col-span-1";
                    let imageHeight = "h-[60vw] lg:h-[25vw]";

                    i == 0 && (width = "col-span-4 lg:col-span-2");
                    i == 1 && (imageHeight = "h-[60vw] lg:h-[28vw]");
                    i == 2 && (imageHeight = "h-[60vw] lg:h-[24vw]");
                    i == 3 && (imageHeight = "h-[60vw] lg:h-[14vw]");
                    i == 4 && (imageHeight = "h-[60vw] lg:h-[25vw]");
                    i == 5 && (imageHeight = "h-[60vw] lg:h-[12.5vw]");

                    return (
                      <NewsTeaser
                        key={i}
                        subHeading={e.category.title}
                        heading={e.title}
                        image={e.teaserImage}
                        className={width}
                        imageHeight={imageHeight}
                        href={`/news/${e.slug.current}`}
                      />
                    );
                  })}
                </div>

                {/* <div className="w-full flex items-center justify-center">
                  <Link href="/news" className="a11y-focus rounded-full border border-off-black py-4 lg:py-6 2xl:py-8 px-6 lg:px-8 2xl:px-10 inline-block leading-none 2xl:text-2xl 2xl:leading-none">View all stories</Link>
                </div> */}
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
  const paths = await pageService.fetchPaths("news");
  return {
    paths: paths,
    fallback: false,
  };
}
