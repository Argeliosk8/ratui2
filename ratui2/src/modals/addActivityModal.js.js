import React, {useState, useContext} from "react";
import { AppContext } from "../context/contextWrapper";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddActModal = () => {
  const [outreach, setOutreach] = useState()
  const [date, setDate] = useState()
  const [rps, setRps] = useState()
  const [sub, setSub] = useState()
  const [hm1, setHm1] = useState()
  const [hm2, setHm2] = useState()
  const [onsite, setOnsite] = useState()
  const [offer, setOffer] = useState()
  const [hire, setHire] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newAct = {
    Date: date,
    Outreach: outreach,
    RPS: rps,
    Submission: sub,
    HM1: hm1,
    HM2: hm2,
    Onsite: onsite,
    Offer: offer,
    Hire: hire
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  //const res = await signUp()
  /*
  if(res) {
    alert({newAct})
    handleClose()
  } else {
    alert("Error try again")
  }
    */
  //alert(newAct.Date)
  for(let key in newAct) {
    console.log(`Key: ${key}, Value: ${newAct[key]}`)
  }

  handleClose()
}

    return(
<>
    <Button className="mb-3" variant="outline-secondary" onClick={handleShow} id="custom-bg-color">
            Add Activity
    </Button> 
    <Modal id="Modal" show={show} onHide={handleClose} centered={true} animation={true} >
        <Modal.Header closeButton id="custom-bg-color">
          <Modal.Title id="whiteText"> Add Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body id="custom-bg-color" >
        <Form>
      <Row className="mb-4">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Date {date}</Form.Label>
          <Form.Control onChange={(e)=>{setDate(e.target.value)}} type="date" placeholder="Select Date" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Outreach: {outreach}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control onChange={(e)=>{setOutreach(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >RPS {rps}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control onChange={(e)=>{setRps(e.target.value)}}  type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Sub {sub}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  onChange={(e)=>{setSub(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >HM1 {hm1}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  onChange={(e)=>{setHm1(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >HM2 {hm2}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control onChange={(e)=>{setHm2(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Onsite {onsite}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  onChange={(e)=>{setOnsite(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Offer {offer}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control onChange={(e)=>{setOffer(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Hire {hire}</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  onChange={(e)=>{setHire(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
    </Form>
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    )
}

export default AddActModal;