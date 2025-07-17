import Image from 'next/image'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import Link from 'next/link';
import slugify from 'slugify';

export default function SanityImageResponsive({ image, className, alt, priority, quality, sizes, wrap, customLink }) {
  console.log('Image alt text:', image);

  const [imageIsLoaded, setImageIsLoaded] = useState(!!priority); // Simplified to boolean
  const imageProps = useNextSanityImage(image || {});

  if (!image) {
    return null;
  }

  let wrapClass = ''
  let internalHref = ''

  if (wrap == 'wrapleft') {
    wrapClass = 'wrap left'
  }
  if (wrap == 'wrapright') {
    wrapClass = 'wrap right'
  }

  // Prefix
  let prefix = '/'
  if (customLink?.internalLink) {
    customLink.internalLink._type == 'categories' && (prefix = '/news/categories/')
    customLink.internalLink._type == 'news' && (prefix = '/news/')
    customLink.internalLink._type == 'policies' && (prefix = '/policies/')
    // HREF
    internalHref = `${prefix}${ customLink.internalLink.slug ? customLink.internalLink.slug.current : slugify(customLink.internalLink.title, { lower: true, remove: /[*+~.()'"!:@]/g})}`
  }

  let altText =  alt || image.alt || image.asset?.altText || 'Missing Image Description';

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
	return !customLink ? (
    <figure className={`image bg-black/10 ${className} relative overflow-hidden ${wrapClass}`}>
      <Image
        src={imageProps?.src || image}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        className={`${className} will-change-transform ${imageIsLoaded ? 'opacity-100 scale-1' : 'opacity-100 scale-[1.05]'} ${priority ? 'opacity-100' : 'transition-all ease-in-out duration-[2000ms]'}`}
        quality={quality ? quality : 75}
        width={image?.asset?.metadata.dimensions.width / 1.5 || 600}
        height={image?.asset?.metadata.dimensions.height / 1.5 || 400}
        {...(priority ? {priority: true} : {})}
        alt={altText}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
      {image.caption && (
        <figcaption className="bg-white py-2 italic text-black/50 text-sm lg:text-base">
          - {image.caption}
        </figcaption>
      )}
    </figure> 
  ) : (
    <>
    {customLink.internalLink ? (
      <Link href={internalHref} className={`${className} ${wrapClass} float`}>
        <figure className={`image bg-black/10 ${className} relative overflow-hidden`}>
          <Image
            src={imageProps?.src || image}
            sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
            className={`${className} will-change-transform ${imageIsLoaded ? 'opacity-100 scale-1' : 'opacity-100 scale-[1.05]'} ${priority ? 'opacity-100' : 'transition-all ease-in-out duration-[2000ms]'}`}
            quality={quality ? quality : 75}
            width={image?.asset?.metadata.dimensions.width / 1.5 || 600}
            height={image?.asset?.metadata.dimensions.height / 1.5 || 400}
            {...(priority ? {priority: true} : {})}
            alt={altText}
            onLoad={event => {
              const target = event.target;
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true)
              }
            }}
          />
          {image.caption && (
            <figcaption className="bg-white py-2 italic text-black/50 text-sm lg:text-base">
              - {image.caption}
            </figcaption>
          )}
        </figure> 
      </Link>
      ) : ( 
        <a href={customLink.externalLink} target="_blank" rel="noopener noreferrer" className={`${className} ${wrapClass} float`}>
        <figure className={`image bg-black/10 ${className} relative overflow-hidden`}>
          <Image
            src={imageProps?.src || image}
            sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
            className={`${className} will-change-transform ${imageIsLoaded ? 'opacity-100 scale-1' : 'opacity-100 scale-[1.05]'} ${priority ? 'opacity-100' : 'transition-all ease-in-out duration-[2000ms]'}`}
            quality={quality ? quality : 75}
            width={image?.asset?.metadata.dimensions.width / 1.5 || 600}
            height={image?.asset?.metadata.dimensions.height / 1.5 || 400}
            {...(priority ? {priority: true} : {})}
            alt={altText}
            onLoad={event => {
              const target = event.target;
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true)
              }
            }}
          />
          {image.caption && (
            <figcaption className="bg-white py-2 italic text-black/50 text-sm lg:text-base">
              - {image.caption}
            </figcaption>
          )}
        </figure> 
      </a>
      )}
    </>
  )
}