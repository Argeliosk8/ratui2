import { Outlet } from "react-router";
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
                <div className="row h-100 w-100 mb-auto">
                    <div className="col-3 p-0">
                        <SideNavbar></SideNavbar>
                    </div>
                    <div className="col-9 h-100 justify-content-center">
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