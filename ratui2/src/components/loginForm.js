import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import ratLogo from '../pictures/rat-logo.png'
import { AppContext } from "../context/contextWrapper";
import SignUpModal from "./signUpModal";
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { login } = useContext(AppContext)
  const navigate = useNavigate()

    const loginClick = async (e) => {
        
    e.preventDefault()
    const result = await login(username, password)
    if (result) {
        navigate("/tracker")
    } else {
        alert("error validating your credentials")
    }
    console.log(result)
    }

    return(
        <div id="loginForm" className="container-sm rounded-3 border border-secondary-subtle p-5 text-info-emphasis">
            <form >
                <div class="mb-5 d-flex justify-content-center">
                    <div className="d-flex justify-content-center w-50">
                    <img src={ratLogo} class="img-fluid" alt="..."/>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"><p className="fw-lighter">Email address</p></label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label"><p className="fw-lighter">Password</p></label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check ">
                    <Button onClick={loginClick} type="button" class="btn btn-primary me-3">Login</Button>
                    <Button  onClick={handleShow}>Sign Up</Button>
                </div>
            </form>
            <SignUpModal show={show} handleClose={handleClose}/>
        </div>
        
    )
}

export default LoginForm;