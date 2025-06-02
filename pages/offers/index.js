import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import NewsTeaser from "@/components/news-teaser";
import { newsQuery } from "@/helpers/queries";
import SanityPageService from "@/services/sanityPageService";
import Link from "next/link";
import { reveal } from "@/helpers/transitions";
import { useState } from "react";
import CustomPortableText from "@/components/CustomPortableText";
import Head from "next/head";
const pageService = new SanityPageService(newsQuery);

export default function Offers(initialData) {
  const {
    data: { contact, policies, news, newsLanding, cats },
  } = pageService.getPreviewHook(initialData)();
  const [showFilters, setShowFilters] = useState(false);

  const filterToggle = () => {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  };
  return (
    <Layout>
      <NextSeo
        title={
          newsLanding.seo?.metaTitle
            ? newsLanding.seo?.metaTitle
            : newsLanding.title
        }
        canonical={`https://www.itsinnottingham.com/news/`}
        description={
          newsLanding.seo?.metaDesc ? newsLanding.seo?.metaDesc : null
        }
        openGraph={{
          title: newsLanding.seo?.metaTitle
            ? newsLanding.seo?.metaTitle
            : newsLanding.title,
          description: newsLanding.seo?.metaDesc
            ? newsLanding.seo?.metaDesc
            : null,
          images: newsLanding.seo?.shareGraphic?.asset
            ? [
                {
                  url: newsLanding.seo?.shareGraphic?.asset.url
                    ? newsLanding.seo?.shareGraphic?.asset.url
                    : null,
                  width: newsLanding.seo?.shareGraphic?.asset.metadata
                    .dimensions.width
                    ? newsLanding.seo?.shareGraphic?.asset.metadata.dimensions
                        .width
                    : null,
                  height: newsLanding.seo?.shareGraphic?.asset.metadata
                    .dimensions.height
                    ? newsLanding.seo?.shareGraphic?.asset.metadata.dimensions
                        .height
                    : null,
                  type: "image/jpeg",
                },
              ]
            : null,
        }}
      />

      {newsLanding.seo?.jsonLd && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: newsLanding.seo.jsonLd }}
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
              <div className="w-full py-[50vw] pb-[25vw] bg-white lg:py-[20vw] lg:pb-[10vw] xl:py-[15vw] xl:pb-[7.5vw] selection:bg-[#FF5F38] selection:text-white">
                <div className="w-full text-center uppercase">
                  <h1 className="text-[16.5vw] lg:text-[9.5vw] leading-none lg:leading-none text-[#FF5F38]">
                    <span className="block overflow-hidden relative">
                      <m.span className="block" variants={reveal}>
                        <span className="inline">Latest</span>{" "}
                        <span className="inline font-display italic">News</span>
                      </m.span>
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-9/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div className="content font-display text-off-black text-[20px] lg:text-[24px] 2xl:text-[36px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      {newsLanding.heroText ? (
                        <CustomPortableText
                          content={newsLanding.heroText}
                          className="content"
                        />
                      ) : (
                        <p>
                          Here&apos;s the <em>lowdown</em> on future city centre{" "}
                          <em>initiatives</em> and <em>events</em>, as well as
                          the latest on Nottingham&apos;s <em>shops</em> and{" "}
                          <em>eateries</em> and other important news.
                        </p>
                      )}
                    </div>
                  </div>

                  <nav className="w-full mb-3 lg:mb-8">
                    <button
                      onClick={() => filterToggle()}
                      className="a11y-focus text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight block lg:hidden"
                    >
                      {showFilters ? "Hide Filters -" : "Show Filters +"}
                    </button>

                    {showFilters && (
                      <ul className="block lg:hidden lg:space-x-6 text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight pt-4 lg:pt-0">
                        <li className="mb-1 lg:mb-0 inline-block relative">
                          <Link href="/news">
                            All{" "}
                            <span className="border-b border-off-black block w-full"></span>
                          </Link>
                        </li>
                        {cats.map((e, i) => {
                          return (
                            <li key={i} className="mb-1 lg:mb-0">
                              <Link
                                className="text-black opacity-20 group lg:hover:opacity-100 "
                                href={`/news/categories/${e.slug.current}`}
                              >
                                {e.title}{" "}
                                <span className="border-b border-off-black block w-0 lg:group-hover:w-full"></span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    <ul className="lg:flex lg:space-x-6 text-lg lg:text-xl 2xl:text-2xl leading-tight lg:leading-tight 2xl:leading-tight pt-4 lg:pt-0 hidden">
                      <li className="mb-1 lg:mb-0 inline-block relative">
                        <Link href="/news">
                          All{" "}
                          <span className="border-b border-off-black block w-full"></span>
                        </Link>
                      </li>
                      {cats.map((e, i) => {
                        return (
                          <li key={i} className="mb-1 lg:mb-0">
                            <Link
                              className="text-black opacity-20 group lg:hover:opacity-100 "
                              href={`/news/categories/${e.slug.current}`}
                            >
                              {e.title}{" "}
                              <span className="border-b border-off-black block w-0 lg:group-hover:w-full"></span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="w-full grid grid-cols-4 gap-12 mb-[5vw]">
                    {news.map((e, i) => {
                      let width = "col-span-4 lg:col-span-1";
                      let imageHeight = "h-[60vw] lg:h-[25vw]";

                      i == 0 && (width = "col-span-4 lg:col-span-2");
                      i == 1 && (imageHeight = "h-[60vw] lg:h-[28vw]");
                      i == 2 && (imageHeight = "h-[60vw] lg:h-[24vw]");
                      i == 3 && (imageHeight = "h-[60vw] lg:h-[14vw]");
                      i == 4 && (imageHeight = "h-[60vw] lg:h-[25vw]");
                      i == 5 && (imageHeight = "h-[60vw] lg:h-[12.5vw]");
                      i == 8 && (imageHeight = "h-[60vw] lg:h-[22vw]");
                      i == 9 &&
                        ((width = "col-span-4 lg:col-span-2"),
                        (imageHeight = "h-[60vw] lg:h-[27vw]"));
                      i == 10 && (width = "col-span-4 lg:col-span-2");
                      i == 11 && (imageHeight = "h-[60vw] lg:h-[28vw]");
                      i == 12 && (imageHeight = "h-[60vw] lg:h-[24vw]");
                      i == 13 && (imageHeight = "h-[60vw] lg:h-[14vw]");
                      i == 14 && (imageHeight = "h-[60vw] lg:h-[25vw]");
                      i == 15 && (imageHeight = "h-[60vw] lg:h-[12.5vw]");
                      i == 18 && (imageHeight = "h-[60vw] lg:h-[22vw]");
                      i == 19 &&
                        ((width = "col-span-4 lg:col-span-2"),
                        (imageHeight = "h-[60vw] lg:h-[27vw]"));

                      return (
                        <NewsTeaser
                          key={i}
                          subHeading={e.category.title}
                          heading={e.title}
                          image={e.teaserImage}
                          className={width}
                          imageHeight={imageHeight}
                          href={`/news/${e.slug.current}/`}
                        />
                      );
                    })}
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
  const props = await pageService.fetchQuery(context);
  return {
    props: props,
  };
}
