import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/contextWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const JobEditPage = ()=> {
  const {job_id} = useParams()
  const { getJobById } = useContext(AppContext)
  const [job, setJob] = useState(null)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  const fetchJob = async(job_id)=>{
    const data = await getJobById(job_id) 
    setJob(data) 
  }

  useEffect(()=>{
      fetchJob(job_id)
      // eslint-disable-next-line
    },[])

    return (
<div className="container w-100 h-100 p-0 m-0 scrollablediv">
  <h1>Welcome to job edits page id: {job_id}</h1>
  <div className="container-fluid">
      {
        job ? (
          <div class="row align-items-start mt-3">
          <h3>{`Title: ${job.name ? job.name : "No Data"}`}</h3>
          <h3>{`Req: ${job.req ? job.req : "No Data"}`}</h3>
          <h3>{`Users: ${job.users ? job.users.join(', ') : "No Data"}`}</h3>
          <h3>{`Project_id: ${job.project_id ? job.project_id : "No Data"}`}</h3>
        </div>
        ) : <>Loading</>
      }
    </div>
    <div className="container-fluid mt-3">
        <Button  variant="outline-secondary" className="me-3" onClick={()=>{navigate(`/projects/`)}}>Go Back</Button>   
    </div>
</div>
      
    )
  }

