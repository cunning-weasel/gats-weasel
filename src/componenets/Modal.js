import * as React from "react";
import { useState } from "react";
// imports for bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  // need to adjust to trigger against time spent on page/ scroll depth
  // - handle through state - should trigger once per user if they weren't 
  // in digital campus yet - probably cookie :/

  return (
    <>
      {/*<Button onClick={handleShow}>modal sample</Button>*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You've been here a while!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Why don't you check out our digital campus while you're here? LINK?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
