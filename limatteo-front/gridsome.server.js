// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// eslint-disable-next-line node/no-unsupported-features/es-syntax
const fs = require('fs');

function _generateLayout(pageJSON) {
  return {
    layoutsData: {
      activity: pageJSON.pageName,
      pageKey: pageJSON.pageName,
      title: pageJSON.title_page,
      render: {
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        ...pageJSON.render,
        meta: {
          title: pageJSON.title_share_zephyr,
          imageUrl: pageJSON.shareImg_Rect1,
        },
        sharing: {
          title: pageJSON.title_share_wx,
          imageUrl: pageJSON.shareImg_square,
          description: pageJSON.description_share_wx,
        },
        miniprogramSharing: {
          title: pageJSON.title_share_miniprogram,
          desc: pageJSON.description_share_miniprogram,
          imageUrl: pageJSON.shareImg_Rect2,
        },
      },
    },
  };
}

const mocks = fs.readdirSync('./src/mock/2021-freshman');
const pages = mocks.map((mock) =>
  _generateLayout(JSON.parse(fs.readFileSync(`./src/mock/2021-freshman/${mock}`)))
);

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    pages.forEach(({ layoutsData }) => {
      const path = `/grid/${layoutsData.pageKey}`;
      createPage({
        path,
        component: './src/templates/Camo.vue',
        context: {
          // eslint-disable-next-line node/no-unsupported-features/es-syntax
          ...layoutsData,
        },
      });
    });
  });
};
