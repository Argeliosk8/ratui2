import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import SideNavbar from "../components/sideNavBar";
import { LoginPage } from "../pages/loginPage";
import { useState } from "react";

function Root() {
    const [token] = useState(localStorage.getItem('jwt-token'))
    console.log(token)
    return(
        <>
            {
                token ? (
                <div className="row">
                    <div className="col-3">
                        <SideNavbar></SideNavbar>
                    </div>
                    <div className="col-9">
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