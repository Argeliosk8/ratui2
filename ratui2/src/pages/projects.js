import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import CreateProjectModal from "../modals/createProjectModal";
import { ProjectCards } from "../components/projectCards";
import SuccessToast from "../components/successToast";
import TopNavBar from "../components/topNavBar.js"

export const Projects = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<div className="container w-100 h-100 p-0 m-0 scrollablediv">
  <TopNavBar title={"Projects"}></TopNavBar>
  <Button  variant="outline-secondary"  onClick={handleShow}>Create Project</Button>
  <CreateProjectModal show={show} handleClose={handleClose}></CreateProjectModal>
  <ProjectCards></ProjectCards>
  <SuccessToast></SuccessToast>
</div>
      
    )
  }

