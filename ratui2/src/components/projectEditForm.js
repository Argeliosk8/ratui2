import React, {useState, useContext} from "react";
/*
import { useNavigate } from "react-router-dom";
import ratLogo from '../pictures/rat-logo.png'
import { AppContext } from "../context/contextWrapper";
import Button from 'react-bootstrap/Button';
*/

const ProjectEditForm = ({projectData}) => {
    const [projectName, setProjectName] = useState(projectData.client_name)
    const [projectStatus, setProjectStatus] = useState(projectData.status)
    const [projectOwner, setProjectOwner] = useState(projectData.owner)

    return(
        <div>
            <h3>{`Name: ${projectName}`}</h3>
            <h3>{`Status: ${projectStatus}`}</h3>
            <h3>{`Owner: ${projectOwner}`}</h3>
        </div>
        
    )
}

export default ProjectEditForm;