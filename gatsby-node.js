const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const res = await graphql(
    `
      {
        allGhostPost(sort: { fields: [created_at], order: DESC }, limit: 3) {
          edges {
            node {
              excerpt
              created_at
              title
                slug
            }
          }
        }
      }
    `
  );

  if (res.errors) {
    reporter.panicOnBuild(`☠️🛑 err while running GQL query you 🦦 !! 🛑☠️`);
    return;
  }

  const posts = res.allGhostPost.edges;
  // creating blog post list page
  const postsPerPage = 2;
  const numPages = Math.ceil(posts.length / postsPerPage);

  // using news page as template
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: path.resolve("./src/pages/news.js"),
      // pass data to pages with context - access via pageContext on React props
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `allGhostPost`) {
    const val = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      val,
    });
  }
};
