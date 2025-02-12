import PortableText from "react-portable-text";

const customSerializers = {
	link: (props) => {
		const { blank, href, children } = props
		return blank ?
				<a href={href} target="_blank" rel="noopener">{children}</a>
				: <a href={href}>{children}</a>
	},
}

const CustomPortableText = ( {content, className, serializers} ) => {
	const mergedSerializers = { ...customSerializers, ...serializers};

	return (
			<PortableText
					className={className}
					content={content}
					serializers={ mergedSerializers }
			/>
	)
}

export default CustomPortableText