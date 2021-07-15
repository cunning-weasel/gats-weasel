import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";

const News = () => {
  // note to self - incorporate pagination and some other
  // juju to make this nicer. and also export - weasel
  // <article dangerouslySetInnerHTML={{ __html: node.html }} />

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
      <Seo title="News" />

      {/* dynamic hero/ header */}
      <Container fluid className="p-5 mb-4 bg-light border-bottom">
        <Row fluid className="py-5">
          <Col>
            <img
              src="https://www.agentur-jungesherz.de/ajh-content/uploads/2015/09/Recruiting-Agentur_02.jpg"
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col>
            <Button variant="outline-dark" size="sm">
              post tag
            </Button>
            <h1 className="display-5 fw-bold">dynamic title</h1>
            <p>dynamic author w/ post date</p>
            <Button variant="danger" className="text-uppercase">
              read more
            </Button>
          </Col>
        </Row>
      </Container>

      {/* search/ filter/ dropdowns for tags - use one topic for all? */}
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
          <Col>
            <DropdownButton
              variant="outline-dark"
              title="other things to filter by tag?"
            >
              <Dropdown.Item href="#/action-1">1 weasel</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2 weasels</Dropdown.Item>
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
                <Col>
                  <Card key={node.id} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={node.feature_image} />
                    <Card.Body>
                      <Card.Title>{node.title}</Card.Title>
                      <article dangerouslySetInnerHTML={{ __html: node.tags.slug }} />
                      {node.tags.slug}
                      <Button variant="danger" className="text-uppercase">
                        read more
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Layout>
  );
};

export default News;
