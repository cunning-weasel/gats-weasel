import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "./Nav.module.scss";
import "./Body.scss";
import "./Banner.module.scss";
import "./Footer.module.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Banner from "../components/Banner";
const Body = () => {
  // rest - check param for edges
  // console.log(`https://mindchase.ghost.io/ghost/api/v3/content/posts/?key=${process.env.GATSBY_CONTENT_API}`);
  return (
    <>
      {/* jumbotron */}
      <Jumbotron fluid className="p-5 bg-image">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <StaticImage
                src="../images/Logos/jingle_easy-growing-for-everyone.png"
                alt="easy growing for everyone"
              />
            </div>
            <div>
              <StaticImage
                src="../images/Logos/mindchase-logo-transparent.png"
                alt="mindchase logo"
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
                <h1>Lorem ipsum dolor sit amet</h1>
              </Col>
            </Row>
            <Row>
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
              </Col>
            </Row>
            <Button variant="danger">
              <Link to="/workshops">Our workshops</Link>
            </Button>
          </Container>
        </section>
        {/* empower, knowledge, growth and yes*/}
        <section className="page-section-empower">
          <Container>
            <div className="empowerElems justify-content-center align-items-center">
              <div>
                <div>
                  <StaticImage
                    src="../images/Logos/mindchase-symbol-big.png"
                    alt=""
                    className="empowerImg"
                  />
                </div>
              </div>
              <div>
                <div className="underline">
                  <h2>
                    <div>empower, knowledge, growth, education and training</div>
                  </h2>
                </div>
                <div>
                  <ul className="list-split">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <Button variant="danger">
                  <Link to="/about">CHECK OUT OUR TEAM</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
        {/* partners */}
        <section className="page-section-partners">
          <Container>
            <div className="partnersElems justify-content-center align-items-center">
              <h2 className="underline">our partners</h2>
              {/* we can think about doing some grid/ flex card layout for this? 
                  graphQL fetch from partners page?
              */}
              <Banner />
            </div>
          </Container>
        </section>
        {/* news? */}
        <section className="page-section-news">
          <Container>
            <div className="newsElems justify-content-center align-items-center">
              <h2 className="underline">news? work??</h2>
              {/* bring in feed from news? */}
              Here we can do a graphQL fetch from news or smthn
            </div>
          </Container>
        </section>
        {/* sign-up form cta */}
        <Form className="bottom-cta text-align:center d-flex justify-content-center">
          <Row>
            <Col>
          <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
            <h3 className="mb-2 text-center text-uppercase text-white mb-3">Join newsletter</h3>
            <Form.Control type="email" placeholder="Email*" />
            <Button className="bottom-cta btn-outline-light" type="submit">
            Submit
          </Button>
            <Form.Text className="text-white">
              This is where I want "email must be formatted correctly" to show up
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
