import React from "react";
import TopBanner from "../components/topBanner.js"
export const Contact = ()=> {


    return (
<div className="container w-100 h-100 p-0 scrollablediv">
  <TopBanner title={"Contact"}></TopBanner>
  <div className="container-fluid">
          <div class="row align-items-start mt-3">
          <h3>{`Developed by: Argelio Baca `}</h3>
          <h3>{`Email: argelio.baca@gmail.com`}</h3>
          <h3>{`LInkedIn: https://www.linkedin.com/in/argelio-baca/`}</h3>
          <h3>All rights reserved</h3>
        </div>
    </div>
</div>
      
    )
  }

