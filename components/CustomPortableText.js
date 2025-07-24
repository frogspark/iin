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

// const customSerializers = {
//   block: (props) => {
//     console.log('block');
//     const { children, node } = props;
//     // console.log(node);
//     const style = node?.style || "normal";
//
//     let anchorId = "";
//     let anchorLink = "";
//     let plainText = "";
//
//     if (Array.isArray(children)) {
//       children.forEach((child) => {
//         if (typeof child === "string") {
//           plainText += child + " ";
//         } else if (child?.props?.node?.mark?._type === "anchorId") {
//           anchorId = child.props.node.mark.anchorId;
//         } else if (child?.props?.node?.mark?._type === "anchorLink") {
//           anchorLink = child.props.node.mark.href;
//         }
//       });
//     }
//     const tagMap = {
//       h1: "h1",
//       h2: "h2",
//       h3: "h3",
//       h4: "h4",
//       h5: "h5",
//       h6: "h6",
//       normal: "p",
//       blockquote: "blockquote",
//     };
//
//     const Tag = tagMap[style] || "p";
//
//     return (
//         <Tag className="scroll-mt-20" id={anchorId || undefined}>
//           {children.map((child, index) => {
//             if (
//                 typeof child === "object" &&
//                 child?.props?.node?.mark &&
//                 child.props.node.mark._type
//             ) {
//               const mark = child.props.node.mark;
//
//               if (mark._type === "anchorLink") {
//                 return (
//                     <a
//                         key={index}
//                         href={"#" + mark.href}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           scrollToAnchor(mark.href);
//                         }}
//                         className="underline anchor-link"
//                     >
//                       {child}
//                     </a>
//                 );
//               }
//
//               if (mark._type === "anchorId") {
//                 return (
//                     <span key={index} className="anchor">
//                   {child}
//                 </span>
//                 );
//               }
//             }
//
//             return child;
//           })}
//         </Tag>
//     );
//   },
//
//   marks: {
//     anchorLink: ({ mark, children }) => {
//       console.log('anchor link');
//       return (
//         <a
//           href={"#" + mark.href}
//           onClick={(e) => {
//             e.preventDefault();
//             scrollToAnchor(mark.href);
//           }}
//           className="new-anchor-link"
//         >
//           {children}
//         </a>
//       );
//     },
//
//     anchorId: ({ mark, children }) => {
//       return (
//         <span id={mark.anchorId} className="anchor">
//           {children}
//         </span>
//       );
//     },
//
//     link: ({ mark, children }) => {
//       console.log('mark link');
//
//       return mark.blank ? (
//         <a href={mark.href} target="_blank" rel="noopener noreferrer">
//           {children}
//         </a>
//       ) : (
//         <a href={mark.href}>{children}</a>
//       );
//     },
//
//     mailToLink: (props) => {
//       console.log('mailto')
//       const { email, children } = props;
//       const link = `mailto:${email}`;
//       return <a href={link}>{children}</a>;
//     },
//   },
//
//   types: {
//     Embed: (props) => {
//       console.log('EMBED')
//       console.log(props);
//
//       return '';
//     },
//
//     link: (props) => {
//       console.log('normal link');
//       const { blank, href, children } = props;
//       return blank ? (
//           <a href={href} target="_blank" rel="noopener">
//             {children}
//           </a>
//       ) : (
//           <a href={href}>{children}</a>
//       );
//     },
//
//     Quote: (props) => <Blockquote quote={props.quote} author={props.author} />,
//     Image: (props) => {
//       return (
//           <SanityImageResponsive
//               image={props.image}
//               wrap={props.wrapText}
//               customLink={props.customLink}
//           />
//       )
//     },
//     internalLink: (props) => {
//       console.log('internal link');
//       const {slug = {}} = props
//
//       // Prefix
//       let prefix = '/'
//       props.type == 'categories' && (prefix = '/news/categories/')
//       props.type == 'news' && (prefix = '/news/')
//       props.type == 'policies' && (prefix = '/policies/')
//
//       // HREF
//       const href = `${prefix}${ slug ? slug.current : slugify(JSON.stringify(props.title), { lower: true, remove: /[*+~.()'"!:@]/g})}`
//
//       return <Link href={href}>{props.children}</Link>
//     }
//   }
// };

const customSerializers = {
  anchorLink: (props) => {
    console.log('anchor link');
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
    console.log('aid mark');
    console.log(props);
    return (
        <span id={props.anchorId} className="anchor">
        {props.children}
      </span>
    );
  },

  mailToLink: (props) => {
    console.log('mailto')
    const { email, children } = props;
    const link = `mailto:${email}`;
    return <a href={link}>{children}</a>;
  },

  Embed: (props) => <div className="w-full" dangerouslySetInnerHTML={{__html: props.code}} />,

  Image: (props) => {
    return (
        <SanityImageResponsive
            image={props.image}
            wrap={props.wrapText}
            customLink={props.customLink}
        />
    )
  },

  internalLink: (props) => {
    console.log('internal link');
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
    console.log('normal link');
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
};

const CustomPortableText = ({ content, className, serializers }) => {
  // If content is a simple string, render it directly.
  if (typeof content === "string") {
    return <div className={className}>{content}</div>;
  }
  
  // Otherwise, process it as a Portable Text object.
  const mergedSerializers = { ...customSerializers, ...serializers };

  console.log('merged');
  console.log(mergedSerializers);

  console.log('content');
  console.log(content);

  return (
    <PortableText
      className={className}
      content={content}
      serializers={mergedSerializers}
    />
  );
};

export default CustomPortableText;