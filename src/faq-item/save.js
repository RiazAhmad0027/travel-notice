import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { question, answer, openByDefault } = attributes;

	return (
		<details { ...useBlockProps.save() } open={ openByDefault }>
			<RichText.Content tagName="summary" className="travel-faq__question" value={ question } />
			<RichText.Content tagName="div" className="travel-faq__answer" value={ answer } />
		</details>
	);
}