import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateJobModal = ({id, setJobs, jobs}) => {
  const [jobTitle, setJobTitle] = useState()
  const [req, setReq] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [token] = useState(localStorage.getItem('jwt-token'));
  const uri = process.env.REACT_APP_URI
  const newJob = {
    "name": jobTitle,
    "req": req,
}

  const addJob = async (newJob) => {
    try {
        const resp = await fetch(`${uri}/job/addone/${id}`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
        },
            body: JSON.stringify(newJob)
        })
        if(!resp.ok) console.log("There was an error creating your job")
        const data = await resp.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
  //const {createProject, setProjects, projects, toggleShowToast} = useContext(AppContext)





const handleClick = async (e)=>{
  e.preventDefault()
  console.log(newJob)
  const res = await addJob(newJob)
  
  if(res) {
    newJob._id = res.insertedId
    if(jobs) {
      setJobs(prev => [newJob, ...prev])
    } else {
      setJobs([newJob])
    }
    
    alert("New job created!")
    handleClose()
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
          <Modal.Title id="whiteText"> {id} </Modal.Title>
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