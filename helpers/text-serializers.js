import Blockquote from "@/components/blockquote";
import SanityImageResponsive from "@/components/sanity-image-responsive";
import slugify from "slugify";
import Link from "next/link";

const portableTextSerializers = {
	Quote: (props) => <Blockquote quote={props.quote} author={props.author} />,
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
		console.log('PROPS');
		console.log(props);

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
		const { blank, href, children } = props
		return blank ?
				<a href={href} target="_blank" rel="noopener">{children}</a>
				: <a href={href}>{children}</a>
	},
}

export default portableTextSerializers;