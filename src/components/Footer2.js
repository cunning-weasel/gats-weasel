import * as React from "react";
import { socialicons, icon} from "./Footer.module.scss";
import "./Footer.module.scss";
//import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <div>
      {/* <h1><FontAwesomeIcon icon={ faInstagram } /></h1> */}

      {/* <div className={footer}> */}
        <Form className="bg-danger text-align:center d-flex justify-content-center">
          <div className="row">
            <div className="col"> Contact</div>
            <div className="col">
              <Row>
                <Col>
                  <Form.Group className="mt-5 mb-5" controlId="formBasicEmail">
                    <h3 className="mb-2 text-center text-uppercase text-white mb-3">
                      Join newsletter
                    </h3>

                    <Form.Control type="email" placeholder="Email*" />
                    <Link
                      className="btn btn-danger btn-outline-light text-uppercase"
                      type="submit"
                    >
                      submit
                    </Link>
                    <Form.Text className="text-white">
                      This is where I want "email must be formatted correctly"
                      to render conditionally
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            <div className="col">
              <div className={socialicons}>
                <a
                  href="https://www.instagram.com/mindchase2020/"
                  title="Instagram"
                  className={icon}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/mindchase"
                  title="LinkedIn"
                  className={icon}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"> All Rights Reserved</div>
          </div>
        </Form>
      {/* </div> */}
    </div> 
  );
};
export default Footer;
