// import * as React from "react";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import Container from "react-bootstrap/Container";

// const AllPosts = ({ pageContext, res }) => {
//   const pageQuery = useStaticQuery(
//     graphql`
//       query AllPostsQuery($skip: Int!, $limit: Int!) {
//         allGhostPost(
//           sort: { fields: published_at, order: DESC }
//           skip: $skip
//           limit: $limit
//         ) {
//           edges {
//             node {
//               published_at
//               title
//               slug
//               excerpt
//             }
//           }
//         }
//       }
//     `
//   );

//   console.log(pageContext);
//   const { currentPage, numPages } = pageContext;
//   const isFirst = currentPage === 1;
//   const isLast = currentPage === numPages;
//   const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
//   const nextPage = `/${currentPage + 1}`;

//   const posts = res.allGhostPost.edges;

//   return (
//     <Container>
//       <h1>
//         Lorem ipsum dolor sit
//       </h1>
//       {posts.map((post) => {
//         <div
//           key={post.node.slug}
//           date={post.node.published_at}
//           title={post.node.title}
//           excerpt={post.node.excerpt}
//           slug={post.node.slug}
//         >
//             {post.node.excerpt}
//         </div>;
//       })}
//       {Array.from({ length: numPages }, (_, i) => (
//         <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
//           {i + 1}
//         </Link>
//       ))}

//       {!isFirst && (
//         <Link to={prevPage} rel="prev">
//           ← Previous Page
//         </Link>
//       )}
//       {!isLast && (
//         <Link to={nextPage} rel="next">
//           Next Page →
//         </Link>
//       )}
//     </Container>
//   );
// };

// export default AllPosts;
