import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/contextWrapper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FindUserModal from "../modals/findUserModal";
import UsersAccordion from "../components/usersAccordion.js"


export const JobEditPage = ()=> {
  const {job_id} = useParams()
  const { getJobById, updateJob } = useContext(AppContext)
  const [job, setJob] = useState(null)
  const [title, setTitle] = useState(null)
  const [req, setReq] = useState()
  const [users, setUsers] = useState()
  const [creator, setCreator] = useState()
  const [userId, setUserId] = useState()
  const [projectId, setProjectId] = useState()
  const navigate = useNavigate()

  const fetchJob = async(job_id)=>{
    const data = await getJobById(job_id) 
    setJob(data) 
    setTitle(data.name)
    setReq(data.req)
    setUsers(data.users)
    setCreator(data.creator)
    setUserId(data.user_id)
    setProjectId(data.project_id)
  }

  useEffect(()=>{
      fetchJob(job_id)
      // eslint-disable-next-line
    },[])


    const updatedJob = {
      name: title,
      req: req,
      users: users,
      creator: creator,
      user_id: userId,
      project_id: projectId
  }

    const saveChanges = async (e, job_id, updatedJob)=>{
      e.preventDefault()
      const result = await updateJob(job_id, updatedJob)
      console.log(result)
      if(!result.ok) {      
          alert("There was an error with your request")    
          
      } else {
        alert("Your job has been updated")
      }
      
  }

    return (
<div className="container w-100 h-100 p-0 m-0 scrollablediv">
  <h1>Welcome to job edits page id: {job_id}</h1>
  <div className="container-fluid">
      {
        job ? (
          <div class="row align-items-start mt-3">
          <h3>{`Title: ${title? title : "No Data"}`}</h3>
          <h3>{`Req: ${req ? req : "No Data"}`}</h3>
          <h3>{`Users: ${ users.length === 0 ? "No Data" : users.join(', ')}`}</h3>
          <h3>{`Project_id: ${projectId ? projectId : "No Data"}`}</h3>
        </div>
        ) : <>Loading</>
      }
    </div>
    <div className="container-fluid mt-3">
        <Button  variant="outline-secondary" className="me-3" onClick={()=>{navigate(`/projects/`)}}>Go Back</Button>   
        <Button  variant="outline-secondary" className="me-3" onClick={(e)=>{saveChanges(e, job_id, updatedJob)}}>Save</Button>  
    </div>
    <div className="container-fluid mt-3">
        <FindUserModal users={users} setUsers={setUsers}/>
    </div>
    <UsersAccordion users={users}/>
</div>
      
    )
  }

