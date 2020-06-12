const {
  FrontlineScssConfigWebpackPlugin,
} = require('@akqa-frontline/scss-config-webpack-plugin');

const path = require('path');

module.exports = {
  stories: [
    '../src/design-system/**/*.stories.tsx',
    '../src/design-system/**/*.stories.mdx',
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, './tsconfig.json'),
      },
    },
    //
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.mdx', '.md'],
      alias: {
        // need to configure Storybook Webpack alias, this is done automagically by Next via tsconfig - but not by Storybook
        '@/design-system': path.resolve(__dirname, '../src/design-system'),
      },
    };

    config.plugins.push(
      // While Next.js' webpack configuration is currently too complex for the Frontline Scss package to work with,
      // the Storybook webapck configuration is just like ours and we can just use our package,
      // instead of manually adding Frontline scss features by hand like in Next.js.
      new FrontlineScssConfigWebpackPlugin({ browserslistEnv: 'modern' }),
    );

    // We dont use @frontline/js-config-webpack-plugin, we are using Next.js - both has features for import SVG as React components.
    // Storybook does not - but it is not recommended to replace the JS/TS capabilities of Storybook, or Next, with Frontline.
    // Instead we setup the SVG import as React components manually.
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    });

    return config;
  },
};
