import React, { useState, useContext, useEffect } from "react";
import { fetchOpenAi } from "../Utils/openaiServices.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import FullScreenModal from "../modals/fullScreenModal.js"
import TopNavBar from "../components/topNavBar.js"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { TemplatesAccordion } from "../components/templatesAccordion.js";
import { AppContext } from "../context/contextWrapper";
import ReactMarkdown from 'react-markdown';


export const Templates = ()=> {
  const { getTemplatesByUser } = useContext(AppContext)
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState()
  const [jobTitle, setJobTitle] = useState()
  const [website, setWebsite] = useState()
  const [comType, setComType] = useState()
  const [decision, setDesicion] = useState()
  const [adInfo, setAdInfo] = useState()
  const [loading, setLoading] = useState(false)
  const [templates, setTemplates] = useState()

  let systemPrompt = {
    role: "system",
    content: `Generate a writeup to be sent via ${comType} to communicate a candidate that the hiring company decided to ${decision}, please consider company website, job title, and any aditional information provided by the user`
  }

  let userPrompt = {
    role: "user",
    content:  `${jobTitle}, ${website}, ${comType}, ${adInfo ? "," + adInfo : "."}`
  }

    const handleClear = () => {
      setLoading(false)
      setMsg()
      setJobTitle("")
      setWebsite("")
      setComType("")
      setDesicion("")
      setAdInfo("")
    }

    const handleClick = async () => {
      setLoading(true)
      if(jobTitle && website && comType && decision){
        try {
          setLoading(true)
          const result  = await fetchOpenAi(systemPrompt, userPrompt)
            setMsg(`${result}`)
            setShow(true)
            setLoading(false)     
          return result
        } catch (error) {
          setLoading(false)
          setMsg("There was an error try again")
        }
      } else {
        setLoading(false)
        setMsg("The question field is empty, try again!")
      }

    }

    const fetchTemplates = async ()=>{
      const data = await getTemplatesByUser()
      setTemplates(data)
      console.log(templates)
    }

    useEffect(()=>{
      fetchTemplates()
      // eslint-disable-next-line
    },[])

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <TopNavBar title={"Templates"}></TopNavBar>
<div className="flex-wrap">
  <div className="flex-wrap-child mt-3">
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Col xs={10} md={10} lg={10}>
        <FloatingLabel controlId="floatingInput" label="Job Title" className="mb-3">
        <Form.Control value={jobTitle} type="text" placeholder="Job Title" onChange={(e)=>setJobTitle(e.target.value)}/>
        </FloatingLabel>
        </Col>
        <Col xs={10} md={10} lg={10}>
        <FloatingLabel controlId="floatingInput" label="Company Website" className="mb-3">
        <Form.Control value={website} type="text" placeholder="Job Title" onChange={(e)=>setWebsite(e.target.value)}/>
        </FloatingLabel>
        </Col>
        <Col xs={10} md={10} lg={10}>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Method"
          className="mb-3"
        >
          <Form.Select value={comType} onChange={(e)=>setComType(e.target.value)} aria-label="Floating label select example">
            <option value="">Select Communication Method</option>
            <option value="LinkedIn">LinkedIn(InMail)</option>
            <option value="Email">Email</option>
            <option value="SMS">Text (SMS)</option>
          </Form.Select>
        </FloatingLabel>
        </Col>
        <Col xs={10} md={10} lg={10}>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Decision"
          className="mb-3"
        >
          <Form.Select value={decision} onChange={(e)=>setDesicion(e.target.value)} aria-label="Floating label select example">
            <option value="">Select Decision</option>
            <option value="Not move forward with their application">Rejected</option>
            <option value="Move forward to the next step">Moving Forward</option>
            <option value="Make an offer">Offer</option>
          </Form.Select>
        </FloatingLabel>
        </Col>
      
        <Col xs={10} md={10} lg={10}>
        <FloatingLabel controlId="floatingTextarea2" label="Additional Info">
        <Form.Control value={adInfo} as="textarea"  style={{ height: '100px' }}
        onChange={(e)=>setAdInfo(e.target.value)}
        />
      </FloatingLabel>
        </Col>
      </Form.Group>
      <Button variant="outline-secondary" onClick={handleClick} className="me-2">
            Submit
      </Button> 
      <Button variant="outline-secondary" onClick={handleClear}>
            Clear
      </Button>
      <FullScreenModal show={show} setShow={setShow} text={msg}></FullScreenModal>
    </Form>
  </div>
  <div className="flex-wrap-child mt-3">
      <TemplatesAccordion templates={templates}> </TemplatesAccordion>
  </div>
</div>
    <br></br>
  <div>{msg ? <div>
    <ReactMarkdown>{msg}</ReactMarkdown>
    <h2>Thanks,</h2>
    <h2>Argelio Baca</h2>
  </div> : <></>}</div>
  {
    loading === true ? (
      <Spinner className="mt-5"animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    ) : <></>
  }
  
</div>
      
    )
  }

