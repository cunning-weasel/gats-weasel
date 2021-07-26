// // note posts here refers to news items
// const path = require("path");

// // add the html here so it can be passed thru context
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allGhostPost {
//         edges {
//           node {
//             title
//             slug
//             html
//             feature_image
//           }
//         }
//       }
//     }
//   `);

//   // Check for any errors
//   if (result.errors) {
//     throw new Error(result.errors);
//   }

//   // Extract query results
//   const posts = result.data.allGhostPost.edges;
  
//   // Load templates
//   const postTemplate = path.resolve(`./src/templates/NewsItem.js`);

//   // Create post pages
//   posts.forEach(({ node }) => {
//     // This part here defines, that our posts will use
//     // a `/:slug/` permalink.
//     node.url = `/news/${node.slug}/`;
//     // console.log("file node.js", node.url);
//     createPage({
//       path: node.url,
//       component: postTemplate,
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.slug,
//         html: node.html,
//         feature_image: node.feature_image
//       },
//     });
//   });
// };
