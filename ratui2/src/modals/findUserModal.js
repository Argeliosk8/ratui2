import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FindUserComponent } from '../components/findUserComponent';


const FindUserModal = ({setCollaborators, collaborators}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
          <Button className="mb-3" variant="outline-secondary" onClick={handleShow} id="custom-bg-color">
            Add Collaborator
          </Button>    
          <Modal id="Modal"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton={true} variant="outline-secondary">
              <Modal.Title>Find user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FindUserComponent collaborators={collaborators} setCollaborators={setCollaborators} ></FindUserComponent>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    
    export default FindUserModal;
