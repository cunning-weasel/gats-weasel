import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const WhatWeDo = () => {
  return (
    <>
      <section className="page-section-empower">
        <Container>
          <Row>
            <Col>
              <StaticImage
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                alt=""
                className="empowerImg"
              />
            </Col>
            <Col>
              <div className="underline">
                <h2>Empower, Knowledge, Growth, Education and Training</h2>
              </div>
              <div>
                <ul className="list-split">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <Link to="/about" className="btn btn-danger text-uppercase">
                check out our team
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;
