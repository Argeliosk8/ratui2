import React, {useContext, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../context/contextWrapper";

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
  <h1>{`This is the view for a single project currently displaying job wiht id ${projectid} and with the name ${projectData ? projectData.client_name : 'loading...'}`}</h1>
</div>      
    )
  }

