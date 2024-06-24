import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { JobsList } from "../components/jobsList";
import AddActModal from "../modals/addActivityModal.js"
import { AppContext } from "../context/contextWrapper";

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
  <h1>Welcome to my Tracker</h1>
  <AddActModal jobs={jobs} fetchJobs={fetchJobs} setJobs={setJobs}></AddActModal>
  <JobsList jobs={jobs} ></JobsList>
</div>
      
    )
  }

