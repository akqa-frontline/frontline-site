export const posts = [{"id":"deployment\\ci-cd","title":"ci-cd","content":"\r\nci-cd\r\n"},{"id":"deployment\\production-build","title":"production-build","content":"\r\nproduction-build\r\n"},{"id":"development\\assets\\fonts","title":"fonts","content":"\r\nfonts\r\n"},{"id":"development\\assets\\images","title":"images","content":"\r\nimages\r\n"},{"id":"development\\assets\\svg","title":"SVG","content":"\r\nSVG's can be imported as a component:\r\n\r\n```jsx\r\nimport { ReactComponent as Logo } from './logo.svg';\r\n\r\nfunction App() {\r\n  return (\r\n    <div>\r\n      <Logo />\r\n    </div>\r\n  );\r\n}\r\n```\r\n"},{"id":"development\\cms\\asset-manifest","title":"Asset Manifest","content":"\r\nThe asset manifest is a JSON file with a map, following this structure:\r\n```json\r\n{\r\n    \"[browserslist environment name]\": {\r\n        \"files\": {\r\n            \"input file name\": \"/absolute output dir/output file name with hash and module type\",\r\n            \"...\": \"...\"\r\n        },\r\n        \"entrypoints: {\r\n            \"entry point file name\": [\r\n                \"relative to entry point output dir/output file name with hash and module type\",\r\n                \"...\": \"...\"\r\n            ]\r\n        }\r\n    },\r\n    \"...\": \"...\"\r\n}\r\n```\r\n\r\n## Example\r\n\r\n<details>\r\n  <summary>Example asset-manifest.json</summary>\r\n\r\n```json\r\n{\r\n  \"modern\": {\r\n    \"files\": {\r\n      \"lazy-component.js\": \"/static/js/lazy-component.modern.0d69cf1c.chunk.js\",\r\n      \"lazy-component.js.map\": \"/static/js/lazy-component.modern.0d69cf1c.chunk.js.map\",\r\n      \"main.js\": \"/static/js/main.modern.c7f0341c.chunk.js\",\r\n      \"main.js.map\": \"/static/js/main.modern.c7f0341c.chunk.js.map\",\r\n      \"runtime-main.js\": \"/static/js/runtime-main.modern.df27d7ca.js\",\r\n      \"runtime-main.js.map\": \"/static/js/runtime-main.modern.df27d7ca.js.map\",\r\n      \"runtime-styles.js\": \"/static/js/runtime-styles.modern.b857147d.js\",\r\n      \"runtime-styles.js.map\": \"/static/js/runtime-styles.modern.b857147d.js.map\",\r\n      \"styles.css\": \"/static/css/styles.modern.80258434.chunk.css\",\r\n      \"vendors~main.js\": \"/static/js/vendors~main.modern.e9adc618.chunk.js\",\r\n      \"vendors~main.js.map\": \"/static/js/vendors~main.modern.e9adc618.chunk.js.map\",\r\n      \"index.html\": \"/index.html\",\r\n      \"static/css/styles.modern.80258434.chunk.css.map\": \"/static/css/styles.modern.80258434.chunk.css.map\"\r\n    },\r\n    \"entrypoints\": {\r\n      \"main\": [\r\n        \"static/js/runtime-main.modern.df27d7ca.js\",\r\n        \"static/js/vendors~main.modern.e9adc618.chunk.js\",\r\n        \"static/js/main.modern.c7f0341c.chunk.js\"\r\n      ],\r\n      \"styles\": [\r\n        \"static/js/runtime-styles.modern.b857147d.js\",\r\n        \"static/css/styles.modern.80258434.chunk.css\"\r\n      ]\r\n    }\r\n  },\r\n  \"legacy\": {\r\n    \"files\": {\r\n      \"lazy-component.js\": \"/static/js/lazy-component.legacy.fe370a94.chunk.js\",\r\n      \"lazy-component.js.map\": \"/static/js/lazy-component.legacy.fe370a94.chunk.js.map\",\r\n      \"main.js\": \"/static/js/main.legacy.9c349b5b.chunk.js\",\r\n      \"main.js.map\": \"/static/js/main.legacy.9c349b5b.chunk.js.map\",\r\n      \"runtime-main.js\": \"/static/js/runtime-main.legacy.7c8021a7.js\",\r\n      \"runtime-main.js.map\": \"/static/js/runtime-main.legacy.7c8021a7.js.map\",\r\n      \"runtime-styles.js\": \"/static/js/runtime-styles.legacy.b857147d.js\",\r\n      \"runtime-styles.js.map\": \"/static/js/runtime-styles.legacy.b857147d.js.map\",\r\n      \"styles.css\": \"/static/css/styles.legacy.80258434.chunk.css\",\r\n      \"vendors~main.js\": \"/static/js/vendors~main.legacy.5eaa684c.chunk.js\",\r\n      \"vendors~main.js.map\": \"/static/js/vendors~main.legacy.5eaa684c.chunk.js.map\",\r\n      \"index.html\": \"/index.html\",\r\n      \"static/css/styles.legacy.80258434.chunk.css.map\": \"/static/css/styles.legacy.80258434.chunk.css.map\"\r\n    },\r\n    \"entrypoints\": {\r\n      \"main\": [\r\n        \"static/js/runtime-main.legacy.7c8021a7.js\",\r\n        \"static/js/vendors~main.legacy.5eaa684c.chunk.js\",\r\n        \"static/js/main.legacy.9c349b5b.chunk.js\"\r\n      ],\r\n      \"styles\": [\r\n        \"static/js/runtime-styles.legacy.b857147d.js\",\r\n        \"static/css/styles.legacy.80258434.chunk.css\"\r\n      ]\r\n    }\r\n  }\r\n}\r\n```\r\n</details>\r\n<br />\r\n\r\nInternally, webpack uses this manifest along with a small\r\nruntime, to load your projects javascript modules in the\r\nruntime.\r\n\r\nDuring a production build Frontline's webpack configuration can\r\n\"compile\" an `index.html` file for you, and take care of inserting\r\nthe hashed file names.\r\n\r\nSometimes we cant control the markup because it is generated on\r\na server, when a page is requested (Server Side Rendering).\r\n\r\nThis is where the `asset-manifest.json` file can be used.\r\n\r\nThe code in [`module-no-module-asset-manifest.server-side.js`](https://github.com/akqa-frontline/frontline-starter-spa/blob/examples/asset-manifest/src/module-no-module-asset-manifest.server-side.js)\r\nis written in JavaScript, but can be easily implemented in a\r\nlanguage such as C#. It consists of three methods which, you can\r\nfind walkthroughs of how they work in the source code.\r\n\r\n"},{"id":"development\\cms\\epi-server","title":"epi-server","content":"\r\nepi-server\r\n"},{"id":"development\\cms\\html-injection","title":"html-injection","content":"\r\nhtml-injection\r\n"},{"id":"development\\cms\\proxy","title":"proxy","content":"\r\nproxy\r\n"},{"id":"development\\cms\\sitecore","title":"sitecore","content":"\r\nsitecore\r\n"},{"id":"development\\cms\\umbraco","title":"umbraco","content":"\r\numbraco\r\n"},{"id":"development\\css\\css-modules","title":"css-modules","content":"\r\ncss-modules\r\n"},{"id":"development\\css\\global-styles","title":"global-styles","content":"\r\nglobal-styles\r\n"},{"id":"development\\css\\scss-icon-fonts","title":"scss-icon-fonts","content":"\r\nscss-icon-fonts\r\n"},{"id":"development\\css\\scss-json-import","title":"scss-json-import","content":"\r\nscss-json-import\r\n"},{"id":"development\\css\\scss","title":"scss","content":"\r\nscss\r\n"},{"id":"development\\dev-server","title":"Dev Server","content":"\r\n## Change port\r\nYou can change the port if the default port `8080` is being used by another service.\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\n// highlight-start\r\nconst sharedWebpackConfig = {\r\n  devServer: {\r\n    port: 3000\r\n  }\r\n};\r\n// highlight-end\r\n\r\nconst legacyWebpackConfig = FrontlineWebpackConfig(\"legacy\", {\r\n  entry,\r\n  plugins: [],\r\n  ...sharedWebpackConfig // highlight-line\r\n});\r\n\r\nconst modernWebpackConfig = FrontlineWebpackConfig(\"modern\", {\r\n  entry,\r\n  plugins: [],\r\n  ...sharedWebpackConfig // highlight-line\r\n});\r\n```\r\n\r\n"},{"id":"development\\environment-variables","title":"Environment Variables","content":"\r\n## Examples\r\n\r\nThe env variables in your `.env` file can be used directly in your HTML.\r\nThis is great for things such as Google Analytics!\r\n\r\n- `FRONTLINE_GOOGLE_ANALYTICS_ID`\r\n- `FRONTLINE_API_KEY`\r\n- `FRONTLINE_FEATURE_TOGGLE`\r\n\r\n## Usage\r\n\r\nTo define and use your own env variables, follow these steps:\r\n1. Create a `.env` file in the root of your project\r\n2. Write your env variables, they ***must*** be prefixed with `FRONTLINE` - example:\r\n```javascript\r\nFRONTLINE_API_KEY=apisftw\r\n```\r\n3. Access it:\r\n```javascript\r\nprocess.env.FRONTLINE_API_KEY\r\n```\r\n\r\n## Built-in variables\r\n\r\nThere are also two built-in env variables:\r\n- `NODE_ENV`\r\n- `PUBLIC_URL`\r\n\r\nUse `NODE_ENV` to help determine if you are running production code or not.\r\nUse `PUBLIC_URL` as a prefix for assets hosted in the public folder, always.\r\n\r\n## Asset HTML example\r\n```html\r\n<img src=\"%PUBLIC_URL%/images/dog.webp\" />\r\n```\r\n\r\n## Live example\r\nThis Frontline example prints the internal env variables.\r\n\r\nimport { Embed } from '@/components/playground/Embed'\r\n\r\n<Embed id=\"env-qwj77\" height=\"150px\" />\r\n"},{"id":"development\\hot-module-reloading","title":"Hot Module Reloading","content":""},{"id":"development\\index","title":"Development","content":"\r\nThis will introduce you to the development docs\r\n"},{"id":"development\\integrations\\gatsby","title":"gatsby","content":"\r\ngatsby\r\n"},{"id":"development\\integrations\\next-js","title":"next-js","content":"\r\nnext-js\r\n"},{"id":"development\\integrations\\storybook","title":"Storybook","content":"\r\n[Storybook](https://storybook.js.org) helps you build UI components in isolation.\r\nA button usually have different states such as regular, disabled or loading.\r\nThose states can be hard to find in the real app.\r\nWith Storybook you can build stories for each component and its states.\r\nThen Storybook becomes a collection of all your generic components which is easy to show to new developers.\r\n"},{"id":"development\\javascript\\javascript","title":"javascript","content":"\r\njavascript\r\n"},{"id":"development\\javascript\\react","title":"react","content":"\r\nreact\r\n"},{"id":"development\\javascript\\typescript","title":"typescript","content":"\r\ntypescript\r\n"},{"id":"development\\lazy-loading","title":"Lazy Loading","content":"\r\nUse `React.lazy` to dynamically import a component.\r\nDynamic imports are a way of code-splitting so you don't request components until they are needed.\r\n\r\n## Lazy loaded default import\r\n```jsx\r\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\r\n```\r\n\r\n## Lazy loaded named import\r\nThere seems to be this workaround:\r\n```jsx\r\nconst OtherComponent = React.lazy(\r\n  () => import('./OtherComponent').then(module => ({ default: module.OtherComponent }))\r\n);\r\n```\r\n\r\nBut the React-safe way forces you to re-export a named export as the default export.\r\n```jsx\r\nexport { OtherComponent as default } from \"./OtherComponent\";\r\nconst OtherComponent = React.lazy(\r\n  () => import('./OtherComponent').then(module => ({ default: module.OtherComponent }))\r\n);\r\n```\r\n\r\n## Suspense\r\nThe lazy loaded component should be rendered inside a `Suspense` component.\r\nThe `Suspense` component allows you to display a loader until the component is ready.\r\n\r\n```jsx\r\n<Suspense fallback={<div>Loading...</div>}>\r\n  <OtherComponent />\r\n</Suspense>\r\n```\r\n## Error Boundaries\r\nIf a component encounters an error or fails to load it will throw an error.\r\nAn `Error Boundary` is able catch errors inside that boundary while the rest of the site is fully functional.\r\n\r\nThe easiest way to get stated is by using the package `react-error-boundary`.\r\n\r\n```\r\nnpm install --save react-error-boundary\r\n```\r\n\r\nInstall it and follow [their guide](https://www.npmjs.com/package/react-error-boundary#usage) on how to use it.\r\n\r\n<br />\r\n\r\n## Examples\r\n\r\nimport { Embed } from '@/components/playground/Embed'\r\n\r\n<Embed id=\"lazy-loading-rro6q\" height=\"500px\" />\r\n"},{"id":"development\\linting-formatting","title":"linting-formatting","content":"\r\nlinting-formatting\r\n"},{"id":"development\\module-no-module-builds","title":"Module No Module Builds","content":"\r\nIf a browser supports module scripts, the `modern-app.js` file will be loaded.\r\nFor older browsers the unknown script `type=\"module\"` will be ignored and the `legacy-app.js` file will be loaded.\r\nThe `nomudule` attribute lets modern browsers skip that line so both files are not loaded.\r\n\r\n```html\r\n<script type=\"module\" src=\"modern-app.js\"></script>\r\n<script nomodule src=\"legacy-app.js\"></script>\r\n```\r\n"},{"id":"development\\public-folder","title":"Public Folder","content":"\nFiles in the public folder are copied to the build folder untouched.\n\n## Reference assets\nImport assets in Javascript.\n```\nimport logo from './logo.png';\n```\n\nUse the [environment variable](/docs/development/environment-variables) `PUBLIC_URL` to reference assets in HTML.\n```html\n<link rel=\"icon\" href=\"%PUBLIC_URL%/favicon.ico\" />\n```\n\n\n## Copy files on build\nYou can copy files to the public and make them accessible from the root of the page with the package `copy-webpack-plugin`\n\n```js\nconst CopyPlugin = require('copy-webpack-plugin');\n\n// webpack.config.js\nsharedPlugins: [\n  ...\n  new CopyPlugin([{ from: \"./src/environment/environment.runtime.json\", to: \"environment.runtime.json\" }]),\n  new CopyPlugin([{ from: \"./src/translations/da-DK.json\", to: \"api/v1/translations/da-DK\", toType: \"file\" }]),\n]\n```\n"},{"id":"development\\webpack-config","title":"webpack config","content":"\r\n"},{"id":"getting-started\\configuration\\asset-config-webpack-plugin","title":"asset-config-webpack-plugin","content":"\r\nStatic assets configuration for webpack.\r\n\r\n## What does it do\r\nThis package does not do much currently.\r\n\r\nWhen creating a production build, it will copy all files except HTML files from the public folder to the build output folder.\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/asset-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack\r\n```\r\n\r\n## Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineAssetConfigWebpackPlugin} = require(\"@akqa-frontline/asset-config-webpack-plugin\")\r\n\r\nmodule.exports = {\r\n    plugins: [\r\n        new FrontlineAssetConfigWebpackPlugin()\r\n    ]\r\n}\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n"},{"id":"getting-started\\configuration\\babel","title":"babel","content":"\r\nbabel\r\n"},{"id":"getting-started\\configuration\\eslint-config-frontline","title":"eslint-config-frontline","content":"\r\nESlint configuration for AKQA Denmark's frontend teams\r\n\r\n## Install\r\n\r\n```\r\nnpm install --save-dev @akqa-frontline/eslint-config-frontline @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x\r\n```\r\n"},{"id":"getting-started\\configuration\\font-config-webpack-plugin","title":"font-config-webpack-plugin","content":"\r\nFont configuration for webpack.\r\n\r\n## What does it do\r\nThis package lets you use font assets in your JS and (S)CSS files.\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/font-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack\r\n```\r\n\r\n## Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineFontConfigWebpackPlugin} = require(\"@akqa-frontline/font-config-webpack-plugin\")\r\n\r\nmodule.exports = {\r\n    plugins: [\r\n        new FrontlineFontConfigWebpackPlugin()\r\n    ]\r\n}\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n\r\n"},{"id":"getting-started\\configuration\\generate-injection-html-webpack-plugin","title":"generate-injection-html-webpack-plugin","content":"\r\nGenerate html files with entry point assets.\r\n\r\n## What does it do\r\nThis package generates HTML with markup to load script and styles for both modern and legacy builds.\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/generate-injection-html-webpack-plugin\r\nnpm install --save-dev --save-exact webpack\r\n```\r\n\r\n## Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineGenerateInjectionHtmlWebpackPlugin} = require(\"@akqa-frontline/generate-injection-html-webpack-plugin\")\r\n\r\nconst moduleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineGenerateInjectionHtmlWebpackPlugin({browserslistEnv: \"modern\"})\r\n    ]\r\n}\r\n\r\nconst noModuleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineGenerateInjectionHtmlWebpackPlugin({browserslistEnv: \"legacy\"})\r\n    ]\r\n}\r\n\r\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n\r\n\r\n"},{"id":"getting-started\\configuration\\generator-frontline","title":"generator-frontline","content":""},{"id":"getting-started\\configuration\\image-config-webpack-plugin","title":"image-config-webpack-plugin","content":"\r\nImage configuration for webpack.\r\n\r\n## What does it do\r\nThis package lets you use image assets in your JS and (S)CSS files.\r\n\r\n### Notable features\r\n- Inline SVG files\r\n- Base64 encodes images less than 10kb\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/image-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack\r\n```\r\n\r\n### Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineImageConfigWebpackPlugin} = require(\"@akqa-frontline/image-config-webpack-plugin\")\r\n\r\nmodule.exports = {\r\n    plugins: [\r\n        new FrontlineImageConfigWebpackPlugin()\r\n    ]\r\n}\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n"},{"id":"getting-started\\configuration\\js-config-webpack-plugin","title":"js-config-webpack-plugin","content":"\r\nJavaScript configuration for webpack.\r\n\r\n## What does it do\r\nThis package configures loaders for Webpack, optimization/minification, provides a Babel configuration with all the language features we support, and adds tools and utils to assist developing React applications.\r\n\r\n### Notable features\r\n- [Works with a Module / No Module setup out of the box](/development/module-no-module-builds)\r\n- [Babel](/getting-started/configuration/babel)\r\n  - Class Properties\r\n  - Nullish Coalescing Operator\r\n  - Optional Chaining\r\n  - Dynamic Imports\r\n- [SVG](/development/assets/svg) as React Components\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/js-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack\r\n```\r\n\r\n### Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineJsConfigWebpackPlugin} = require(\"@akqa-frontline/js-config-webpack-plugin\");\r\n\r\nconst moduleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineJsConfigWebpackPlugin({browserslistEnv: \"modern\"})\r\n    ]\r\n}\r\n\r\nconst noModuleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineJsConfigWebpackPlugin({browserslistEnv: \"legacy\"})\r\n    ]\r\n}\r\n\r\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n"},{"id":"getting-started\\configuration\\node-sass","title":"node-sass","content":"\r\nnode-sass\r\n"},{"id":"getting-started\\configuration\\post-css","title":"post-css","content":"\r\npost-css\r\n"},{"id":"getting-started\\configuration\\scss-config-webpack-plugin","title":"scss-config-webpack-plugin","content":"\r\n(S)CSS configuration for webpack.\r\n\r\n## What does it do\r\nThis package configures loaders for Sass and CSS, optimization/minification, adds PostCSS, and adds tools and utils to assist styling.\r\n\r\n### Notable features\r\n- [CSS Modules](/development/css/css-modules)\r\n- PostCSS Autoprefixer\r\n- [Icon Font generation](/development/css/scss-icon-fonts)\r\n- [JSON import in SCSS files](/development/css/scss-json-import)\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/scss-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack node-sass\r\n```\r\n\r\n## Usage\r\nAdd the plugin to your webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst {FrontlineScssConfigWebpackPlugin} = require(\"@akqa-frontline/scss-config-webpack-plugin\");\r\n\r\nconst moduleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineScssConfigWebpackPlugin({browserslistEnv: \"modern\"})\r\n    ]\r\n}\r\n\r\nconst noModuleWebpackConfiguration = {\r\n    plugins: [\r\n        new FrontlineScssConfigWebpackPlugin({browserslistEnv: \"legacy\"})\r\n    ]\r\n}\r\n\r\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\r\n```\r\n\r\nTake a look at [webpack-config](/getting-started/configuration/webpack-config) for instructions on a more complete Frontline webpack configuration.\r\n"},{"id":"getting-started\\configuration\\stylelint-config-frontline","title":"stylelint-config-frontline","content":"\r\nStylelint configuration for AKQA Denmark's frontend teams\r\n\r\n## Install\r\n\r\n```\r\nnpm install --save-dev @akqa-frontline/stylelint-config-frontline prettier stylelint stylelint-prettier stylelint-config-prettier stylelint-config-recommended-scss stylelint-scss\r\n```\r\n"},{"id":"getting-started\\configuration\\testing-with-jest","title":"testing","content":""},{"id":"getting-started\\configuration\\webpack-config","title":"webpack-config","content":"\r\nBaseline Configuration for Webpack.\r\n\r\n## What does it do\r\nThis package can be used to generate a best-practice Webpack configuration.\r\nIt is based on [create-react-app](https://github.com/facebook/create-react-app).\r\n\r\n### Notable features\r\n- Vendor and Runtime chunk generation for long-time caching\r\n- HTML generation\r\n- [.env variables support in JS and HTML](/development/environment-variables)\r\n- [Works with a Module / No Module setup out of the box](/development/module-no-module-builds)\r\n- [Bundle Analyzing](/guides/bundle-analyzing)\r\n- [Asset Manifest generation](/development/cms/asset-manifest) - optimized for Module / no Module setup\r\n- [Hot Module Reloading](/development/cms/hot-module-reloading)\r\n\r\n## Install\r\nInstall this package and its peer dependencies:\r\n\r\n```\r\nnpm install --save-dev --save-exact @akqa-frontline/scss-config-webpack-plugin\r\nnpm install --save-dev --save-exact webpack @hot-loader/react-dom react react-dom react-hot-loader webpack-dev-server\r\n```\r\n\r\n## Usage\r\n\r\nCreate a Webpack configuration\r\n\r\n```javascript\r\n// webpack.config.js\r\n\r\nconst { FrontlineWebpackConfig } = require(\"@akqa-frontline/webpack-config\")\r\n\r\nconst moduleWebpackConfig = FrontlineWebpackConfig(\r\n    \"modern\",\r\n    { ... any webpack configuration you want merged }\r\n)\r\n\r\nconst noModuleWebpackConfig = FrontlineWebpackConfig(\r\n    \"legacy\",\r\n    { ... any webpack configuration you want merged }\r\n)\r\n\r\nmodule.exports = [moduleWebpackConfiguration, noModuleWebpackConfiguration]\r\n```\r\n"},{"id":"getting-started\\flavours\\cms","title":"CMS","content":"\r\nThis will tell you how to get started with a CMS\r\n"},{"id":"getting-started\\flavours\\spa","title":"Single Page Application (SPA)","content":"\r\nThe idea of single page application (SPA) is to load all frontend resources once to avoid reloading the same layout on each page.\r\nClicking on internal links only rewrites the existing page.\r\nDecoupling the frontend and the backend so only data is transferred back and forth.\r\n\r\nImprove performance with [lazy loading](/docs/development/lazy-loading).\r\n\r\n## Starter bundle\r\nThe starter bundle contains everything you need from Frontline to easily get started with building something cool.\r\nIn short, it is the Frontline version of create-react-app.\r\n\r\nClone this repo:\r\n```\r\nhttps://github.com/akqa-frontline/frontline-starter-spa\r\n```\r\n"},{"id":"getting-started\\index","title":"Getting started","content":"\r\n# Lorem ipsum 😪\r\n\r\n## dolor—sit—amet\r\n\r\n### consectetur &amp; adipisicing\r\n\r\n#### elit\r\n\r\n##### elit\r\n"},{"id":"getting-started\\manual-setup","title":"Manual Setup","content":"\r\nThis will tell you how to get setting up manually from scratch!\r\n"},{"id":"guides\\bundle-analyzing","title":"Bundle Analyzing","content":"\r\nThe bundle analyzer helps you visualize the bundle sizes.\r\n\r\nFirst of all you should build a production build\r\n```\r\nnpm run build\r\n```\r\n\r\n## View legazy bundles\r\n\r\n```\r\nnpm run analyze:legacy\r\n```\r\n\r\n## View modern bundles\r\n```\r\nnpm run analyze:modern\r\n```\r\n"},{"id":"guides\\code-splitting","title":"code-splitting","content":"\r\ncode-splitting\r\n"},{"id":"guides\\contributing","title":"Contributing","content":"\r\n## Docs\r\nFrontline Docs are written in MDX that lets you write JSX in Markdown documents.\r\nThis can make the documents more engaging and easier for the reader to understand.\r\n\r\nYou import a component and use it like you would in React.\r\n\r\n```mdx\r\nimport { Demo } from '@/components/playground/Demo'\r\n\r\n<Demo />\r\n```\r\n\r\nThis will result in\r\n\r\nimport { Demo } from '@/components/playground/Demo'\r\n\r\n<Demo />\r\n\r\n<br /><br />\r\n\r\n## Contributing to Frontline Docs\r\n1. Become a member of the team. Ask Dennis to give you access to\r\nhttps://github.com/akqa-frontline\r\n\r\n2. Create a branch for you changes\r\n\r\n3. Commit changes with `git commit` that uses commitizen to guide you to a fitting commit message\r\n\r\n4. Create a pull request so the Frontline team members can review your changes\r\n\r\n## Contributing to Frontline\r\n\r\nThis guide is found in the Frontline repo:\r\n- [`CONTRIBUTING.md`](https://github.com/akqa-frontline/frontline/blob/master/CONTRIBUTING.md)\r\n"},{"id":"guides\\installing-a-dependency","title":"Installing A Dependency","content":"\r\n"},{"id":"index","content":"Test\n"}]