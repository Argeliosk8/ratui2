import React, {useState, useContext} from "react";
import { AppContext } from "../context/contextWrapper";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState()
  const [pwd, setPwd] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [role, setRole] = useState()
  const {signUp} = useContext(AppContext)

  const newUser = {
        email: email,
        pwd: pwd,
        status: "Active",
        profile: {
            first_name: firstName,
            last_name: lastName,
            role: role,
            reqs: [],
            reports: []
        },
        candidates: []
}

const handleSingUp = async (e)=>{
  e.preventDefault()
  console.log(newUser)
  const res = await signUp(newUser)
  if(res) {
    alert("Successful signup!")
    handleClose()
  } else {
    alert("Error try again")
  }
}

    return(
<>
    <Modal id="Modal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Sign up!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form className="m-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="john"
                autoFocus
                onChange={(e)=>{setFirstName(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="doe"
                autoFocus
                onChange={(e)=>{setLastName(e.target.value)}}  
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label className="fw-lighter">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
                onChange={(e)=>{setPwd(e.target.value)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select onChange={(e)=>{setRole(e.target.value)}} >
              <option>Open this select menu</option>
              <option value="Sourcer">Sourcer</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Manager">Manager</option>
            </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSingUp}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    )
}

export default SignUpModal;