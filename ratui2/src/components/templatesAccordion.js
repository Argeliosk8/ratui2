import React from "react";
import Spinner from 'react-bootstrap/Spinner';



export const TemplatesAccordion = ({templates})=> {
  
 return (
  <div className="accordion" id="accordionExample">
  {
        templates ? templates.map((template, index) => (   
          <div className="accordion-item" id={index}>
              <h2 className="accordion-header" id={"heading" + index}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                  {`${template.title} (${template.project})`}
              </button>
              </h2>
              <div id={"collapse" + index} class="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  {template.content}
              </div>
              </div>
          </div>
        )) : <Spinner animation="border" />
  }
  </div>
  
      
    )
  }


