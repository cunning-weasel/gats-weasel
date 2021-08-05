import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Form from "react-bootstrap/Form";
import { h1, p } from "./about.module.scss";

function Contact() {
  return (
    <Layout>
      <Seo title="Contact" />

      <Form>
        <div className="container">
          <h1 className={h1}>Contact</h1>
          <p className={p}>
            <h3>
              Let's make something awesome together <br></br> Get in touch -
              email us: team@mindchase.de <br></br> or send us:
            </h3>
          </p>
          <div className="row">
            <div className="col-sm">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name </Form.Label>
                <Form.Control type="name" placeholder="name" />
              </Form.Group>
            </div>
            <div className="col-sm">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Number</Form.Label>
                <Form.Control type="tel/number" placeholder="number" />
              </Form.Group>
            </div>
            <div className="col-sm">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </div>
          </div>
          <div className="btn btn-danger">Send</div>
        </div>
      </Form>
    </Layout>
  );
}

export default Contact;
