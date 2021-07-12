import React from "react";
import Container from "react-bootstrap/Container";
import { useStaticQuery, graphql } from "gatsby";

const News = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost(limit: 3) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  );

  return (
    <section className="page-section-news">
      <Container>
        <div className="newsElems justify-content-center align-items-center">
          <h2 className="underline">news? / our work??</h2>
          {data &&
            data.allGhostPost.edges.map(({ node }) => {
              return (
                <div key={node.id}>
                  <h1>{node.title}</h1>
                  <article dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default News;
