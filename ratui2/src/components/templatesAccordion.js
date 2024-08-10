import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { AppContext } from "../context/contextWrapper";
import ShowSavedTemplate from "../modals/showSavedTemplate.js"

export const TemplatesAccordion = ({saved})=> { 
    const [templates, setTemplates] = useState()
    const [templateToShow, setTemplateToShow] = useState()
    const [show, setShow] = useState(false)
    const { getTemplatesByUser } = useContext(AppContext)
    const fetchTemplates = async () => {
        const response = await getTemplatesByUser()
        setTemplates(response)
        console.log(templates)
        return templates
    }

    useEffect(()=>{
    fetchTemplates()
    // eslint-disable-next-line
    },[saved])

    const showModal = (e, template)=>{
        e.preventDefault()
        console.log(template)
        setTemplateToShow(template)
        console.log(templateToShow)
        setShow(true)
    }

 return (
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
  <h2 className="accordion-header" id={"heading1"}>
  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse1"} aria-expanded="false" aria-controls={"collapse1"}>
      Templates
  </button>
  </h2>
  <div id={"collapse1"} class="accordion-collapse collapse" aria-labelledby={"heading1"} data-bs-parent="#accordionExample">
  <div className="accordion-body">
      <Table responsive>
          <thead>
              <th>Title</th>
              <th>Website</th>
              <th>Method</th>
              <th>Reason</th>
              <th>Show</th>
          </thead>
          
            {
                templates ? (
                    <tbody>
                        {
                            templates.map((template)=>(
                            <tr>
                                <td>{template.jobTitle ? template.jobTitle : "null"}</td>
                                <td>{template.website ? <a target="_blank" rel="noreferrer" href={template.website}>Company</a> : "null"}</td>
                                <td>{template.method ? template.method : "null"}</td>
                                <td>{template.reason ? template.reason : "null"}</td>
                                <td><a href="#" onClick={(e)=>showModal(e, template)}>Show</a></td>
                            </tr>
                            ))
                        }
                    </tbody>
                ) : (<></>)
            }
      </Table>
  </div>
</div>
<ShowSavedTemplate show={show} setShow={setShow} templateToShow={templateToShow ? templateToShow : ""}></ShowSavedTemplate>
  </div> 
                     
</div>
    )
  }


