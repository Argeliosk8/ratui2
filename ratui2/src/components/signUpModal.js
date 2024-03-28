import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpModal = ({ show, handleClose }) => {

    return(
<>
    <Modal id="signUpModal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Sign up!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form className="m-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label className="fw-lighter">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-lighter">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    )
}

export default SignUpModal;