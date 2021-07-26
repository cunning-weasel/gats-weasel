import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import"../Body.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Workshops = () => {
  return (
    <section className="mt-5 mb-5">
      <Container>
        <Row>
          <Col>
          <StaticImage
                src="../../images/team/mindchase_team.jpg"
                alt="Collage with photos of the mindchase team with text saying: this is us. From left Franzi, Marco, Karo, Phyllis, Kathleen."
              />
          </Col>
          <Col>
          <h2 className="display-6 w-bold lh-1 underline">Grow with us</h2>
            <p>
              Mindchase is a Team of 5 ambitious, young people, full of ideas,
              inspirations and a common goal: to create a place for personal and
              professional development, where people of different ages and
              cultural backgrounds feel inspired to shape their professional and
              personal lives (and grow beyond their borders?).
            </p>
            <p>
              Our work as a team consists of preparing the content of our
              various workshops, acquiring new partners, and brainstorming about
              new opportunities to bring our knowledge and expertise to an even
              wider audience.{" "}
            </p>
            <p>
              We work in agile sprints to expand our portfolio in a short time.
              When we're not spending a digital workday together, we're still
              constantly exchanging new ideas and suggestions via social media.
            </p>
            <Link to="/about" className="btn btn-danger text-uppercase">
                check out our team
              </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Workshops;
