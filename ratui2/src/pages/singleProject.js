import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/contextWrapper";
import ProjectEditForm from "../components/projectEditForm";
import Spinner from 'react-bootstrap/Spinner';

export const SingleProject = ()=> {
  const { projectid } = useParams();
  const { getSingleProject } = useContext(AppContext)
  const [projectData, setProjectData] = useState()
  
  const fetchProject = async () => {
    const data = await getSingleProject(projectid)
    console.log(data)
    setProjectData(data)
  
  }

  useEffect(()=>{
    fetchProject()
    // eslint-disable-next-line
  },[])

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  { projectData ? <ProjectEditForm projectData={projectData} projectId={projectid}></ProjectEditForm> : <Spinner animation="border" />}
</div>      
    )
  }

