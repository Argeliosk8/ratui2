import React from "react";
import ActivityTable from "./activityTable";
import Spinner from 'react-bootstrap/Spinner';


export const JobsList = ({jobs})=> {
 
 return (
  <div className="accordion" id="accordionExample">
  {
        jobs ? jobs.map((job, index) => (       
          <div className="accordion-item" id={index}>
              <h2 className="accordion-header" id={"heading" + index}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                  {job.name}
                  {console.log(job._id)}
              </button>
              </h2>
              <div id={"collapse" + index} class="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  <ActivityTable jobid={job._id}></ActivityTable>
              </div>
              </div>
          </div>
        )) : <Spinner animation="border" />
  }
  </div>
      
    )
  }


