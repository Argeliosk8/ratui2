import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import CreateProjectModal from "../modals/createProjectModal";
import { ProjectCards } from "../components/projectCards";
import SuccessToast from "../components/successToast";

export const Projects = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<div className="container w-100 h-100 p-0 m-0 scrollablediv">
  <h1>Welcome to my projects page</h1>
  <Button  onClick={handleShow}>Create Project</Button>
  <CreateProjectModal show={show} handleClose={handleClose}></CreateProjectModal>
  <ProjectCards></ProjectCards>
  <SuccessToast></SuccessToast>
</div>
      
    )
  }

