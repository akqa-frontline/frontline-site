const path = require('path');
const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');
const sassJsonImporter = require('node-sass-json-importer');
const sassGlobImporter = require('node-sass-glob-importer');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = nextMDX({
  options: {
    remarkPlugins: [
      require('remark-slug'),
      require('remark-autolink-headings'),
    ],
  },
  extension: /\.mdx?$/,
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
    return config;
  },
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
