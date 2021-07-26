import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// add as module if I can't get dynamic image working
// import Img from "gatsby-image";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const NewsHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost {
          edges {
            node {
              id
              title
              feature_image
              html
              published_at(formatString: "MMMM D, YYYY")
              excerpt
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
    // map so this randomizes on refresh and
    // filter only for feature_image

    <Row fluid className="py-5">
      <Col xs={12} md={6}>
        <Image
          src={data.allGhostPost.edges[0].node.feature_image}
          fluid
          alt=""
        />
      </Col>
      <Col xs={12} md={6}>
        <Button variant="outline-dark" size="sm">
          {data.allGhostPost.edges[1].node.tags[0].name}
        </Button>
        <h1 className="display-5 fw-bold">
          {data.allGhostPost.edges[0].node.title}
        </h1>
        <p>
          by {data.allGhostPost.edges[0].node.authors[0].name} on{" "}
          {data.allGhostPost.edges[0].node.published_at}
        </p>
        <Button variant="danger" className="text-uppercase">
          read more
        </Button>
      </Col>
    </Row>
  );
};

export default NewsHeader;
