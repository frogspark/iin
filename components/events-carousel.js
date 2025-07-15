import IconChevron from "@/icons/chevron.svg";
import IconArrow from "@/icons/arrow.svg";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import SanityImage from "./sanity-image";
import ConditionalWrap from "conditional-wrap";

export default function EventsCarousel({ items, offer, initiatives }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className="relative">
      {/* <button
        aria-label="Move Carousel Items Along Backwards"
        onClick={scrollPrev}
        className={`absolute top-[25vw] lg:top-[12vw] 2xl:top-[10vw] left-[5%] z-10 w-[50px] lg:w-[50px] 2xl:w-[75px] h-[50px] lg:h-[50px] 2xl:h-[75px] bg-white flex items-center justify-center rounded-full a11y-focus lg:hover:scale-[1.15]  ${
          prevBtnDisabled ? "opacity-0" : "opacity-100"
        } transition-all ease-in-out duration-[330ms]`}
      >
        <IconArrow className="w-[30%] block rotate-[-90deg]" />
      </button>

      <button
        aria-label="Move Carousel Items Along"
        onClick={scrollNext}
        className={`absolute top-[25vw] lg:top-[12vw] 2xl:top-[10vw] right-[5%] z-10 w-[50px] lg:w-[50px] 2xl:w-[75px] h-[50px] lg:h-[50px] 2xl:h-[75px] bg-white flex items-center justify-center rounded-full a11y-focus lg:hover:scale-[1.15] ${
          nextBtnDisabled ? "opacity-0" : "opacity-100"
        } transition-all ease-in-out duration-[330ms]`}
      >
        <IconArrow className="w-[30%] block rotate-90" />
      </button> */}

      <div
        className={`embla ${
          offer ? "pl-[5vw]" : "pr-[5vw]"
        } relative mb-12 lg:mb-16 2xl:mb-20`}
        ref={emblaRef}
      >
        <div className="embla__container gap-4">
      {items
            .filter((e) => e.showOnWebsite === true)
            .map((e, i) => {
              const dateObj = new Date(e.dateTime);
              const datePart = dateObj
                .toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(",", "");

            const timePart = dateObj.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });

            return (
              <div className="w-[560px] pr-4" key={i}>
                <ConditionalWrap
                  condition={e?.slug?.current}
                  wrap={(children) => (
                    <Link
                      className="block group"
                      href={`/events/${e?.slug?.current}`}
                    >
                      {children}
                    </Link>
                  )}
                >
                  <div className="w-[560px] h-[363px] relative overflow-hidden">
                    <img
                      src={e.mobileHeroImage.asset.url}
                      alt={e.mobileHeroImage?.alt}
                    />
                  </div>

                  <div
                    className={`w-[560px] bg-white h-64 p-6 flex flex-col ${
                      offer ? "gap-5" : "justify-between"
                    }`}
                  >
                    {!offer ? (
                      <div className="flex justify-between">
                        <div className="flex gap-2 h-6">
                          <svg
                            className="fill-[#6a6a6a]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
                          </svg>
                          <span className="text-xl text-[#6A6A6A] font-sans">
                            {datePart}
                          </span>
                        </div>
                        <div className="flex gap-2 h-6">
                          <svg
                            className="fill-[#6a6a6a]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                          </svg>
                          <span className="text-xl text-[#6A6A6A] font-sans">
                            {timePart}
                          </span>
                        </div>
                        <div className="flex gap-2 h-6">
                          <svg
                            className="fill-[#6a6a6a]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" />
                          </svg>
                          <span className="text-xl text-[#6A6A6A] font-sans">
                            0.9 Miles
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-2xl text-[#BD3146] font-sans">
                        {e.address}
                      </span>
                    )}

                    <div className="flex flex-col gap-2">
                      <span className="text-4xl color-black font-sans">
                        {e.title}
                      </span>
                      {!offer ? (
                        <span className="text-xl color-[#6a6a6a] font-sans">
                          {e.address}
                        </span>
                      ) : null}
                    </div>
                    {offer && (
                      <div>
                        <span className="text-xl color-[#6a6a6a] font-sans">
                          {e.introText}
                        </span>
                      </div>
                    )}

                    {!offer ? (
                      <div className="flex justify-between">
                        {/* <span className="text-4xl text-[#BD3146] font-sans">
                          £{e.price}
                        </span> */}
                        <button className="bg-[#FC6E5C] text-white rounded-3xl px-6 font-sans">
                          {e.buttonText || "Get tickets!"}
                        </button>
                      </div>
                    ) : null}
                  </div>
                </ConditionalWrap>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
