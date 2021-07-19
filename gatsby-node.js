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

// // costing for website - research:
// // netlify as a quick preview for site/ staging!!!! -> probably
// // digitalOcean - sysAdmin stuff we need to do
// // Starter pack for Ghost at $9 per month -> this goes away !!!!
// // Digital Ocean -> $5 dollars to host everything -> MOngoDb can also be used there
// // no need for ghost pricing
// // One.com is only for DNS for annual -> super low fee
// // We will do intall on Ubuntu -> then push to digital ocean 
// // Could write One.com, we need Node.js, MondoDb client -> need to serve React based apps
// // could do email via https://protonmail.com/ -> write to 
// // Mindchase123
// // 1MindChase
// // https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
// // Downgrade One.com to lowest package!

// // notes to self:
// // get gatsby build onto digitalocean
// // also get git working with digial ocean
