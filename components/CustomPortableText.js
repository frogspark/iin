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
	const { children } = props;

	return (
	  <p className="scroll-mt-20">
		{children.map((child, index) => {
		  if (typeof child === "object" && child?.props?.node?.mark) {
			const mark = child.props.node.mark;

			if (mark._type === "anchorLink" && mark.href) {
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

			if (mark._type === "anchorId" && mark.anchorId) {
			  return (
				<span key={index} id={mark.anchorId} className="anchor">
				  {child}
				</span>
			  );
			}
		  }

		  return child;
