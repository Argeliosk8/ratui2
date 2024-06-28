import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/contextWrapper";
import ProjectEditForm from "../components/projectEditForm";
import Spinner from 'react-bootstrap/Spinner';
import TopBanner from "../components/topBanner.js"

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
  <TopBanner title={projectData ? `${projectData.client_name}` : "..."} ></TopBanner>
  { projectData ? <ProjectEditForm projectData={projectData} projectId={projectid} projectName = {projectData ? `${projectData.client_name}` : "..."} ></ProjectEditForm> : <Spinner animation="border" />}
</div>      
    )
  }

