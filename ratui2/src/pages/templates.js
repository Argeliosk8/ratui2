import React, { useState } from "react";
import { fetchOpenAi } from "../tests/openaiServices.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import TopBanner from "../components/topBanner.js"

export const Templates = ()=> {
  const [msg, setMsg] = useState()
  const [prompt, setPrompt] = useState()
  const [loading, setLoading] = useState(false)
    const handleClick = async () => {
      setLoading(true)
      const result  = await fetchOpenAi(prompt)
      setLoading(false)
      setMsg(`${result}`)
      return result
    }

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <TopBanner title={"Templates"}></TopBanner>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Col xs={5} md={5} lg={5}>
        <Form.Label>Ask a question</Form.Label>
        <Form.Control onChange={(e)=>setPrompt(e.target.value)} type="text" placeholder="Question here" />
        </Col>

      </Form.Group>
      <Button variant="outline-secondary" onClick={handleClick}>
            Submit
      </Button> 
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

