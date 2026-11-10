# Travel Notice – Custom Gutenberg Blocks for WordPress

A custom WordPress plugin featuring two editable Gutenberg blocks: Travel Notice and FAQ Item.

Built using React, JavaScript, PHP, and the WordPress Block API.

## Features

### Travel Notice Block
- Custom travel notice content.
- Editable Gutenberg interface.
- Block Inspector settings.
- Configurable notice types.

### FAQ Item Block
- Editable questions and answers.
- Gutenberg rich-text editing.
- Open-by-default setting.
- Frontend interactive functionality.

## Technologies

- WordPress
- Gutenberg Block Editor
- React
- JavaScript
- PHP
- WordPress Block API
- @wordpress/scripts
- SCSS

## Live Demo

Explore the custom Gutenberg blocks in action:

- **React Blocks Demo:** https://premiumcircle.shop/blocks/react-blocks-demo/

The demo showcases custom Gutenberg blocks and their editing experience.

## Screenshots

<img width="1366" height="768" alt="React Block Demo Live" src="https://github.com/user-attachments/assets/09d11662-1f60-409c-9c52-13f8cc2fce48" />

<img width="1366" height="768" alt="Ispecter settings" src="https://github.com/user-attachments/assets/48a60307-a080-4f48-bb37-2286f33c1dd5" />





## Project Structure

```text
travel-notice/
├── build/
│   ├── faq-item/
│   │   ├── block.json
│   │   ├── index-rtl.css
│   │   ├── index.asset.php
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── style-index-rtl.css
│   │   ├── style-index.css
│   │   ├── view.asset.php
│   │   └── view.js
│   ├── travel-notice/
│   │   ├── block.json
│   │   ├── index-rtl.css
│   │   ├── index.asset.php
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── style-index-rtl.css
│   │   ├── style-index.css
│   │   ├── view.asset.php
│   │   └── view.js
│   └── blocks-manifest.php
├── src/
│   ├── faq-item/
│   │   ├── block.json
│   │   ├── edit.js
│   │   ├── editor.scss
│   │   ├── index.js
│   │   ├── save.js
│   │   ├── style.scss
│   │   └── view.js
│   └── travel-notice/
│       ├── block.json
│       ├── edit.js
│       ├── editor.scss
│       ├── index.js
│       ├── save.js
│       ├── style.scss
│       └── view.js
├── .editorconfig
├── .gitignore
├── package.json
├── package-lock.json
├── readme.txt
├── README.md
└── travel-notice.php
```

## Installation

1. Download or clone this repository.
2. Install dependencies using `npm install`.
3. Build production assets using `npm run build`.
4. Copy the plugin into `wp-content/plugins/`.
5. Activate Travel Notice from the WordPress dashboard.
6. Open Gutenberg and search for Travel Notice or FAQ Item.

## Development

Install dependencies:

```bash
npm install
```

Start development mode:

```bash
npm start
```

Build production assets:

```bash
npm run build
```

## Author

**Riaz Ahmad**

WordPress and WooCommerce Developer

GitHub: https://github.com/RiazAhmad0027

Portfolio Demo: https://premiumcircle.shop/blocks/react-blocks-demo//
## License

GPL-2.0-or-later
