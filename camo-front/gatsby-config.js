const pxtorem = require('postcss-pxtorem');
const presetenv = require(`postcss-preset-env`);
const path = require('path');
const postCssPlugins = [
  presetenv({
    stage: 2,
    features: {
      'nesting-rules': true,
    },
  }),
  pxtorem({
    rootValue: 75,
    unitPrecision: 5,
    propList: ['*'],
    mediaQuery: true,
    exclude: [/node_modules/],
    selectorBlackList: ['limatteo-wrap'],
    replace: true,
    minPixelValue: 1,
  }),
];

module.exports = {
  pathPrefix: `/camo`,
  siteMetadata: {
    siteUrl: 'https://www.linkedin-event.com',
    title: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname,'src'),
        },
        extensions: ['js'],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins,
      },
    },
  ],
};
