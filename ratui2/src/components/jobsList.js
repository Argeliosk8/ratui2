import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/contextWrapper";
//import DatePickerComponent from "../components/datePicker";

export const JobsList = ()=> {
 
  const { getJobs } = useContext(AppContext)
  const [jobs, setJobs] = useState([])

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
  <div>
  {
        jobs ? jobs.map((job, index) => (
          <p key={index}>
            {job.name}
          </p>
        )) : <div>Loading...</div> 
  }
  </div>
      
    )
  }


