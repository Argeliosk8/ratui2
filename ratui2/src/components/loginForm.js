import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import loginPic from '../pictures/logoPic.png';
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
        window.location.reload()
        navigate("/upload")
    } else {
        alert("error validating your credentials")
    }
    console.log(result)
    }

    return(
        <div className="container-sm rounded-3 border border-secondary-subtle p-5 bg-info-subtle text-info-emphasis">
            <form >
                <div class="mb-3 d-flex justify-content-center">
                    <div className="d-flex justify-content-center w-25">
                    <img src={loginPic} class="img-fluid" alt="..."/>
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
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1"><p className="fw-lighter">Check me out</p></label>
                </div>
                <div class="mb-3 form-check">
                    <button onClick={loginClick}type="submit" class="btn btn-primary">Login</button>
                    <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
                    <SignUpModal show={show} handleClose={handleClose}/>
                </div>

            </form>
        </div>
        
    )
}

export default LoginForm;