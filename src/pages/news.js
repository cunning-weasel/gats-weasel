import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const News = () => {
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

  return (
    <Layout>
      <Seo title="News"/>
      <h2>News</h2>
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
    </Layout>
  );
};

export default News;
