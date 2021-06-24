import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "../componenets/Nav";

const Posts = () => {
  // graphQL api call
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost {
          edges {
            node {
              id
              title
              html
              published_at
              tags {
                id
                name
                slug
              }
              authors {
                id
                name
                profile_image
              }
            }
          }
        }
      }
    `
  );
  // console.log(data.allGhostPost.edges);

  return (
    <>
      <Nav />
      <h2>projects</h2>
      {data
        ? data.allGhostPost.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <h1>{node.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Posts;
