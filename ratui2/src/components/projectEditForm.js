import React, {useState, useContext} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/contextWrapper";
import Table from 'react-bootstrap/Table';


const ProjectEditForm = ({projectData, projectId}) => {
    const [projectName, setProjectName] = useState(projectData.client_name)
    const [projectStatus, setProjectStatus] = useState(projectData.status)
    const [projectOwner, setProjectOwner] = useState(projectData.owner)
    const[collaborators] = useState(["argelio@gmail.com", "rodrigo@gmail.com", "steph@gmail.com", "alex@gmail.com"])
    const statuses = ["Active", "Hold", "Closed"]
    const {updateProject} = useContext(AppContext)
    const navigate = useNavigate()

    const updatedProject = {
        client_name: projectName,
        job_ids: [],
        status: projectStatus,
        collaborators: [],
        owner: projectOwner
    }

    const saveChanges = async (e, updatedProject, projectId)=>{
        e.preventDefault()
        const result = await updateProject(updatedProject, projectId)
        if(!result.ok) {
            alert("There was an error with your request")
        }
        alert("Your project has been updated")
    }


    return(
        <div className="container-fluid">
            <div class="container">
                <div class="row align-items-start mt-3">
                    <h3>{`Name: ${projectName}`}</h3>
                    <h3>{`Status: ${projectStatus}`}</h3>
                    <h3>{`Owner: ${projectOwner}`}</h3>
                    <h3>{`Collaborators: ${collaborators}`}</h3>
                </div>
                <div class="row align-items-start mt-3">
                    <div class="col-6">
                    <Form className="m-3">
                        <Form.Group className="mb-3" controlId="ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type='text'
                            placeholder={projectData.client_name}
                            value={projectName}
                            onChange={(e)=>{setProjectName(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput2">
                            <Form.Label>Status</Form.Label>
                            <Form.Select onChange={(e)=>{setProjectStatus(e.target.value)}} value={projectStatus} >
                                {
                                    statuses.map((status, i)=>(
                                        <option id={i} value={status}>{status}</option>
                                    ))
                                }
                            </Form.Select> 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInput3">
                            <Form.Label>Owner</Form.Label>
                            <Form.Control 
                            type='text'
                            placeholder={projectData.owner}
                            value={projectOwner}
                            onChange={(e)=>{setProjectOwner(e.target.value)}}
                            />
                        </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput5">
                </Form.Group>
                <Button  className="me-3" onClick={()=>{navigate('/projects')}}>Go Back</Button>
                <Button  onClick={(e)=>{saveChanges(e, updatedProject, projectId)}}>Save</Button>                
            </Form>
                    </div>
                    <div class="col-6">
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
                                    collaborators.map((user,i)=>(
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
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProjectEditForm;