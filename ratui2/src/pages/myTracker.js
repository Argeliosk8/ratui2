import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { JobsList } from "../components/jobsList";
import AddActModal from "../modals/addActivityModal.js"
import { AppContext } from "../context/contextWrapper";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNavBar from "../components/topNavBar.js"
import WeekSelector from "../components/weekSelector.js";
import { getWeekDateRangeAndDays, getCurrentWeek } from "../Utils/utils.js"

export const MyTracker = ()=> {
  const [selectedWeek, setSelectedWeek] = useState(getWeekDateRangeAndDays(getCurrentWeek()));
  const [jobs, setJobs] = useState()
  const { getJobs } = useContext(AppContext)  
  const fetchJobs = async ()=>{
    const data = await getJobs()
    console.log(data)
    setJobs(data)
  }

  const handleWeekChange = (event) => {
    setSelectedWeek(getWeekDateRangeAndDays(event.target.value));
  };
 
  useEffect(()=>{
    fetchJobs()
// eslint-disable-next-line
  },[])
    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <Row>
    <Col >
      <TopNavBar title={"Tracker"}></TopNavBar>
    </Col>
  </Row>
  <Row>
    <Col xs={8} md={8} lg={8}>
      <WeekSelector label="Select a Week" onChange={handleWeekChange}></WeekSelector>
      <p>Selected Week: {selectedWeek.start + " to " + selectedWeek.end}</p>
      <AddActModal jobs={jobs} fetchJobs={fetchJobs} setJobs={setJobs}></AddActModal>
    </Col>
  </Row>
  <Row>
    <Col xs={8} md={8} lg={8}>
      <JobsList jobs={jobs} days={selectedWeek.days}></JobsList>
    </Col>
  </Row>
</div>
      
    )
  }

