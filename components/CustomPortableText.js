import PortableText from "react-portable-text";

const scrollToAnchor = (id) => {
  if (!id) {
		return
	}

  const element = document.getElementById(id);

  if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });

		const header = document.getElementById('site-header');
		var offset = header.offsetHeight + 24;

		const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({
			top: top,
			behavior: 'smooth'
		});
  }
};

const customSerializers = {
	link: (props) => {
		const { blank, href, children } = props
		return blank ?
				<a href={href} target="_blank" rel="noopener">{children}</a>
				: <a href={href}>{children}</a>
	},
	mailToLink: (props) => {
		const {email, children} = props;
		const link = `mailto:${email}`;
		return <a href={ link }>{children}</a>
	},
  block: (props) => {
    const { children, node } = props;
    const style = node?.style || "normal";

    let anchorId = "";
    let anchorLink = "";
    let plainText = "";

    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === "string") {
          plainText += child + " ";
        } else if (child?.props?.node?.mark?._type === "anchorId") {
          anchorId = child.props.node.mark.anchorId;
        } else if (child?.props?.node?.mark?._type === "anchorLink") {
          anchorLink = child.props.node.mark.href;
        }
      });
    }
    const tagMap = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      normal: "p",
      blockquote: "blockquote",
    };

    const Tag = tagMap[style] || "p";

    return (
      <Tag className="scroll-mt-20" id={anchorId || undefined}>
        {children.map((child, index) => {
          if (
            typeof child === "object" &&
            child?.props?.node?.mark &&
            child.props.node.mark._type
          ) {
            const mark = child.props.node.mark;
            const cleanHref = mark?.href?.startsWith('#') ? mark?.href?.slice(1) : mark?.href;

            if (mark._type === "anchorLink") {
              return (
                <a
                  key={index}
                  href={`#${cleanHref}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToAnchor(mark.href);
                  }}
                  className="underline anchor-link"
                >
                  {child}
                </a>
              );
            }

            if (mark._type === "anchorId") {
              return (
                <span key={index} className="anchor">
                  {child}
                </span>
              );
            }
          }

          return child;
        })}
      </Tag>
    );
  },

  marks: {
    anchorLink: ({ mark, children }) => {
      return (
        <a
          href={"#" + mark.href}
          onClick={(e) => {
            e.preventDefault();
            scrollToAnchor(mark.href);
          }}
        >
          {children}
        </a>
      );
    },

    anchorId: ({ mark, children }) => {
      return (
        <span id={mark.anchorId} className="anchor">
          {children}
        </span>
      );
    },

    link: ({ mark, children }) => {
      return mark.blank ? (
        <a href={mark.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={mark.href}>{children}</a>
      );
    },
  },
};

const CustomPortableText = ( {content, className, serializers} ) => {
	const mergedSerializers = { ...customSerializers, ...serializers};
	console.log(mergedSerializers);

	return (
			<PortableText
					className={className}
					content={content}
					serializers={ mergedSerializers }
			/>
	)
}

export default CustomPortableText