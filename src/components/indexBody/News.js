import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const News = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost(limit: 3) {
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
      <h2>
        <u>Stay Updated</u>
      </h2>
      <Container>
        <Row>
          {data &&
            data.allGhostPost.edges.map(({ node }) => {
              return (
                <Col>
                  <Link to="/news">
                    <Card key={node.id} style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={node.feature_image} />
                      {/* <GatsbyImage src={node.feature_image} alt="" /> */}
                      {/* <StaticImage src={node.feature_image} alt="" /> */}
                      <Card.Body>
                        <Card.Title>{node.title}</Card.Title>
                        <Button variant="danger" className="text-uppercase">
                          read more
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default News;
