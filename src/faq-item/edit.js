import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { question, answer, openByDefault } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'FAQ settings', 'travel-notice' ) }>
					<ToggleControl
						label={ __( 'Open by default', 'travel-notice' ) }
						checked={ openByDefault }
						onChange={ ( value ) => setAttributes( { openByDefault: value } ) }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<RichText
					tagName="p"
					className="travel-faq__question"
					value={ question }
					onChange={ ( value ) => setAttributes( { question: value } ) }
					placeholder={ __( 'Write the question…', 'travel-notice' ) }
					allowedFormats={ [] }
				/>
				<RichText
					tagName="div"
					className="travel-faq__answer"
					value={ answer }
					onChange={ ( value ) => setAttributes( { answer: value } ) }
					placeholder={ __( 'Write the answer…', 'travel-notice' ) }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				/>
			</div>
		</>
	);
}