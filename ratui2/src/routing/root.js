import React, {useEffect} from "react";
import { Outlet } from "react-router";
import SideNavbar from "../components/sideNavBar";
import { LoginPage } from "../pages/loginPage";
import { useState } from "react";

function Root() {
    const [token] = useState(localStorage.getItem('jwt-token'))
    const [navCol, setNavCol] = useState()
    const [outletCol, setOutletCol] = useState()
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
            setNavCol(2)
            setOutletCol(10)
        } else {
            setNavCol(3)
            setOutletCol(9)
        }
      }, [screenWidth]);
    
    console.log(token)
    return(
        <>
            {
                token ? (
                <div className="row h-100 w-100 mb-auto">
                    <div className={`col-${navCol} p-0`}>
                        <SideNavbar></SideNavbar>
                    </div>
                    <div className={`col-${outletCol} h-100 justify-content-center`}>
                        <Outlet />
                    </div>
                </div>
                ) : (
                    <LoginPage></LoginPage>
                )
            }
        </>
    )
}

export default Root;