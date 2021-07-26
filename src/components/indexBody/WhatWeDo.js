import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { empowerImg, listSplit } from "./WhatWeDo.module.scss";
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
                className={empowerImg}
              />
            </Col>
            <Col>
              <div className="underline">
                <h2 className="display-6 w-bold">
                  Empower, Knowledge, Growth, Education and Training
                </h2>
              </div>
              <div>
                <ul className={listSplit}>
                  <li>Presentation Skills</li>
                  <li>Empowerment</li>
                  <li>Motivation</li>
                  <li>Self-Confidence</li>
                  <li>Time-Management</li>
                  <li>Stress-Management</li>
                </ul>
              </div>
              <Link to="/workshops" className="btn btn-danger text-uppercase">
                our workshops
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;
