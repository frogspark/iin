import PortableText from "react-portable-text";
import slugify from "slugify";
import Link from "next/link";

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
	}
}

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