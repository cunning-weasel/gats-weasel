import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import NewsHeader from "../components/newsBody/NewsHeader";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";

// moved out for testing
const News = () => {
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
              slug
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

  // console.log(data.allGhostPost.edges.node);

  return (
    <Layout>
      <Seo title="News" />

      {/* header */}

      <NewsHeader />

      {/* search/ filter/ dropdowns for tags - add filter options */}
      <Container>
        <Row>
          <Col>
            <DropdownButton variant="outline-dark" title="Browse by category">
              <Dropdown.Item href="#/action-1">
                Presentation-Skills
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Empowerment</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Motivation</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Time Management</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Stress Management</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Self-Confidence</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>

      {/* pull out this component ? */}
      <Container>
        <Row>
          {data &&
            data.allGhostPost.edges.map(({ node }) => {
              return (
                <Link to={`/news/${node.slug}`}>
                  <Col>
                    <Card key={node.id} style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={node.feature_image} />
                      <Card.Body>
                        <Card.Title>{node.title}</Card.Title>
                        {node.excerpt}
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              );
            })}
        </Row>
      </Container>

      {/* pagination */}
      {/* {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={`/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}
            </Link>
          ))}

          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )} */}
    </Layout>
  );
};

export default News;
