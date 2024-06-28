import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { JobsList } from "../components/jobsList";
import AddActModal from "../modals/addActivityModal.js"
import { AppContext } from "../context/contextWrapper";
import TopBanner from "../components/topBanner.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MyTracker = ()=> {
  const [jobs, setJobs] = useState()
  const { getJobs } = useContext(AppContext)  
  const fetchJobs = async ()=>{
    const data = await getJobs()
    console.log(data)
    setJobs(data)
  }
 
  useEffect(()=>{
    fetchJobs()
// eslint-disable-next-line
  },[])

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <Row>
    <Col >
      <TopBanner title={"My Tracker"}></TopBanner>
    </Col>
  </Row>
  <Row>
    <Col xs={8} md={8} lg={8}>
      <AddActModal jobs={jobs} fetchJobs={fetchJobs} setJobs={setJobs}></AddActModal>
    </Col>
  </Row>
  <Row>
    <Col xs={8} md={8} lg={8}>
      <JobsList jobs={jobs} ></JobsList>
    </Col>
  </Row>
</div>
      
    )
  }

