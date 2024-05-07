import React, {useState, useContext} from "react";
import { AppContext } from "../context/contextWrapper";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const CreateJobModal = () => {
  const [jobTitle, setJobTitle] = useState()
  const [req, setReq] = useState()
  const navigate = useNavigate()  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {createProject, setProjects, projects, toggleShowToast} = useContext(AppContext)

  const newJob = {
    "job_title": jobTitle,
    "req": req,
}

const handleClick = async (e)=>{
  e.preventDefault()
  console.log(newJob)
  const res = await createProject(newJob)
  
  if(res) {
    newJob._id = res.insertedId
    const newData = [...projects, newJob]
    setProjects(newData)
    alert("New project created!")
    handleClose()
    navigate('/projects')
    toggleShowToast()
  } else {
    alert("Error try again")
  }
}

    return(
<>
    <Button className="mb-3" variant="outline-secondary" onClick={handleShow} id="custom-bg-color">
            Add Job
    </Button> 
    <Modal id="Modal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Create Job </Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form className="m-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="john"
                autoFocus
                onChange={(e)=>{setJobTitle(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Requisition</Form.Label>
              <Form.Control
                type="text"
                placeholder="Req number"
                autoFocus
                onChange={(e)=>{setReq(e.target.value)}}  
              />
            </Form.Group>
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

export default CreateJobModal;