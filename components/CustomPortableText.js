import PortableText from "react-portable-text";
import slugify from "slugify";
import Link from "next/link";

const customSerializers = {
  block: (props) => {
    const { node, children } = props;
    const anchorId = node.anchorId || slugify(children?.[0] || "", { lower: true, strict: true });

    return (
      <p id={anchorId} className="scroll-mt-20">
        {children}
      </p>
    );
  },
  link: (props) => {
    const { blank, href, children } = props;
    return blank ? (
      <a href={href} target="_blank" rel="noopener">
        {children}
      </a>
    ) : (
      <a href={href}>{children}</a>
    );
  },
  mailToLink: (props) => {
    const { email, children } = props;
    const link = `mailto:${email}`;
    return <a href={link}>{children}</a>;
  },
};

const CustomPortableText = ({ content, className, serializers }) => {
  const mergedSerializers = { ...customSerializers, ...serializers };

  return (
    <PortableText className={className} content={content} serializers={mergedSerializers} />
  );
};

export default CustomPortableText;
