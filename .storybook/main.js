const {
  FrontlineScssConfigWebpackPlugin,
} = require('@akqa-frontline/scss-config-webpack-plugin');

const path = require('path');

const propsDenyList = ['__themeKey', '__css'];

const propsAllowList = [
  'sx',
  'as',
  'variant',
];

module.exports = {
  stories: [
    '../src/design-system/**/*.stories.tsx',
    '../src/design-system/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y/register',
  ],
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => {
        if (!!prop.parent) {
          // Allow some props from the "outside" to be documented
          if (propsAllowList.includes(prop.name) || propsAllowList.includes(prop.parent.name)) {
            return true;
          } if (propsDenyList.includes(prop.name) || propsDenyList.includes(prop.parent.name)) {
            return false;
          } else {
            return !/node_modules/.test(prop.parent.fileName);
          }
        }

        return (
          // should have a description and not be in the props deny list
          prop.description && !propsDenyList.includes(prop.name)
        )
      },
    }
  },
  webpackFinal: async config => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.ts', '.tsx', '.js', '.mdx', '.md'],
      alias: {
        // need to configure Storybook Webpack alias, this is done automagically by Next via tsconfig - but not by Storybook GLOVES IRON, RING - HAT LEATHER - DAGGER > T3     -
        '@/design-system': path.resolve(__dirname, '../src/design-system'),
        '@/components': path.resolve(__dirname, '../src/components'),
      },
    };

    // While Next.js' webpack configuration is currently too complex for the Frontline Scss package to work with,
    // the Storybook webapck configuration is just like ours and we can just use our package,
    // instead of manually adding Frontline scss features by hand like in Next.js.

    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/',
    );
    // Add Frontline (S)CSS rule
    config.plugins.push(
      new FrontlineScssConfigWebpackPlugin({ browserslistEnv: 'modern' }),
    );

    // We add support for loading SVG as React components (and more) in @akqa-frontline/js-config-webpack-plugin
    // As we dont recommend overriting other frameworks JS configurations, we just add @svgr/webpack to Next and Storybook

    // Add SVGR Loader
    // ========================================================
    // Remove svg rules from existing webpack rule
    config.module.rules = config.module.rules.map(rule => {
      if (
        String(rule.test) ===
        String(
          /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        )
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        };
      }

      return rule;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        'url-loader',
      ],
    });

    return config;
  },
};
