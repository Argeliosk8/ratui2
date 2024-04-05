import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/contextWrapper";
import ActivityTable from "./activityTable";

export const JobsList = ()=> {
 
  const { getJobs, jobs, setJobs } = useContext(AppContext)  

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
  <div className="accordion" id="accordionExample">
  {
        jobs ? jobs.map((job, index) => (       
          <div className="accordion-item">
              <h2 className="accordion-header" id={"heading" + index}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                  {job.name}
              </button>
              </h2>
              <div id={"collapse" + index} class="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  <ActivityTable></ActivityTable>
              </div>
              </div>
          </div>
        )) : <div>Loading...</div> 
  }
  </div>
      
    )
  }


