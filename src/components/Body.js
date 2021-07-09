import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./Nav.module.scss";
import "./Body.module.scss";
import "./Banner.module.scss";
import "./Footer.module.scss";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Banner from "../components/Banner";

const Body = () => {
  return (
    <>
      {/* jumbotron */}
      <Jumbotron fluid className="p-5 bg-image">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <StaticImage
                src="../images/background/website_with_logo.jpg"
                alt="easy growing for everyone"
              />
            </div>
          </div>
        </Container>
      </Jumbotron>
      {/* intro/ workshops */}
      <main>
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
                  doloribus incidunt aliquam maxime expedita fuga perferendis
                  nulla consequuntur, voluptate dolorum tempora excepturi ipsum
                  quibusdam?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus,aliquam maxime expedit.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, autem, fugiat voluptatem in consequatur repellendus
                  doloribus incidunt aliquam maxime expedita fuga perferendis
                  nulla consequuntur, voluptate dolorum tempora excepturi ipsum
                  quibusdam?
                </p>
                <Link to="/workshops" className="btn btn-danger text-uppercase">
                  our workshops
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* empower, knowledge, growth and yes*/}
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

        {/* partners */}
        <section className="page-section-partners">
          <div className="partnersElems justify-content-center align-items-center">
            <Banner />
          </div>
        </section>
        {/* news? */}
        <section className="page-section-news">
          <Container>
            <div className="newsElems justify-content-center align-items-center">
              <h2 className="underline">news? work??</h2>
              {/* bring in feed from news?  we can think about doing some grid/ 
                  card layout for this? 
                  graphQL fetch from partners page?*/}
              Here we can do a graphQL fetch from news or smthn
            </div>
          </Container>
        </section>

        {/* sign-up form cta */}
        <Form className="bg-danger text-align:center d-flex justify-content-center">
          <Row>
            <Col>
              <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
                <h3 className="mb-2 text-center text-uppercase text-white mb-3">
                  Join newsletter
                </h3>
                <Form.Control type="email" placeholder="Email*" />
                <Link className="btn btn-danger btn-outline-light text-uppercase" type="submit">
                  submit
                </Link>
                <Form.Text className="text-white">
                  This is where I want "email must be formatted correctly" to
                  show up
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </main>
    </>
  );
};

export default Body;
