import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/contextWrapper";
//import DatePickerComponent from "../components/datePicker";

export const MyTracker = ()=> {
 
  const { getJobs } = useContext(AppContext)
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const fetchJobs = async ()=>{
      const data = await getJobs()
      console.log(data)
      setJobs(data)
    }
    fetchJobs()
  }, [getJobs])
    return (
<div className="container w-100 h-100 p-0">
  <h1>Welcome to my Tracker</h1>
  <div>
      {
        jobs.map((job, index) => (
          <p key={index}>
            {job.name}
          </p>
        ))
      }
  </div>
</div>
      
    )
  }

