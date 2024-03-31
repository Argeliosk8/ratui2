import React, { useState, useEffect } from "react";
import { AppContext } from "../context/contextWrapper";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function DropdownButtonNav() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [buttonContent, setButtonContent] = useState("")
    const { logout } = useContext(AppContext)
    const navigate = useNavigate()
    const logoutClick = (e)=> {
        e.preventDefault()
        logout()
        navigate('/')
    }

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => {
        if (screenWidth > 768) {
            setButtonContent(localStorage.getItem('email'));
        } else {
            setButtonContent('');
        }
      }, [screenWidth]);

  return (
    <>
        <div class="container-fluid btn-group dropup w-100">
            <div class="dropdown me-1 w-100">
                <button type="button" class="btn btn-secondary dropdown-toggle w-100 m-0 p-0" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                {buttonContent}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <li><p class="dropdown-item" onClick={logoutClick}>logout</p></li>
                <li><p class="dropdown-item" >Another action</p></li>
                <li><p class="dropdown-item" >Something else here</p></li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default DropdownButtonNav;