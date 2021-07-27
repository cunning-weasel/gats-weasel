import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const NewsHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allGhostPost(filter: { featured: { eq: true } }) {
          edges {
            node {
              id
              title
              feature_image
              slug
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

  if (data && data.allGhostPost.edges[0]) {
    return (
      <Container fluid className="p-5 mb-4 bg-light border-bottom">
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
              {data.allGhostPost.edges[0].node.tags[0].name}
            </Button>
            <h1 className="display-5 fw-bold">
              {data.allGhostPost.edges[0].node.title}
            </h1>

            {/* {JSON.stringify(data.allGhostPost.edges[0].node)}             */}
            <p>
              by {data.allGhostPost.edges[0].node.authors[0].name} on{" "}
              {data.allGhostPost.edges[0].node.published_at}
            </p>
            <Link
              to={`/news/${data.allGhostPost.edges[0].node.slug}`}
              className="text-uppercase btn btn-danger"
            >
              read more
            </Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

export default NewsHeader;
