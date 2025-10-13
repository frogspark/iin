import PortableText from "react-portable-text";
import Blockquote from "@/components/blockquote";
import SanityImageResponsive from "@/components/sanity-image-responsive";
import slugify from "slugify";
import Link from "next/link";

const scrollToAnchor = (id) => {
  if (!id) {
    return;
  }

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    const header = document.getElementById("site-header");
    var offset = header.offsetHeight + 24;

    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }
};

const customSerializers = {
  anchorLink: (props) => {
    return (
        <a
            href={"#" + props.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToAnchor(props.href);
            }}
            className="new-anchor-link"
        >
          {props.children}
        </a>
    );
  },

  anchorId: (props) => {
    return (
        <span id={props.anchorId} className="anchor">
        {props.children}
      </span>
    );
  },

  mailToLink: (props) => {
    const { email, children } = props;
    const link = `mailto:${email}`;
    return <a href={link}>{children}</a>;
  },

  Embed: (props) => <div className="w-full" dangerouslySetInnerHTML={{__html: props.code}} />,

  internalLink: (props) => {
    const {slug = {}} = props

    // Prefix
    let prefix = '/'
    props.type == 'categories' && (prefix = '/news/categories/')
    props.type == 'news' && (prefix = '/news/')
    props.type == 'policies' && (prefix = '/policies/')

    // HREF
    const href = `${prefix}${ slug ? slug.current : slugify(JSON.stringify(props.title), { lower: true, remove: /[*+~.()'"!:@]/g})}`

    return <Link href={href}>{props.children}</Link>
  },

  link: (props) => {
    const { blank, href, children } = props;
    return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
    ) : (
        <a href={href}>{children}</a>
    );
  },

  Quote: (props) => <Blockquote quote={props.quote} author={props.author} />,

  Image: (props) => {
    const { image, wrapText, customLink } = props;

    // Determine layout classes
    let wrapClass = '';
    if (wrapText === 'wrapleft') {
      wrapClass = 'float-left mr-6 mb-4 max-w-[50%]';
    } else if (wrapText === 'wrapright') {
      wrapClass = 'float-right ml-6 mb-4 max-w-[50%]';
    } else {
      wrapClass = 'w-full my-8';
    }

    const imageElement = (
      <div className={wrapClass}>
        <SanityImageResponsive image={image} />
      </div>
    );

    // Handle linking if configured
    if (customLink?.linkToggle) {
      if (customLink.internal && customLink.internalLink?.slug?.current) {
        return (
          <Link href={`/${customLink.internalLink.slug.current}`}>
            {imageElement}
          </Link>
        );
      } else if (!customLink.internal && customLink.externalLink) {
        return (
          <a href={customLink.externalLink} target="_blank" rel="noopener noreferrer">
            {imageElement}
          </a>
        );
      }
    }

    return imageElement;
  },
};

const CustomPortableText = ({ content, className, serializers }) => {
  // If content is a simple string, render it directly.
  if (typeof content === "string") {
    return <div className={className}>{content}</div>;
  }

  // Otherwise, process it as a Portable Text object.
  const mergedSerializers = { ...customSerializers, ...serializers };

  return (
    <PortableText
      className={className}
      content={content}
      serializers={mergedSerializers}
    />
  );
};

export default CustomPortableText;