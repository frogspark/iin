import PortableText from "react-portable-text";

const sertializers = {
	link: (props) => {
		const { blank, href, children } = props
		console.log(props);
		return blank ?
				<a href={href} target="_blank" rel="noopener">{children}</a>
				: <a href={href}>{children}</a>
	},
}

const CustomPortableText = ( {content} ) => {
	return (
			<div class="portable-text-wrapper">
				<PortableText
						content={content}
						serializers={ sertializers }
				/>
			</div>
	)
}

console.log('prt text');
console.log(CustomPortableText);

export default CustomPortableText;