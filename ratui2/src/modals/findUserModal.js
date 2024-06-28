import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FindUserComponent } from '../components/findUserComponent';


const FindUserModal = ({users, setUsers}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="outline-secondary" onClick={handleShow} id="custom-bg-color">
            Add User
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
              <FindUserComponent jobUsers={users} setJobUsers={setUsers} ></FindUserComponent>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    
    export default FindUserModal;
