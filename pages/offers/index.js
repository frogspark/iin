import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import NewsTeaser from "@/components/news-teaser";
import { offersQuery } from "@/helpers/queries";
import SanityPageService from "@/services/sanityPageService";
import { reveal } from "@/helpers/transitions";
import CustomPortableText from "@/components/CustomPortableText";
const pageService = new SanityPageService(offersQuery);

export default function Offers(initialData) {
  const {
    data: { contact, policies, offers },
  } = pageService.getPreviewHook(initialData)();

  return (
    <Layout>
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
                        <span className="inline font-display italic">Offers</span>
                      </m.span>
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-9/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div
                        className="content font-display text-off-black text-[20px] lg:text-[24px] 2xl:text-[36px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      {/*{offers.heroText ? (*/ }
                      {/*  <CustomPortableText*/ }
                      {/*    content={offers.heroText}*/ }
                      {/*    className="content"*/ }
                      {/*  />*/ }
                      {/*) : (*/ }
                      {/*  */ }
                      {/*)}*/ }

                      <p>
                        Here&apos;s the <em>lowdown</em> on future city centre{ " " }
                        <em>initiatives</em> and <em>events</em>, as well as
                        the latest on Nottingham&apos;s <em>shops</em> and{ " " }
                        <em>eateries</em> and other important news.
                      </p>
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-4 gap-12 mb-[5vw]">
                    { offers.map((e, i) => {
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

                      let slug = e.slug;
                      if(!e.slug) {
                        slug = e.title.replaceAll(' ', '-');
                        slug = slug.replaceAll('_', '-');
                      }
                      return (
                        <NewsTeaser
                          key={i}
                          image={e.mobileHeaderImage}
                          imageHeight={imageHeight}
                          heading={e.title}
                          className={width}
                          href={`/offers/${slug.current}/`}
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
