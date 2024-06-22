import React, {useState, useContext, useEffect} from "react";
import { AppContext } from "../context/contextWrapper";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddActModal = () => {
  const { jobs, findOneActivity } = useContext(AppContext)
  const [job_id, setJob_id] = useState()
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
  const [buttonAction, setButtonAction] = useState("Submit")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newAct = {
    date: date,
    outreach: outreach,
    rps: rps,
    submission: sub,
    hm1: hm1,
    hm2: hm2,
    onsite: onsite,
    offer: offer,
    hire: hire,
    job_id: job_id
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  for(let key in newAct) {
    console.log(`Key: ${key}, Value: ${newAct[key]}`)
  }

  handleClose()
}

useEffect(()=>{
  const fetchActivity = async (query) => {
    const currentAct = await findOneActivity(query)
    if(currentAct){
      setOutreach(currentAct.outreach)
      setRps(currentAct.rps)
      setSub(currentAct.submission)
      setHm1(currentAct.hm1)
      setHm2(currentAct.hm2)
      setOnsite(currentAct.onsite)
      setOffer(currentAct.offer)
      setHire(currentAct.hire)
      setButtonAction("Update")
    }
    return currentAct
  }
  if(date && job_id){
    console.log(`Date Selected: ${date} job_id: ${job_id}`)
    const query = {job_id: job_id, date: date}
    const currentAct = fetchActivity(query)
    console.log(currentAct)
  }
  // eslint-disable-next-line
},[date, job_id])

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
          <Form.Label>Date</Form.Label>
          <Form.Control onChange={(e)=>{setDate(e.target.value)}} type="date" placeholder="Select Date" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Role</Form.Label>
          <Form.Select onChange={(e)=>{setJob_id(e.target.value)}}  defaultValue="Choose...">
            <option>Choose...</option>
            {
              jobs ? jobs.map((job, index) => (
                <option key={index} value={job._id}>{job.name}</option>
              )) : <></>
            }
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Outreach</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={outreach ? outreach : 0} onChange={(e)=>{setOutreach(e.target.value)}} type="number" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >RPS</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={rps ? rps : 0} onChange={(e)=>{setRps(e.target.value)}}  type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Sub</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  value={sub ? sub : 0} onChange={(e)=>{setSub(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >HM1</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={hm1 ? hm1 : 0} onChange={(e)=>{setHm1(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >HM2</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={hm2 ? hm2 : 0} onChange={(e)=>{setHm2(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Onsite</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={onsite ? onsite : 0} onChange={(e)=>{setOnsite(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label >Offer</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control value={offer ? offer : 0} onChange={(e)=>{setOffer(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Row} className="m-0 d-flex align-items-center justify-content-center" controlId="formGridEmail">
          <Col xs={2} md={2} lg={2}>
            <Form.Label>Hire</Form.Label>
          </Col >
          <Col xs={3} md={3} lg={3}>
            <Form.Control  value={hire ? hire : 0} onChange={(e)=>{setHire(e.target.value)}} type="number" placeholder="0" />
          </Col >                    
        </Form.Group>
      </Row>
    </Form>
        </Modal.Body>
        <Modal.Footer id="custom-bg-color" className="">
          <Button variant="primary" onClick={handleSubmit}>
            {buttonAction}
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