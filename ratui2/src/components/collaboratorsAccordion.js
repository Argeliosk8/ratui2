import React from "react";
import Table from 'react-bootstrap/Table';

export const CollabAccordion = ({collabs})=> { 
 return (
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
  <h2 className="accordion-header" id={"heading1"}>
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse1"} aria-expanded="false" aria-controls={"collapse1"}>
      Collaborators
  </button>
  </h2>
  <div id={"collapse1"} class="accordion-collapse collapse" aria-labelledby={"heading1"} data-bs-parent="#accordionExample">
  <div className="accordion-body">
      <Table responsive>
          <thead>
              <th>#</th>
              <th>User</th>
          </thead>
          <tbody>
              {
                  collabs.map((user,i)=>(
                      <tr>
                          <td>{i + 1}</td>
                          <td>{user}</td>
                      </tr>
                  ))
              }
          </tbody>
      </Table>
  </div>
</div>
  </div>                    
</div>
    )
  }


