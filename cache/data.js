export const posts = [{"id":"deployment\\ci-cd","title":"ci-cd","content":"\r\nci-cd\r\n"},{"id":"deployment\\production-build","title":"production-build","content":"\r\nproduction-build\r\n"},{"id":"development\\assets\\fonts","title":"fonts","content":"\r\nfonts\r\n"},{"id":"development\\assets\\images","title":"images","content":"\r\nimages\r\n"},{"id":"development\\assets\\svg","title":"SVG","content":"\r\nSVG's can be imported as a component:\r\n\r\n```jsx\r\nimport { ReactComponent as Logo } from './logo.svg';\r\n\r\nfunction App() {\r\n  return (\r\n    <div>\r\n      <Logo />\r\n    </div>\r\n  );\r\n}\r\n```\r\n"},{"id":"development\\cms\\asset-manifest","title":"Asset Manifest","content":"\r\nThe asset manifest is a JSON file with a map, following this structure:\r\n```json\r\n{\r\n    \"[browserslist environment name]\": {\r\n        \"files\": {\r\n            \"input file name\": \"/absolute output dir/output file name with hash and module type\",\r\n            \"...\": \"...\"\r\n        },\r\n        \"entrypoints: {\r\n            \"entry point file name\": [\r\n                \"relative to entry point output dir/output file name with hash and module type\",\r\n                \"...\": \"...\"\r\n            ]\r\n        }\r\n    },\r\n    \"...\": \"...\"\r\n}\r\n```\r\n\r\n## Example\r\n\r\n<details>\r\n  <summary>Example asset-manifest.json</summary>\r\n\r\n```json\r\n{\r\n  \"modern\": {\r\n    \"files\": {\r\n      \"lazy-component.js\": \"/static/js/lazy-component.modern.0d69cf1c.chunk.js\",\r\n      \"lazy-component.js.map\": \"/static/js/lazy-component.modern.0d69cf1c.chunk.js.map\",\r\n      \"main.js\": \"/static/js/main.modern.c7f0341c.chunk.js\",\r\n      \"main.js.map\": \"/static/js/main.modern.c7f0341c.chunk.js.map\",\r\n      \"runtime-main.js\": \"/static/js/runtime-main.modern.df27d7ca.js\",\r\n      \"runtime-main.js.map\": \"/static/js/runtime-main.modern.df27d7ca.js.map\",\r\n      \"runtime-styles.js\": \"/static/js/runtime-styles.modern.b857147d.js\",\r\n      \"runtime-styles.js.map\": \"/static/js/runtime-styles.modern.b857147d.js.map\",\r\n      \"styles.css\": \"/static/css/styles.modern.80258434.chunk.css\",\r\n      \"vendors~main.js\": \"/static/js/vendors~main.modern.e9adc618.chunk.js\",\r\n      \"vendors~main.js.map\": \"/static/js/vendors~main.modern.e9adc618.chunk.js.map\",\r\n      \"index.html\": \"/index.html\",\r\n      \"static/css/styles.modern.80258434.chunk.css.map\": \"/static/css/styles.modern.80258434.chunk.css.map\"\r\n    },\r\n    \"entrypoints\": {\r\n      \"main\": [\r\n        \"static/js/runtime-main.modern.df27d7ca.js\",\r\n        \"static/js/vendors~main.modern.e9adc618.chunk.js\",\r\n        \"static/js/main.modern.c7f0341c.chunk.js\"\r\n      ],\r\n      \"styles\": [\r\n        \"static/js/runtime-styles.modern.b857147d.js\",\r\n        \"static/css/styles.modern.80258434.chunk.css\"\r\n      ]\r\n    }\r\n  },\r\n  \"legacy\": {\r\n    \"files\": {\r\n      \"lazy-component.js\": \"/static/js/lazy-component.legacy.fe370a94.chunk.js\",\r\n      \"lazy-component.js.map\": \"/static/js/lazy-component.legacy.fe370a94.chunk.js.map\",\r\n      \"main.js\": \"/static/js/main.legacy.9c349b5b.chunk.js\",\r\n      \"main.js.map\": \"/static/js/main.legacy.9c349b5b.chunk.js.map\",\r\n      \"runtime-main.js\": \"/static/js/runtime-main.legacy.7c8021a7.js\",\r\n      \"runtime-main.js.map\": \"/static/js/runtime-main.legacy.7c8021a7.js.map\",\r\n      \"runtime-styles.js\": \"/static/js/runtime-styles.legacy.b857147d.js\",\r\n      \"runtime-styles.js.map\": \"/static/js/runtime-styles.legacy.b857147d.js.map\",\r\n      \"styles.css\": \"/static/css/styles.legacy.80258434.chunk.css\",\r\n      \"vendors~main.js\": \"/static/js/vendors~main.legacy.5eaa684c.chunk.js\",\r\n      \"vendors~main.js.map\": \"/static/js/vendors~main.legacy.5eaa684c.chunk.js.map\",\r\n      \"index.html\": \"/index.html\",\r\n      \"static/css/styles.legacy.80258434.chunk.css.map\": \"/static/css/styles.legacy.80258434.chunk.css.map\"\r\n    },\r\n    \"entrypoints\": {\r\n      \"main\": [\r\n        \"static/js/runtime-main.legacy.7c8021a7.js\",\r\n        \"static/js/vendors~main.legacy.5eaa684c.chunk.js\",\r\n        \"static/js/main.legacy.9c349b5b.chunk.js\"\r\n      ],\r\n      \"styles\": [\r\n        \"static/js/runtime-styles.legacy.b857147d.js\",\r\n        \"static/css/styles.legacy.80258434.chunk.css\"\r\n      ]\r\n    }\r\n  }\r\n}\r\n```\r\n</details>\r\n<br />\r\n\r\nInternally, webpack uses this manifest along with a small\r\nruntime, to load your projects javascript modules in the\r\nruntime.\r\n\r\nDuring a production build Frontline's webpack configuration can\r\n\"compile\" an `index.html` file for you, and take care of inserting\r\nthe hashed file names.\r\n\r\nSometimes we cant control the markup because it is generated on\r\na server, when a page is requested (Server Side Rendering).\r\n\r\nThis is where the `asset-manifest.json` file can be used.\r\n\r\nThe code in [`module-no-module-asset-manifest.server-side.js`](https://github.com/akqa-frontline/frontline-starter-spa/blob/examples/asset-manifest/src/module-no-module-asset-manifest.server-side.js)\r\nis written in JavaScript, but can be easily implemented in a\r\nlanguage such as C#. It consists of three methods which, you can\r\nfind walkthroughs of how they work in the source code.\r\n\r\n"},{"id":"development\\cms\\epi-server","title":"epi-server","content":"\r\nepi-server\r\n"},{"id":"development\\cms\\html-injection","title":"html-injection","content":"\r\nhtml-injection\r\n"},{"id":"development\\cms\\proxy","title":"proxy","content":"\r\nproxy\r\n"},{"id":"development\\cms\\sitecore","title":"sitecore","content":"\r\nsitecore\r\n"},{"id":"development\\cms\\umbraco","title":"umbraco","content":"\r\numbraco\r\n"},{"id":"development\\css\\css-modules","title":"css-modules","content":"\r\ncss-modules\r\n"},{"id":"development\\css\\global-styles","title":"global-styles","content":"\r\nglobal-styles\r\n"},{"id":"development\\css\\scss-icon-fonts","title":"scss-icon-fonts","content":"\r\nscss-icon-fonts\r\n"},{"id":"development\\css\\scss-json-import","title":"scss-json-import","content":"\r\nscss-json-import\r\n"},{"id":"development\\css\\scss","title":"scss","content":"\r\nscss\r\n"},{"id":"development\\dev-server","title":"Dev Server","content":"\r\n## Change port\r\nYou can change the port if the default port `8080` is being used by another service.\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\n// highlight-start\r\nconst sharedWebpackConfig = {\r\n  devServer: {\r\n    port: 3000\r\n  }\r\n};\r\n// highlight-end\r\n\r\nconst legacyWebpackConfig = FrontlineWebpackConfig(\"legacy\", {\r\n  entry,\r\n  plugins: [],\r\n  ...sharedWebpackConfig // highlight-line\r\n});\r\n\r\nconst modernWebpackConfig = FrontlineWebpackConfig(\"modern\", {\r\n  entry,\r\n  plugins: [],\r\n  ...sharedWebpackConfig // highlight-line\r\n});\r\n```\r\n\r\n"},{"id":"development\\environment-variables","title":"Environment Variables","content":"\r\n## Examples\r\n\r\nThe env variables in your `.env` file can be used directly in your HTML.\r\nThis is great for things such as Google Analytics!\r\n\r\n- `FRONTLINE_GOOGLE_ANALYTICS_ID`\r\n- `FRONTLINE_API_KEY`\r\n- `FRONTLINE_FEATURE_TOGGLE`\r\n\r\n## Usage\r\n\r\nTo define and use your own env variables, follow these steps:\r\n1. Create a `.env` file in the root of your project\r\n2. Write your env variables, they ***must*** be prefixed with `FRONTLINE` - example:\r\n```javascript\r\nFRONTLINE_API_KEY=apisftw\r\n```\r\n3. Access it:\r\n```javascript\r\nprocess.env.FRONTLINE_API_KEY\r\n```\r\n\r\n## Built-in variables\r\n\r\nThere are also two built-in env variables:\r\n- `NODE_ENV`\r\n- `PUBLIC_URL`\r\n\r\nUse `NODE_ENV` to help determine if you are running production code or not.\r\nUse `PUBLIC_URL` as a prefix for assets hosted in the public folder, always.\r\n\r\n## Asset HTML example\r\n```html\r\n<img src=\"%PUBLIC_URL%/images/dog.webp\" />\r\n```\r\n\r\n## Live example\r\nThis Frontline example prints the internal env variables.\r\n\r\nimport { Embed } from '@/components/playground/Embed'\r\n\r\n<Embed id=\"env-qwj77\" height=\"150px\" />\r\n"},{"id":"development\\hot-module-reloading","title":"Hot Module Reloading","content":""},{"id":"development\\index","title":"Development","content":"\r\nThis will introduce you to the development docs\r\n"},{"id":"development\\integrations\\gatsby","title":"gatsby","content":"\r\ngatsby\r\n"},{"id":"development\\integrations\\next-js","title":"next-js","content":"\r\nnext-js\r\n"},{"id":"development\\integrations\\storybook","title":"Storybook","content":"\r\n[Storybook](https://storybook.js.org) helps you build UI components in isolation.\r\nA button usually have different states such as regular, disabled or loading.\r\nThose states can be hard to find in the real app.\r\nWith Storybook you can build stories for each component and its states.\r\nThen Storybook becomes a collection of all your generic components which is easy to show to new developers.\r\n"},{"id":"development\\javascript\\javascript","title":"javascript","content":"\r\njavascript\r\n"},{"id":"development\\javascript\\react","title":"react","content":"\r\nreact\r\n"},{"id":"development\\javascript\\typescript","title":"typescript","content":"\r\ntypescript\r\n"},{"id":"development\\lazy-loading","title":"Lazy Loading","content":"\r\nUse `React.lazy` to dynamically import a component.\r\nDynamic imports are a way of code-splitting so you don't request components until they are needed.\r\n\r\n## Lazy loaded default import\r\n```jsx\r\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\r\n```\r\n\r\n## Lazy loaded named import\r\nThere seems to be this workaround:\r\n```jsx\r\nconst OtherComponent = React.lazy(\r\n  () => import('./OtherComponent').then(module => ({ default: module.OtherComponent }))\r\n);\r\n```\r\n\r\nBut the React-safe way forces you to re-export a named export as the default export.\r\n```jsx\r\nexport { OtherComponent as default } from \"./OtherComponent\";\r\nconst OtherComponent = React.lazy(\r\n  () => import('./OtherComponent').then(module => ({ default: module.OtherComponent }))\r\n);\r\n```\r\n\r\n## Suspense\r\nThe lazy loaded component should be rendered inside a `Suspense` component.\r\nThe `Suspense` component allows you to display a loader until the component is ready.\r\n\r\n```jsx\r\n<Suspense fallback={<div>Loading...</div>}>\r\n  <OtherComponent />\r\n</Suspense>\r\n```\r\n## Error Boundaries\r\nIf a component encounters an error or fails to load it will throw an error.\r\nAn `Error Boundary` is able catch errors inside that boundary while the rest of the site is fully functional.\r\n\r\nThe easiest way to get stated is by using the package `react-error-boundary`.\r\n\r\n```\r\nnpm install --save react-error-boundary\r\n```\r\n\r\nInstall it and follow [their guide](https://www.npmjs.com/package/react-error-boundary#usage) on how to use it.\r\n\r\n<br />\r\n\r\n## Examples\r\n\r\nimport { Embed } from '@/components/playground/Embed'\r\n\r\n<Embed id=\"lazy-loading-rro6q\" height=\"500px\" />\r\n"},{"id":"development\\linting-formatting","title":"Linting and formatting","content":"\nThe following tools will help you maintain good code quality with formatting and linting.\n\n\n## ESlint\nhttps://eslint.org/\n`.eslintrc.js`\n\nSee package\n\n## stylelint\nhttps://stylelint.io/\n`.stylelintrc.js`\n\nSee package\n\n## Prettier\nhttps://prettier.io/\n`.prettier.config.js`\n\n## EditorConfig\nThe [`.editorconfig`](https://editorconfig.org/) file at the root of the project helps maintain consistent coding style across machines and editors.\n\nSome editors require you to download a plugin. Check if your editor is one of them https://editorconfig.org/#download\n\n## husky and lint-staged\nUse [husky](https://typicode.github.io/husky) to improve commits and keep them consistent with the rules of the project.\nIt allows you to fire custom scripts when specific actions occur in the git process.\n\nBelow is an example where ESlint, stylelint and Prettier checks for issues and autofixes if possible.\n[lint-staged](https://github.com/okonet/lint-staged) ensures that linters are only run against staged files.\n\n```\n  \"husky\": {\n    \"hooks\": {\n      \"pre-commit\": \"lint-staged\"\n    }\n  },\n  \"lint-staged\": {\n    \"*.{js,jsx}\": \"eslint --cache --fix --max-warnings 0\",\n    \"*.{css,scss}\": \"stylelint --fix --max-warnings 0\",\n    \"*.{js,jsx,css,scss,md,mdx,json}\": \"prettier --write\"\n  }\n```\n*Current setup in [frontline-starter-spa](/docs/getting-started/flavours/spa)*\n\n"},{"id":"development\\module-no-module-builds","title":"Module No Module Builds","content":"\r\nIf a browser supports module scripts, the `modern-app.js` file will be loaded.\r\nFor older browsers the unknown script `type=\"module\"` will be ignored and the `legacy-app.js` file will be loaded.\r\nThe `nomudule` attribute lets modern browsers skip that line so both files are not loaded.\r\n\r\n```html\r\n<script type=\"module\" src=\"modern-app.js\"></script>\r\n<script nomodule src=\"legacy-app.js\"></script>\r\n```\r\n"},{"id":"development\\public-folder","title":"Public Folder","content":"\nFiles in the public folder are copied to the build folder untouched.\n\n## Reference assets\nImport assets in Javascript.\n```\nimport logo from './logo.png';\n```\n\nUse the [environment variable](/docs/development/environment-variables) `PUBLIC_URL` to reference assets in HTML.\n```html\n<link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n```\n\n\n## Copy files on build\nYou can copy files to the public and make them accessible from the root of the page with the package `copy-webpack-plugin`\n\n```js\nconst CopyPlugin = require('copy-webpack-plugin');\n\n// webpack.config.js\nsharedPlugins: [\n  ...\n  new CopyPlugin([{ from: \"./src/environment/environment.runtime.json\", to: \"environment.runtime.json\" }]),\n  new CopyPlugin([{ from: \"./src/translations/da-DK.json\", to: \"api/v1/translations/da-DK\", toType: \"file\" }]),\n]\n```\n"},{"id":"development\\webpack-config","title":"webpack config","content":"\r\n"},{"id":"getting-started\\configuration\\asset-config-webpack-plugin","title":"asset-config-webpack-plugin","content":"\nStatic assets configuration for webpack.\n\n## What does it do\nThis package does not do much currently.\n\nWhen creating a production build, it will copy all files except HTML files from the public folder to the build output folder.\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/asset-config-webpack-plugin\nnpm install --save-dev --save-exact webpack\n```\n\n## Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineAssetConfigWebpackPlugin} = require(\"@akqa-frontline/asset-config-webpack-plugin\")\n\nmodule.exports = {\n    plugins: [\n        new FrontlineAssetConfigWebpackPlugin()\n    ]\n}\n```\n\nTake a look at [webpack-config](/docs/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n"},{"id":"getting-started\\configuration\\babel","title":"babel","content":"\r\nbabel\r\n"},{"id":"getting-started\\configuration\\eslint-config-frontline","title":"eslint-config-frontline","content":"\r\nESlint configuration for AKQA Denmark's frontend teams\r\n\r\n## Install\r\n\r\n```\r\nnpm install --save-dev @akqa-frontline/eslint-config-frontline @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x\r\n```\r\n"},{"id":"getting-started\\configuration\\font-config-webpack-plugin","title":"font-config-webpack-plugin","content":"\nFont configuration for webpack.\n\n## What does it do\nThis package lets you use font assets in your JS and (S)CSS files.\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/font-config-webpack-plugin\nnpm install --save-dev --save-exact webpack\n```\n\n## Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineFontConfigWebpackPlugin} = require(\"@akqa-frontline/font-config-webpack-plugin\")\n\nmodule.exports = {\n    plugins: [\n        new FrontlineFontConfigWebpackPlugin()\n    ]\n}\n```\n\nTake a look at [webpack-config](/docs/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n\n"},{"id":"getting-started\\configuration\\generate-injection-html-webpack-plugin","title":"generate-injection-html-webpack-plugin","content":"\nGenerate html files with entry point assets.\n\n## What does it do\nThis package generates HTML with markup to load script and styles for both modern and legacy builds.\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/generate-injection-html-webpack-plugin\nnpm install --save-dev --save-exact webpack\n```\n\n## Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineGenerateInjectionHtmlWebpackPlugin} = require(\"@akqa-frontline/generate-injection-html-webpack-plugin\")\n\nconst moduleWebpackConfiguration = {\n    plugins: [\n        new FrontlineGenerateInjectionHtmlWebpackPlugin({browserslistEnv: \"modern\"})\n    ]\n}\n\nconst noModuleWebpackConfiguration = {\n    plugins: [\n        new FrontlineGenerateInjectionHtmlWebpackPlugin({browserslistEnv: \"legacy\"})\n    ]\n}\n\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\n```\n\nTake a look at [webpack-config](/docs/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n\n\n"},{"id":"getting-started\\configuration\\generator-frontline","title":"generator-frontline","content":""},{"id":"getting-started\\configuration\\image-config-webpack-plugin","title":"image-config-webpack-plugin","content":"\nImage configuration for webpack.\n\n## What does it do\nThis package lets you use image assets in your JS and (S)CSS files.\n\n### Notable features\n- Inline SVG files\n- Base64 encodes images less than 10kb\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/image-config-webpack-plugin\nnpm install --save-dev --save-exact webpack\n```\n\n### Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineImageConfigWebpackPlugin} = require(\"@akqa-frontline/image-config-webpack-plugin\")\n\nmodule.exports = {\n    plugins: [\n        new FrontlineImageConfigWebpackPlugin()\n    ]\n}\n```\n\nTake a look at [webpack-config](/docs/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n"},{"id":"getting-started\\configuration\\js-config-webpack-plugin","title":"js-config-webpack-plugin","content":"\nJavaScript configuration for webpack.\n\n## What does it do\nThis package configures loaders for Webpack, optimization/minification, provides a Babel configuration with all the language features we support, and adds tools and utils to assist developing React applications.\n\n### Notable features\n- [Works with a Module / No Module setup out of the box](/docs/development/module-no-module-builds)\n- [Babel](/docs/getting-started/configuration/babel)\n  - Class Properties\n  - Nullish Coalescing Operator\n  - Optional Chaining\n  - Dynamic Imports\n- [SVG](/docs/development/assets/svg) as React Components\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/js-config-webpack-plugin\nnpm install --save-dev --save-exact webpack\n```\n\n### Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineJsConfigWebpackPlugin} = require(\"@akqa-frontline/js-config-webpack-plugin\");\n\nconst moduleWebpackConfiguration = {\n    plugins: [\n        new FrontlineJsConfigWebpackPlugin({browserslistEnv: \"modern\"})\n    ]\n}\n\nconst noModuleWebpackConfiguration = {\n    plugins: [\n        new FrontlineJsConfigWebpackPlugin({browserslistEnv: \"legacy\"})\n    ]\n}\n\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\n```\n\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n"},{"id":"getting-started\\configuration\\node-sass","title":"node-sass","content":"\r\nnode-sass\r\n"},{"id":"getting-started\\configuration\\post-css","title":"post-css","content":"\r\npost-css\r\n"},{"id":"getting-started\\configuration\\scss-config-webpack-plugin","title":"scss-config-webpack-plugin","content":"\n(S)CSS configuration for webpack.\n\n## What does it do\nThis package configures loaders for Sass and CSS, optimization/minification, adds PostCSS, and adds tools and utils to assist styling.\n\n### Notable features\n- [CSS Modules](/docs/development/css/css-modules)\n- PostCSS Autoprefixer\n- [Icon Font generation](/docs/development/css/scss-icon-fonts)\n- [JSON import in SCSS files](/docs/development/css/scss-json-import)\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/scss-config-webpack-plugin\nnpm install --save-dev --save-exact webpack node-sass\n```\n\n## Usage\nAdd the plugin to your webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst {FrontlineScssConfigWebpackPlugin} = require(\"@akqa-frontline/scss-config-webpack-plugin\");\n\nconst moduleWebpackConfiguration = {\n    plugins: [\n        new FrontlineScssConfigWebpackPlugin({browserslistEnv: \"modern\"})\n    ]\n}\n\nconst noModuleWebpackConfiguration = {\n    plugins: [\n        new FrontlineScssConfigWebpackPlugin({browserslistEnv: \"legacy\"})\n    ]\n}\n\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\n```\n\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\n"},{"id":"getting-started\\configuration\\stylelint-config-frontline","title":"stylelint-config-frontline","content":"\r\nStylelint configuration for AKQA Denmark's frontend teams\r\n\r\n## Install\r\n\r\n```\r\nnpm install --save-dev @akqa-frontline/stylelint-config-frontline prettier stylelint stylelint-prettier stylelint-config-prettier stylelint-config-recommended-scss stylelint-scss\r\n```\r\n"},{"id":"getting-started\\configuration\\testing-with-jest","title":"testing","content":""},{"id":"getting-started\\configuration\\webpack-config","title":"webpack-config","content":"\nBaseline Configuration for Webpack.\n\n## What does it do\nThis package can be used to generate a best-practice Webpack configuration.\nIt is based on [create-react-app](https://github.com/facebook/create-react-app).\n\n### Notable features\n- Vendor and Runtime chunk generation for long-time caching\n- HTML generation\n- [.env variables support in JS and HTML](/docs/development/environment-variables)\n- [Works with a Module / No Module setup out of the box](/docs/development/module-no-module-builds)\n- [Bundle Analyzing](/docs/guides/bundle-analyzing)\n- [Asset Manifest generation](/docs/development/cms/asset-manifest) - optimized for Module / no Module setup\n- [Hot Module Reloading](/docs/development/cms/hot-module-reloading)\n\n## Install\nInstall this package and its peer dependencies:\n\n```\nnpm install --save-dev --save-exact @akqa-frontline/scss-config-webpack-plugin\nnpm install --save-dev --save-exact webpack @hot-loader/react-dom react react-dom react-hot-loader webpack-dev-server\n```\n\n## Usage\n\nCreate a Webpack configuration\n\n```javascript\n// webpack.config.js\n\nconst { FrontlineWebpackConfig } = require(\"@akqa-frontline/webpack-config\")\n\nconst moduleWebpackConfig = FrontlineWebpackConfig(\n    \"modern\",\n    { ... any webpack configuration you want merged }\n)\n\nconst noModuleWebpackConfig = FrontlineWebpackConfig(\n    \"legacy\",\n    { ... any webpack configuration you want merged }\n)\n\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\n```\n"},{"id":"getting-started\\flavours\\cms","title":"Configuring Frontline for a CMS setup","content":"\nThere are major differences in the desired setup for working on a static site / SPA and a CMS where we have little or no control of the web server generating HTML and serving assets.\n\nWe also don't want to worsen our developer experience (DX) and developer features such as style injection (hot reload), javascript injection (hot module reload, HMR), etc. should continue to work as we've come to expect when working in a SPA-like setup (ie. `frontline-starter-spa` or `create-react-app`).\n\nWe are working hard to make sure that you need to do as little configuration as possible, however - there are some things that are left up to you to figure out - at least for the time being - because all of our projects varies in terms of folder structure.\n\n## Prerequisites\n\nBefore you start updating your Frontline configuration, here's what you need to figure out:\n\n- **Where is the *source* frontend code located?**\n- **Where is the *output* directory located?**\n- **Where is the *root* directory that the web server serves content from?**\n- **What is the *relative* path from the *output* directory, to the *root* directory?**\n- **What is the *hostname* of the CMS server?**\n\nAs an example, given the project folder structure:\n\n```\nmy-cms-project\n    ├── src\\\n    │   ├── frontend\\\n    │   │   └── package.json\n    │   │   └── webpack.config.js\n    │   │   └── src\\\n    ├── www\\\n    │    ├── dist\\\n    │    │    ├── sub-directory\\\n```\n- the *source* code is located in `src/frontend`\n- the *output* code is located in `www/dist/sub-directory`\n- the *root* directory that the server serves from is `www`\n- the relative path from `www/dist/sub-directory` to `www` is `\"../../\"`\n- the *hostname* of the CMS server is `\"my-cms-project.local\"`\n\n*(the hostname can be found in IIS, likely in your HOSTS file, or you can ask a backender on your project)*\n\nThe `\"../../\"` relative path, is called `publicPath` in webpack. It is used to tell webpack plugins how to load runtime assets (images, fonts, lazy-loaded code).\n\nIf you have problems loading *assets* or entry points, it is likely an issue with your *publicPath*. Please ask for help if you need help figuring out the relative path.\n\n## Preparation\nMake sure you are using the latest `@akqa-frontline/*-config-webpack-plugin` and accompanying packages.\n\nAt the time of writing this (26/06/2020) you should have the following versions installed:\n\n```\n\"@akqa-frontline/asset-config-webpack-plugin\": \"0.9.0-rc.0\",\n\"@akqa-frontline/font-config-webpack-plugin\": \"0.9.0-rc.0\",\n\"@akqa-frontline/generate-injection-html-webpack-plugin\": \"0.9.0-rc.1\",\n\"@akqa-frontline/image-config-webpack-plugin\": \"0.9.0-rc.0\",\n\"@akqa-frontline/js-config-webpack-plugin\": \"0.9.0-rc.0\",\n\"@akqa-frontline/scss-config-webpack-plugin\": \"0.9.0-rc.1\",\n\"@akqa-frontline/webpack-config\": \"0.9.0-rc.0\",\n```\n\nFeel free to update all `@akqa-frontline` packages including linting, etc.\n\n## Update the webpack configuration\nNow it's time to update the configuration. If you have been using a webpack plugin to generate HTML for injection in your CMS (before we released `generate-injection-html-webpack-plugin`) then disable this in your webpack config.\n\nSame goes for any mutating overrides of the config generated by `@akqa-frontline/webpack-config`.\n\n### Disable legacy bundles in your development environment\nWhen we develop, we want speed over browsersupport. You can always switch to the legacy bundles if you need to debug / test in old browsers.\n\n```javascript\n// top of webpack.config.js\nconst isDevelopment = process.env.NODE_ENV === \"development\";\n\n// end of webpack.config.js\nmodule.exports = isDevelopment\n    ? modernWebpackConfig\n    : [modernWebpackConfig, legacyWebpackConfig];\n```\n\n### Setup `@akqa-frontline/generate-injection-html-webpack-plugin`\nAdd the `@akqa-frontline/generate-injection-html-webpack-plugin` to each browserslistEnv target webpack config.\n\n```javascript\nconst {\n    FrontlineGenerateInjectionHtmlWebpackPlugin\n} = require(\"@akqa-frontline/generate-injection-html-webpack-plugin\");\n\nconst legacyWebpackConfig = FrontlineWebpackConfig(\n    \"legacy\",\n    {\n        ... // left out for brevity\n        plugins: [\n            new FrontlineGenerateInjectionHtmlWebpackPlugin({\n                browserslistEnv: \"legacy\"\n            })\n        ],\n        ... // left out for brevity\n    }\n);\n\nconst modernWebpackConfig = FrontlineWebpackConfig(\n    \"modern\",\n    {\n        ... // left out for brevity\n        plugins: [\n            new FrontlineGenerateInjectionHtmlWebpackPlugin({\n                browserslistEnv: \"legacy\"\n            })\n        ],\n        ... // left out for brevity\n    }\n);\n```\n\n### Disable the default HTML generation in `@akqa-frontline/webpack-config`\nWhen working on a SPA, you work via an index.html file, which also gets compiled to the output dir. Since the CMS server will take care of sending markup to the client, we can disable this feature.\n\nTo disable this feature, pass a third argument to the `FrontlineWebpackConfig` factory in your webpack config. *You should never pass different configrations for different browserslistEnv's.*\n\n```javascript\nconst sharedFrontlineWebpackConfigOptions = {\n    generateHTML: false\n};\n\nconst legacyWebpackConfig = FrontlineWebpackConfig(\n    \"legacy\",\n    {\n        ... // left out for brevity\n    },\n    sharedFrontlineWebpackConfigOptions\n);\n\nconst modernWebpackConfig = FrontlineWebpackConfig(\n    \"modern\",\n    {\n        ... // left out for brevity\n    },\n    sharedFrontlineWebpackConfigOptions\n);\n```\n\n### Update the common webpack configuration\nTime to update the dev-server, and output configurations. This is where we need the info we gathered at the beginning of this guide.\n\n#### output\n\n```javascript\nconst path = require(\"path\");\n\nconst sharedWebpackConfig = {\n    output: {\n        // the output code (www/dist/sub-directory in the example)\n        // this must be an absolute path (use path.resolve())\n        path: path.resolve(__dirname, '../../www/dist/sub-directory'),\n\n        // the relative path from the output dir to the root dir where content is served from\n        // this can not be an absolute path as it is used *in* the generated code to load assets and modules\n        // should always end with trailing slash\n        publicPath: '../../'\n    },\n    ... // left out for brevity\n}\n```\n#### dev-server\n\n```javascript\nconst path = require(\"path\");\n\nconst sharedWebpackConfig = {\n    ... // left out for brevity\n    devServer: {\n        proxy: {\n            '*': {\n                // the hostname (my-cms-project.local in the example) of the CMS\n                // prefixed with http:// (or https:// if your webserver supports that).\n                target: 'http://my-cms-project.local'\n            }\n        },\n\n        // since we are using the CMS web server to serve assets,\n        // we can't use webpack-dev-servers internal memory-based filesystem\n        writeToDisk: true\n    }\n    ... // left out for brevity\n}\n```\n\n### Update any clean script to clean the output directory\nIf you are using a clean script before you build in your `package.json` (probably `rimraf`), remember to update the path.\n\n### Update the .cshtml file(s) where you normally insert script tags, and links to stylesheets\nWhen using the `@akqa-frontline/generate-injection-html-webpack-plugin` two HTML files will be generated in your output folder - `body.generated.html` and `head.generated.html`.\n\nYou should read (from filesystem) and inject these in the `.cshtml` file(s) - normally this is in a so called layout file:\n\n```html\n<!doctype html>\n<html>\n  <head>\n    <!-- latest compiled and minified JavaScript -->\n    @Html.Raw(File.ReadAllText(... path to head.generated.html ...))\n  </head>\n  <body>\n\n    <!-- latest compiled and minified JavaScript -->\n    @Html.Raw(File.ReadAllText(... path to body.generated.html ...))\n  </body>\n</html>\n```\n\nThe above example uses C# and is not framework specific. But you should find a way to declare the absolute path to the two HTML files either via C# or using frameworks specific methods.\n\nReach out to a backend developer to get help setting this up for your project.\n\n### Test it out!\nYay let's test that our configuration works, first make sure you can reach the CMS webserver on it's default hostname (ie. http://my-cms-project.local).\n\nIt would also be good to test that we can work with assets as we expect:\n\n- use `background-image: url(...)` in a SCSS file\n- use `@font-face` & `font-family` in a SCSS file\n- create a tiny JS setup with, in your main JS entry try eager, and lazy loading a module\n- `import a SCSS file in a JS file`\n- `import an image (bigger than 10kb) in a JS file`\n\nThis should cover the general asset related features and will show us wether or not the webpack module system has been configured correctly.\n\n#### Building\nBuilding is probably the most important thing we do - so let's start by generating a build. Load up the CMS site, and verify that the test scenarios above works as expected.\n\n#### dev-server\nIf we can build, great - but we also need to test that we can proxy, while still having live-reload and HMR features.\n\nFire up your dev-server and visit the CMS site, but with port `8080` appended (`8080` is default in Frontline) - ie. http://my-cms-project.local:8080.\n\nVerify the test scenarios above works as expected.\n\nFinally let's test the dev-server features.\n\nIn your browser, open up the console - you should see something along the lines of:\n\n```\n[WDS] ...\n[HMR] ...\n[HMR] ...\n[HMR] ...\n```\nIf theres no errors reported, and you see the console messages prefixed with WDS and HMR, then live-reload and hot module reloading is working.\n\nTest this by:\n\n- changing the code of a module you've imported in your main JS entry file - if eager loaded, your changes should take place without the browser reloading\n- changing a CSS style - as you are used to the changes should be injected without a reload\n\nNote some changes might not be able to be dymanically injected and will cause a full page reload. We are working on making this experience better.\n\n## HELP! The generated HTML files are broken - file contents is not valid HTML\nWe’ve seen this happen on one project - if you experience this, please reach out to Dennis right away.\n"},{"id":"getting-started\\flavours\\spa","title":"Single Page Application (SPA)","content":"\r\nThe idea of single page application (SPA) is to load all frontend resources once to avoid reloading the same layout on each page.\r\nClicking on internal links only rewrites the existing page.\r\nDecoupling the frontend and the backend so only data is transferred back and forth.\r\n\r\nImprove performance with [lazy loading](/docs/development/lazy-loading).\r\n\r\n## Starter bundle\r\nThe starter bundle contains everything you need from Frontline to easily get started with building something cool.\r\nIn short, it is the Frontline version of create-react-app.\r\n\r\nClone this repo:\r\n```\r\nhttps://github.com/akqa-frontline/frontline-starter-spa\r\n```\r\n"},{"id":"getting-started\\index","title":"Getting started","content":"\r\n# Lorem ipsum 😪\r\n\r\n## dolor—sit—amet\r\n\r\n### consectetur &amp; adipisicing\r\n\r\n#### elit\r\n\r\n##### elit\r\n"},{"id":"getting-started\\manual-setup","title":"Manual Setup","content":"\nFrontline consists of multiple plugins and packages.\nHere you get the stripped down vanilla version where you can combine the building blocks to create your own setup.\n\nIt is recommend to use the [frontline-starter-spa](/docs/getting-started/flavours/spa) as a baseline, because it consist of our most recent best practices.\nIf it does not exactly fit your requirements you can just clean up and delete those parts.\nBut if you want to understand how it is composed and you want to do it yourself - just keep going.\n"},{"id":"guides\\bundle-analyzing","title":"Bundle Analyzing","content":"\r\nThe bundle analyzer helps you visualize the bundle sizes.\r\n\r\nFirst of all you should build a production build\r\n```\r\nnpm run build\r\n```\r\n\r\n## View legazy bundles\r\n\r\n```\r\nnpm run analyze:legacy\r\n```\r\n\r\n## View modern bundles\r\n```\r\nnpm run analyze:modern\r\n```\r\n"},{"id":"guides\\code-splitting","title":"code-splitting","content":"\r\ncode-splitting\r\n"},{"id":"guides\\contributing","title":"Contributing","content":"\r\n## Docs\r\nFrontline Docs are written in MDX that lets you write JSX in Markdown documents.\r\nThis can make the documents more engaging and easier for the reader to understand.\r\n\r\nYou import a component and use it like you would in React.\r\n\r\n```mdx\r\nimport { Demo } from '@/components/playground/Demo'\r\n\r\n<Demo />\r\n```\r\n\r\nThis will result in\r\n\r\nimport { Demo } from '@/components/playground/Demo'\r\n\r\n<Demo />\r\n\r\n<br /><br />\r\n\r\n## Contributing to Frontline Docs\r\n1. Become a member of the team. Ask Dennis to give you access to\r\nhttps://github.com/akqa-frontline\r\n\r\n2. Create a branch for you changes\r\n\r\n3. Commit changes with `git commit` that uses commitizen to guide you to a fitting commit message\r\n\r\n4. Create a pull request so the Frontline team members can review your changes\r\n\r\n## Contributing to Frontline\r\n\r\nThis guide is found in the Frontline repo:\r\n- [`CONTRIBUTING.md`](https://github.com/akqa-frontline/frontline/blob/master/CONTRIBUTING.md)\r\n"},{"id":"guides\\installing-a-dependency","title":"Installing A Dependency","content":"\r\n"}]