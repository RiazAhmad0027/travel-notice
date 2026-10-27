<?php
// This file is generated. Do not modify it manually.
return array(
	'faq-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/faq-item',
		'version' => '0.1.0',
		'title' => 'FAQ Item',
		'category' => 'widgets',
		'icon' => 'editor-help',
		'description' => 'One question and answer that opens and closes.',
		'attributes' => array(
			'question' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'summary'
			),
			'answer' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.travel-faq__answer'
			),
			'openByDefault' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'travel-notice',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'travel-notice' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/travel-notice',
		'version' => '0.1.0',
		'title' => 'Travel Notice',
		'category' => 'widgets',
		'icon' => 'info',
		'description' => 'A coloured notice box: info, warning or success.',
		'attributes' => array(
			'message' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p'
			),
			'noticeType' => array(
				'type' => 'string',
				'default' => 'info'
			)
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'travel-notice',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
