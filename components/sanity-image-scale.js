import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SanityImage from '@/components/sanity-image';

export default function SanityImageScale({ image, p, sizes, alt, q, hoverState}) {
  const ref = useRef(null)

  console.log('IMAGE ALT');
  console.log(alt);
  let altText = 'Missing Image Description';

  // check to see if we have been passed an alt value
  if(alt !== null && alt !== undefined) {
    altText = alt;
  }
  // if not, use the image level alt first
  else if(image.alt !== null) {
    altText = image.alt;
  }
  // otherwise use the media library level alt
  else if (image.asset !== null && Object.hasOwn(image.asset, 'altText')) {
    altText = image.asset.altText
  }

  console.log(altText);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 33%"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.22, 1],{ clamp: true })
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      <m.div style={{ scale: scale }} className="will-change-transform overflow-hidden w-full h-full absolute inset-0 object-cover object-center">
        <div ref={ref} className="absolute inset-0 w-full h-full">
          <SanityImage
            priority={p ? true : false}
            image={image}
            sizes={sizes ? sizes : null}
            alt={ altText }
            quality={q ? q : 80}
            className={`w-full h-full absolute inset-0 object-cover object-center transition-all ease-in-out duration-[1000ms] will-change-transform z-1 ${hoverState ? hoverState : ''}`}
          />
        </div>
      </m.div>
    </div>
  )
}