import PortableText from "react-portable-text";
import slugify from "slugify";
import Link from "next/link";

const scrollToAnchor = (id) => {
  if (!id) return;
  const element = document.getElementById(id);
  if (element) {
	element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const customSerializers = {
  block: (props) => {
	const { nodes, children } = props;

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

	return (
	  <p className="scroll-mt-20">
		{children.map((child, index) => {
		  if (
			typeof child === "object" &&
			child?.props?.node?.mark &&
			child.props.node.mark._type
		  ) {
			const mark = child.props.node.mark;

			if (mark._type === "anchorLink") {
			  return (
				<a
				  key={index}
				  href={"#" + mark.href}
				  onClick={(e) => {
					e.preventDefault();
					scrollToAnchor(mark.href);
				  }}
				  className="underline linkUnset"
				>
				  {child}
				</a>
			  );
			}

			if (mark._type === "anchorId") {
			  return (
				<span key={index} id={mark.anchorId} className="anchor">
				  {child}
				</span>
			  );
			}
		  }

		  return child;
		})}
	  </p>
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

const CustomPortableText = ({ content, className, serializers }) => {
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
