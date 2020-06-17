const path = require('path');
// const nextMDX = require('@next/mdx');
const withMdxEnhanced = require('next-mdx-enhanced');
const bundleAnalyzer = require('@next/bundle-analyzer');
const sassJsonImporter = require('node-sass-json-importer');
const sassGlobImporter = require('node-sass-glob-importer');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = withMdxEnhanced({
  layoutPath: 'src/design-system/components/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [require('remark-slug'), require('remark-autolink-headings')],
});

const nextConfig = {
  target: 'experimental-serverless-trace',
  pageExtensions: ['tsx', 'mdx'],
  sassOptions: {
    // @import from design-system root
    includePaths: [path.join(__dirname, 'src/design-system')],
    // @akqa-frontline/scss-config-webpack-plugin adds support for JSON import and using glob patterns in @imports
    importer: [sassJsonImporter(), sassGlobImporter()],
  },
  experimental: {
    modern: true,
  },
  webpack: config => {
    // We add support for loading SVG as React components (and more) in @akqa-frontline/js-config-webpack-plugin
    // As we dont recommend overriting other frameworks JS configurations, we just add @svgr/webpack to Next and Storybook
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

module.exports = withMDX(withBundleAnalyzer(nextConfig));
