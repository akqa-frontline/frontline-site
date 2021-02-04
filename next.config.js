const path = require('path');
const withPlugins = require('next-compose-plugins');
const withMdxEnhanced = require('next-mdx-enhanced');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withSvgr = require('next-svgr');
const sassJsonImporter = require('node-sass-json-importer');
const sassGlobImporter = require('node-sass-glob-importer');

const toc = require('markdown-toc');
const readingTime = require('reading-time');

const nextConfig = {
  target: 'experimental-serverless-trace',
  pageExtensions: ['tsx', 'mdx', 'js', 'ts'],
  sassOptions: {
    // @import from design-system root
    includePaths: [path.join(__dirname, 'src/design-system')],
    // @akqa-frontline/scss-config-webpack-plugin adds support for JSON import and using glob patterns in @imports
    importer: [sassJsonImporter(), sassGlobImporter()],
  },
  experimental: {
    modern: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};

module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
    withSvgr,
    withMdxEnhanced({
      layoutPath: 'src/layouts',
      defaultLayout: false,
      fileExtensions: ['mdx'],
      remarkPlugins: [require('remark-slug')],
      rehypePlugins: [],
      extendFrontMatter: {
        process: async (mdxContent, frontMatter) => {
          try {
            return {
              ...frontMatter,
              tableOfContents: toc(mdxContent, {}).json,
              readingTime: readingTime(mdxContent),
            };
          } catch (e) {
            throw e;
          }
        },
        phase: 'both',
      },
    }),
  ],
  nextConfig
);
