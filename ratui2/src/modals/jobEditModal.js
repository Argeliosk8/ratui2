import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FindUserModal from "./findUserModal";

const JobEditModal = ({job}) => {
  const [jobTitle, setJobTitle] = useState(job.name)
  const [req, setReq] = useState(job.req)
  const [owner, setOwner] = useState(job.creator)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [token] = useState(localStorage.getItem('jwt-token'));
  const uri = process.env.REACT_APP_URI
  const newJob = {
    "name": jobTitle,
    "req": req,
}

const handleClick = async (e)=>{
  e.preventDefault()

}

    return(
<>
    <Button className="mb-3" variant="outline-secondary" onClick={handleShow} id="custom-bg-color">
            Edit
    </Button> 
    <Modal id="Modal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Update</Modal.Title>
          <Modal.Title id="whiteText"> {job.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form className="m-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder={job.name}
                autoFocus
                onChange={(e)=>{setJobTitle(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Requisition</Form.Label>
              <Form.Control
                type="text"
                placeholder={job.req}
                autoFocus
                onChange={(e)=>{setReq(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder={job.creator}
                autoFocus
                onChange={(e)=>{setOwner(e.target.value)}}  
              />
            </Form.Group>
            <FindUserModal />
          </Form>
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    )
}

export default JobEditModal;