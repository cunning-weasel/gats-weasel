import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";

const Workshops = () => {
  return (
    <section className="mt-5 mb-5">
      <Container>
        <Row>
          <Col className="underline">
            <h2>Delivering Knowledge To All</h2>
          </Col>
          <Col>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, autem, fugiat voluptatem in consequatur repellendus
              doloribus incidunt aliquam maxime expedita fuga perferendis nulla
              consequuntur, voluptate dolorum tempora excepturi ipsum quibusdam?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus,aliquam maxime expedit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, autem, fugiat voluptatem in consequatur repellendus
              doloribus incidunt aliquam maxime expedita fuga perferendis nulla
              consequuntur, voluptate dolorum tempora excepturi ipsum quibusdam?
            </p>
            <Link to="/workshops" className="btn btn-danger text-uppercase">
              our workshops
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Workshops;
