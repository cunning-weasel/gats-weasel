import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useStaticQuery, graphql, Link } from "gatsby";
import { hover, text } from "./News.module.scss";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

const News = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost(limit: 3, sort: { order: DESC, fields: [published_at] }) {
          edges {
            node {
              id
              title
              feature_image
            }
          }
        }
      }
    `
  );

  // note to self - use filter in GQL query for latest 3 posts - sort news section first
  return (
    <>
      <h2 className={text}>
        <u>Stay Updated</u>
      </h2>
      <div clasName="container">
        <div className="row">
          {data &&
            data.allGhostPost.edges.map(({ node }) => {
              return (
                <div className="col-12 col-lg-4">
                  <Link className="text-decoration-none" to="/news">
                    <div className={hover}>
                      <Card key={node.id} style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={node.feature_image} />
                        <Card.Body>
                          <Card.Title>{node.title}</Card.Title>
                          <Button variant="danger" className="text-uppercase">
                            read more
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default News;
