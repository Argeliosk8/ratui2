import React from "react";
import { JobsList } from "../components/jobsList";
import AddActModal from "../modals/addActivityModal.js"

export const MyTracker = ()=> {

    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <h1>Welcome to my Tracker</h1>
  <AddActModal></AddActModal>
  <JobsList></JobsList>
</div>
      
    )
  }

