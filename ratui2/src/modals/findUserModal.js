import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FindUserComponent } from '../components/findUserComponent';

const FindUserModal = ({ users }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
          <Button variant="primary" onClick={handleShow}>
            Find User
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Find user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FindUserComponent users={users}></FindUserComponent>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    
    export default FindUserModal;
