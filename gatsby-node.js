// const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");

// // pagination
// // 100 items total, 10 items per page -> 10 limits
// // how does ghost do pagination -> limit they give cursor
// // res => that limit plus link 
// // can load / design on the frontend - fake pagination - only frontend

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // console.log(data.allGhostPost.edges.node);

//   const { createPage } = actions;

//   const res = await graphql(
//     `
//       {
//         allGhostPost(sort: { order: DESC, fields: published_at }, limit: 3) {
//           edges {
//             node {
//               title
//               id
//               slug
//               tags {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   if (res.errors) {
//     reporter.panicOnBuild(`☠️🛑 err while running GQL query 🦦 !! 🛑☠️`);
//     return;
//   }

//   console.log(res.allGhostPost.edges.node);
//   const posts = res.allGhostPost.edges;
//   // creating blog post list page
//   const postsPerPage = 2;
//   const numPages = Math.ceil(posts.length / postsPerPage);

//   // using news page as template
//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/news` : `/news/${i + 1}`,
//       component: path.resolve("./src/templates/allPosts.js"),
//       // pass data to pages with context - access via pageContext on React props
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     });
//   });
// };

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `allGhostPost`) {
//     const val = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       val,
//     });
//   }
// };

