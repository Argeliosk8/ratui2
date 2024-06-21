import React from "react";
import LoginForm from "../components/loginForm.js";
import '../styles/loginPage.css';

export const LoginPage = ()=> {
    return (
<div class="container w-100 h-100 p-0">
  <div class="row align-items-center h-100 w-100 m-0">
    <div class="col-md-4 sidebar-left">
    </div>
    <div class="col-md-4 p-0 d-flex justify-content-center">
      <div className="d-flex justify-content-center centerbar">
        <LoginForm></LoginForm>
      </div>
    </div>
    <div class="col-md-4 sidebar-right">
    </div>
  </div>
</div>
      
    )
  }

