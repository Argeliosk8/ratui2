import React, {useState, useContext} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/contextWrapper";
import { CollabAccordion } from "./collaboratorsAccordion";
import FindUserModal from "../modals/findUserModal";
import CreateJobModal from "../modals/addJobModal";


const ProjectEditForm = ({projectData, projectId}) => {
    const {updateProject} = useContext(AppContext)
    const [show] = useState(false);
    const [projectName, setProjectName] = useState(projectData.client_name)
    const [projectStatus, setProjectStatus] = useState(projectData.status)
    const [projectOwner, setProjectOwner] = useState(projectData.owner)
    const[collaborators, setCollaborators] = useState(projectData.collaborators)
    const [jobs, setJobs] = useState()
    const statuses = ["Active", "Hold", "Closed"]
    
    const navigate = useNavigate()

    const updatedProject = {
        client_name: projectName,
        job_ids: [],
        status: projectStatus,
        collaborators: collaborators,
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
<div className="container w-100">
    <div className="container-fluid">
        <div class="row align-items-start mt-3">
            <h3>{`Name: ${projectName}`}</h3>
            <h3>{`Status: ${projectStatus}`}</h3>
            <h3>{`Owner: ${projectOwner}`}</h3>
            <h3>{`Collaborators: ${collaborators}`}</h3>
        </div>
    </div>
<div className="flex-wrap">
            <div class="flex-wrap-child mt-3">
                <div class="row align-items-start ">
                    <div class="container-fluid">
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
            </Form>
                    </div>
                </div>
            </div>
            <div class="flex-wrap-child mt-3">
            <div className="mb-3">
            <FindUserModal collaborators={collaborators} show={show} setCollaborators={setCollaborators}></FindUserModal>
             <CollabAccordion  collabs={collaborators} ></CollabAccordion>
            </div>                
            <div>
            <CreateJobModal collaborators={collaborators} show={show} setCollaborators={setCollaborators}></CreateJobModal>
             <CollabAccordion  collabs={collaborators} ></CollabAccordion>
            </div> 
            </div>
            
        </div>
    <div className="container-fluid mt-3">
        <Button  variant="outline-secondary" className="me-3" onClick={()=>{navigate('/projects')}}>Go Back</Button>
        <Button  variant="outline-secondary" onClick={(e)=>{saveChanges(e, updatedProject, projectId)}}>Save</Button>   
    </div>

</div>
        
    )
}

export default ProjectEditForm;