import IconChevron from '@/icons/chevron.svg'
import IconArrow from '@/icons/arrow.svg'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import SanityImage from './sanity-image'
import ConditionalWrap from 'conditional-wrap';

export default function NewsCarousel({ items, initiatives }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])
  return (
    <div className="relative">
      
      <button aria-label="Move Carousel Items Along Backwards" onClick={scrollPrev} className={`absolute top-[25vw] lg:top-[12vw] 2xl:top-[10vw] left-[5%] z-10 w-[50px] lg:w-[50px] 2xl:w-[75px] h-[50px] lg:h-[50px] 2xl:h-[75px] bg-white flex items-center justify-center rounded-full a11y-focus lg:hover:scale-[1.15]  ${prevBtnDisabled ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-[330ms]`}>
        <IconArrow className="w-[30%] block rotate-[-90deg]" />
      </button>

      <button aria-label="Move Carousel Items Along" onClick={scrollNext} className={`absolute top-[25vw] lg:top-[12vw] 2xl:top-[10vw] right-[5%] z-10 w-[50px] lg:w-[50px] 2xl:w-[75px] h-[50px] lg:h-[50px] 2xl:h-[75px] bg-white flex items-center justify-center rounded-full a11y-focus lg:hover:scale-[1.15] ${nextBtnDisabled ? 'opacity-0' : 'opacity-100'} transition-all ease-in-out duration-[330ms]`}>
        <IconArrow className="w-[30%] block rotate-90" />
      </button>

      <div className="embla pl-[5vw] relative mb-12 lg:mb-16 2xl:mb-20" ref={emblaRef}>
        <div className="embla__container">
          {items.map((e, i) => {
            return (
              <div className={`embla__slide ${initiatives ? 'pr-5 lg:pr-10' : 'pr-3 lg:pr-5'}`} key={i}>
                <ConditionalWrap
                  condition={!!e.article?.slug.current || e.slug?.current}
                  wrap={children => (
                    <Link className="block group" href={`/news/${initiatives ? e.article.slug.current : e.slug.current}`}>
                      {children}
                    </Link>
                  )}
                >
                  <div className="w-full h-[60vw] lg:h-[25.5vw] 2xl:h-[23.5vw] mb-5 relative overflow-hidden">
                    {e.teaserImage && (
                      <SanityImage
                        image={e.teaserImage}
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="scale-[1.0075] transition-transform ease-in-out duration-[1000ms] group-hover:scale-[1.065]"
                      />
                    )}
                  </div>

                  <div className="w-full">
                    <span className={`block leading-[1.2] lg:leading-[1.2] 2xl:leading-[1.2] mb-2 lg:mb-4 ${initiatives ? 'uppercase pt-5 pb-4 text-2xl lg:text-3xl 2xl:text-4xl' : 'font-medium text-xl lg:text-2xl 2xl:text-3xl'}`}>{e.title}</span>
                    
                    {e.excerpt && (
                      <div className="w-10/12 mb-6 lg:mb-8">
                        <p className="text-sm lg:text-lg 2xl:text-xl leading-[1.25] lg:leading-[1.25] 2xl:leading-[1.25]">{e.excerpt}</p>
                      </div>
                    )}

                    {initiatives ? (
                      <>
                      {e.article?.slug?.current && (
                        <></>
                      )}
                      </>
                    ) : (
                      <span className="text-base lg:text-lg 2xl:text-xl leading-none lg:leading-none 2xl:leading-none border-b border-off-black border-opacity-25 inline-block pb-1">Read More</span>
                    )}
                  </div>
                </ConditionalWrap>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* <div className="w-[50vw] lg:w-[25vw] h-[4px] lg:h-[5px] bg-[#B4C0C6] bg-opacity-20 mx-auto flex">
        <div className="w-[25%] h-full bg-off-black/30"></div>
      </div> */}
    </div>
  )
}