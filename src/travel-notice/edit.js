import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { message, noticeType } = attributes;

	const blockProps = useBlockProps( {
		className: `travel-notice--${ noticeType }`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Notice settings', 'travel-notice' ) }>
					<SelectControl
						label={ __( 'Notice type', 'travel-notice' ) }
						value={ noticeType }
						options={ [
							{ label: __( 'Info', 'travel-notice' ), value: 'info' },
							{ label: __( 'Warning', 'travel-notice' ), value: 'warning' },
							{ label: __( 'Success', 'travel-notice' ), value: 'success' },
						] }
						onChange={ ( value ) => setAttributes( { noticeType: value } ) }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<RichText
					tagName="p"
					value={ message }
					onChange={ ( value ) => setAttributes( { message: value } ) }
					placeholder={ __( 'Write your notice…', 'travel-notice' ) }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
				/>
			</div>
		</>
	);
}