import React from "react";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


export const JobsAccordion = ({jobs})=> { 


 return (
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
  <h2 className="accordion-header" id={"heading1"}>
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse1"} aria-expanded="false" aria-controls={"collapse1"}>
      Jobs
  </button>
  </h2>
  <div id={"collapse1"} class="accordion-collapse collapse" aria-labelledby={"heading1"} data-bs-parent="#accordionExample">
  <div className="accordion-body">
      <Table responsive>
          <thead>
              <th>#</th>
              <th>Job</th>
              <th>Req</th>
              <th>View</th>
          </thead>
        {
            jobs ? (
                <tbody>
                {
                    jobs.map((job,i)=>(
                        <tr>
                            <td>{i + 1}</td>
                            <td>{job.name}</td>
                            <td>{job.req}</td>
                            <td><Link to={`/job/edit/${job._id}`}>Edit</Link></td>
                        </tr>
                    ))
                }
            </tbody>
            ) : (
                <div>
                    <h3>No Jobs Available</h3>
                </div>
            )
        }
      </Table>
  </div>
</div>
  </div>                    
</div>
    )
  }


