/*
  To get the same (S)CSS support as in @akqa-frontline/scss-config-webpack-plugin,
  we must configure postcss in Next to match the postcss config in our webpack plugin.

  When defining a custom postcss.config.js file in Next all default configuration is disabled
  so we must configure all features manually.

  The Frontline Scss package adds the iconfont-webpack-plugin package.
    It is not possible to add this package to the Next postcss configuration as Next does not
    support using a function (to get access to the loader) which is required to instantiate iconfont-webpack-plugin.

    That's the only feature we add in Frontline to postcss.

    Instead we have added support for the icon-font-generator CLI tool.
    To use the tool, please make sure you have Python 2.7.x installed on your machine.
    Additionnally, on windows, you need to run:
    npm install --global windows-build-tools
    Be careful with overlapping Python versions...
    Its likely that it will throw errors, but if files are generated - i guess that is fine

  All other settings matches exactly (flexbugs-fixes, autoprefixer).
 */

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
        ]
      : [
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
        ],
};
