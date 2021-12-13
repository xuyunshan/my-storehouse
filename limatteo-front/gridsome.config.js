// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const pxtorem = require('postcss-pxtorem');
const postcssPlugins = [
  pxtorem({
    rootValue: 75,
    unitPrecision: 5,
    propList: ['*'],
    mediaQuery: true,
    exclude: [/node_modules/, /src\/components\/buefy/],
    selectorBlackList: ['limatteo-wrap'],
    replace: true,
    minPixelValue: 1,
  }),
];

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.linkedin-event.com/',
  pathPrefix: 'campaign/',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  prefetch: {
    mask: '^$', // disable all prefetch
  },
  runtimeCompiler: true,
};
