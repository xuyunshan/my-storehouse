import { readdirSync, readFileSync } from 'fs';
const path = require('path');

function _generateLayout(pageJSON) {
  return {
    layoutsData: {
      activity: pageJSON.pageName, // need to be unique enough
      pageKey: pageJSON.pageName, // need to be unique enough
      title: pageJSON.title_page,
      backgroundColor: pageJSON.background_color,
      render: {
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

const mocks = readdirSync('./src/mock/generator');
const pages = mocks.map((mock) =>
  _generateLayout(JSON.parse(readFileSync(`./src/mock/generator/${mock}`)))
);
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const camoTemplate = path.resolve(`src/templates/camo.js`);
  pages.forEach(({ layoutsData }) => {
    const path = layoutsData.pageKey;
    createPage({
      path,
      component: camoTemplate,
      context: {
        layoutsData,
      },
    });
  });
  // below is an example from https://www.gatsbyjs.com/docs/creating-and-modifying-pages/
  // // Query for markdown nodes to use in creating pages.
  // const result = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(limit: 1000) {
  //         edges {
  //           node {
  //             frontmatter {
  //               path
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  // // Handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`);
  //   return;
  // }

  // // Create pages for each markdown file.
  // const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const path = node.frontmatter.path;
  //   createPage({
  //     path,
  //     component: blogPostTemplate,
  //     // In your blog post template's graphql query, you can use pagePath
  //     // as a GraphQL variable to query for data from the markdown file.
  //     context: {
  //       pagePath: path,
  //     },
  //   });
  // });
};
