import React, {useState, useContext} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AppContext } from "../context/contextWrapper";
/*
import { useNavigate } from "react-router-dom";
import ratLogo from '../pictures/rat-logo.png'
import { AppContext } from "../context/contextWrapper";
import Button from 'react-bootstrap/Button';
*/

const ProjectEditForm = ({projectData, projectId}) => {
    const [projectName, setProjectName] = useState(projectData.client_name)
    const [projectStatus, setProjectStatus] = useState(projectData.status)
    const [projectOwner, setProjectOwner] = useState(projectData.owner)
    const statuses = ["Active", "Hold", "Closed"]
    const {updateProject} = useContext(AppContext)
    
    const updatedProject = {
        client_name: projectName,
        job_ids: [],
        status: projectStatus,
        collaborators: []
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
        <div>
            <h3>{`Name: ${projectName}`}</h3>
            <h3>{`Status: ${projectStatus}`}</h3>
            <h3>{`Owner: ${projectOwner}`}</h3>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type='text'
                    placeholder={projectName}
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
                    placeholder={projectOwner}
                    onChange={(e)=>{setProjectOwner(e.target.value)}}
                    />
                </Form.Group>
                <Button  onClick={(e)=>{saveChanges(e, updatedProject, projectId)}}>Save</Button>
            </Form>
        </div>
        
    )
}

export default ProjectEditForm;