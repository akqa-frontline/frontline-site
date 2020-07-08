export const sidebars = {
  docs: {
    'Getting Started': {
      'Getting Started': 'docs/getting-started',
      Flavours: {
        'For Content Management System': 'docs/getting-started/flavours/cms',
        'For Single Page Applications / Static Sites':
          'docs/getting-started/flavours/spa',
      },
      Configuration: {
        'Frontline Webpack Config':
          'docs/getting-started/configuration/frontline-webpack',
        babel: 'docs/getting-started/configuration/babel',
        postcss: 'docs/getting-started/configuration/post-css',
        'node-sass': 'docs/getting-started/configuration/node-sass',
      },
      'Manual Setup': 'docs/getting-started/manual-setup',
    },
    Development: {
      Development: 'docs/development',
      'Webpack Configuration': 'docs/development/webpack-config',
      'Working with module/nomodule build':
        'docs/development/module-no-module-builds',
      'Webpack Dev Server': 'docs/development/dev-server',
      'Public Folder': 'docs/development/public-folder',
      'Environment Variables': 'docs/development/environment-variables',
      'Linting and Formatting': 'docs/development/linting-formatting',
      JavaScript: {
        JavaScript: 'docs/development/javascript/javascript',
        TypeScript: 'docs/development/javascript/typescript',
        React: 'docs/development/javascript/react',
      },
      CSS: {
        'CSS Modules': 'docs/development/css/css-modules',
        'Global Styles': 'docs/development/css/global-styles',
        SCSS: {
          SCSS: 'docs/development/css/scss',
          'JSON Import': 'docs/development/css/scss-json-import',
          'Icon Font generation': 'docs/development/css/scss-icon-fonts',
        },
      },
      Assets: {
        SVG: 'docs/development/assets/svg',
        Images: 'docs/development/assets/images',
        Fonts: 'docs/development/assets/fonts',
      },
      'Content Management Systems': {
        'The Asset Manifest': 'docs/development/cms/asset-manifest',
        'HTML Injection': 'docs/development/cms/html-injection',
        Proxying: 'docs/development/cms/proxy',
        SiteCore: 'docs/development/cms/sitecore',
        Umbraco: 'docs/development/cms/umbraco',
        EpiServer: 'docs/development/cms/epi-server',
      },
      Integrations: {
        'Using with Gatsby': 'docs/development/integrations/gatsby',
        'Using with Next.js': 'docs/development/integrations/next-js',
        'Using with Storybook': 'docs/development/integrations/storybook',
      },
    },
    Packages: {
      '@akqa-frontline/webpack-config':
        'docs/getting-started/configuration/webpack-config',
      '@akqa-frontline/js-config-webpack-plugin':
        'docs/getting-started/configuration/js-config-webpack-plugin',
      '@akqa-frontline/scss-config-webpack-plugin':
        'docs/getting-started/configuration/scss-config-webpack-plugin',
      '@akqa-frontline/image-config-webpack-plugin':
        'docs/getting-started/configuration/image-config-webpack-plugin',
      '@akqa-frontline/font-config-webpack-plugin':
        'docs/getting-started/configuration/font-config-webpack-plugin',
      '@akqa-frontline/asset-config-webpack-plugin':
        'docs/getting-started/configuration/asset-config-webpack-plugin',
      '@akqa-frontline/generate-injection-html-webpack-plugin':
        'docs/getting-started/configuration/generate-injection-html-webpack-plugin',
    },
  },
};
