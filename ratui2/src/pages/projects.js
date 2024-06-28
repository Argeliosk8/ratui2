import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import CreateProjectModal from "../modals/createProjectModal";
import { ProjectCards } from "../components/projectCards";
import SuccessToast from "../components/successToast";
import TopBanner from "../components/topBanner.js"

export const Projects = ()=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<div className="container w-100 h-100 p-0 m-0 scrollablediv">
  <TopBanner title={"Projects"}></TopBanner>
  <Button  variant="outline-secondary"  onClick={handleShow}>Create Project</Button>
  <CreateProjectModal show={show} handleClose={handleClose}></CreateProjectModal>
  <ProjectCards></ProjectCards>
  <SuccessToast></SuccessToast>
</div>
      
    )
  }

