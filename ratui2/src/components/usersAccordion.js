import React from "react";
import Table from 'react-bootstrap/Table';
//import { Link } from "react-router-dom";


function UsersAccordion({users}) { 


 return (
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
  <h2 className="accordion-header" id={"heading1"}>
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse1"} aria-expanded="false" aria-controls={"collapse1"}>
      Users
  </button>
  </h2>
  <div id={"collapse1"} class="accordion-collapse collapse" aria-labelledby={"heading1"} data-bs-parent="#accordionExample">
  <div className="accordion-body">
      <Table responsive>
          <thead>
              <th>#</th>
              <th>User</th>

          </thead>
        {
            users ? (
                <tbody>
                {
                    users.map((user,i)=>(
                        <tr>
                            <td>{i + 1}</td>
                            <td>{user}</td>
                        </tr>
                    ))
                }
            </tbody>
            ) : (
                <div>
                    <h3>No users added</h3>
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

  export default UsersAccordion

