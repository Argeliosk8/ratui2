import React, {useState, useContext} from "react";
import { AppContext } from "../context/contextWrapper";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const CreateProjectModal = ({ show, handleClose }) => {
  const [clientName, setClientName] = useState()
  const [status, setStatus] = useState()
  const navigate = useNavigate()  

  const {createProject, setProjects, projects} = useContext(AppContext)

  const newProject = {
    "client_name": clientName,
    "job_ids": [],
    "status": status,
    "collaborators": [],
    "owner": localStorage.getItem('email')
}

const handleClick = async (e)=>{
  e.preventDefault()
  console.log(newProject)
  const res = await createProject(newProject)
  if(res) {
    const newData = [...projects, newProject]
    setProjects(newData)
    alert("New project created!")
    handleClose()
    navigate('/projects')
  } else {
    alert("Error try again")
  }
}

    return(
<>
    <Modal id="signUpModal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Create Project </Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form className="m-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="john"
                autoFocus
                onChange={(e)=>{setClientName(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select onChange={(e)=>{setStatus(e.target.value)}} >
              <option>Open this select menu</option>
              <option value="Active">Active</option>
              <option value="Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </Form.Select>
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

export default CreateProjectModal;