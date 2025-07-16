import Layout from "@/components/layout";
import Footer from "@/components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import NewsTeaser from "@/components/news-teaser";
import { whatsOnQuery } from "@/helpers/queries";
import { eventsQuery } from "@/helpers/queries";
import { syncEventsQuery } from "@/helpers/queries";

import SanityPageService from "@/services/sanityPageService";
import { reveal } from "@/helpers/transitions";
import CustomPortableText from "@/components/CustomPortableText";
const pageService = new SanityPageService(whatsOnQuery);
const pageService2 = new SanityPageService(eventsQuery);
const pageService3 = new SanityPageService(syncEventsQuery);

export default function Events(initialData) {
  const {
    data: { contact, policies,whatsOn, events, syncEvents},
  } = pageService.getPreviewHook(initialData)();
const allEvents = [...events, ...syncEvents].sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
const layoutPattern = [
  // Corresponds to i = 0, 10, 20...
  { width: "col-span-4 lg:col-span-2", imageHeight: "h-[60vw] lg:h-[25vw]" },
  // Corresponds to i = 1, 11, 21...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[28vw]" },
  // Corresponds to i = 2, 12, 22...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[24vw]" },
  // Corresponds to i = 3, 13, 23...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[14vw]" },
  // Corresponds to i = 4, 14, 24...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[25vw]" },
  // Corresponds to i = 5, 15, 25...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[12.5vw]" },
  // Corresponds to i = 6, 16, 26... (Default styles)
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[25vw]" },
  // Corresponds to i = 7, 17, 27... (Default styles)
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[25vw]" },
  // Corresponds to i = 8, 18, 28...
  { width: "col-span-4 lg:col-span-1", imageHeight: "h-[60vw] lg:h-[22vw]" },
  // Corresponds to i = 9, 19, 29...
  { width: "col-span-4 lg:col-span-2", imageHeight: "h-[60vw] lg:h-[27vw]" },
];
console.log("allEvents", whatsOn);
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
                        <span className="inline font-display italic">Events</span>
                      </m.span>
                    </span>
                  </h1>
                </div>

                <div className="flex flex-wrap justify-center px-5 lg:px-[7.5vw]">
                  <div className="w-full lg:w-9/12 mb-[20vw] lg:mb-[15vw] xl:mb-[12vw]">
                    <div className="content font-display text-off-black text-[20px] lg:text-[24px] 2xl:text-[36px] leading-tight lg:leading-tight 2xl:leading-tight text-center">
                      {events.heroText ? (
                        <CustomPortableText
                          content={events.heroText}
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

                  <div className="w-full grid grid-cols-4 gap-12 mb-[5vw]">
                    {allEvents.map((e, i) => {
 
                      const currentStyles = layoutPattern[i % layoutPattern.length];

                      return (
                        <NewsTeaser
                          // ✨ Bonus: Using a unique ID from your data is better than the index `i`
                          key={e._id || i}
                          heading={e.title}
                          image={e.mobileHeroImage?.asset?.url || e.teaserImage}
                          className={currentStyles.width}
                          imageHeight={currentStyles.imageHeight}
                          href={`/events/${e.slug.current}/`}
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
  const whatsOnData = await pageService.fetchQuery(context);
  const eventsData = await pageService2.fetchQuery(context);
  const syncEventData = await pageService3.fetchQuery(context);
  return {
    props: {
      ...whatsOnData,
      events: eventsData.events || [],
      syncEvents: syncEventData.syncEvent || [],
    },
  };
}