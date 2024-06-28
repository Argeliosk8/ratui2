import React, { useState } from "react";
import { fetchOpenAi } from "../tests/openaiServices.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import TopBanner from "../components/topBanner.js"
import FullScreenModal from "../modals/fullScreenModal.js"


export const Templates = ()=> {
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState()
  const [prompt, setPrompt] = useState()
  const [loading, setLoading] = useState(false)

    const handleClear = () => {
      setLoading(false)
      setMsg()
      setPrompt("")
    }

    const handleClick = async () => {
      setLoading(true)
      if(prompt){
        try {
          setLoading(true)
          const result  = await fetchOpenAi(prompt)
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

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <TopBanner title={"Templates"}></TopBanner>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Col xs={10} md={10} lg={10}>
        <Form.Label>Ask a question</Form.Label>
        <Form.Control value={prompt} onChange={(e)=>setPrompt(e.target.value)} as="textarea" rows={3} placeholder="Question here" />
        </Col>

      </Form.Group>
      <Button variant="outline-secondary" onClick={handleClick} className="me-2">
            Submit
      </Button> 
      <Button variant="outline-secondary" onClick={handleClear}>
            Clear
      </Button>
      <FullScreenModal show={show} setShow={setShow} text={msg}></FullScreenModal>
    </Form><br></br>
  <div>{msg ? <div>
    <h3>{msg}</h3><br></br>
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

