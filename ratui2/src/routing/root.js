
import { Outlet } from "react-router";
import NavBar from "../components/navBar";
import { Main } from "../pages/loginPage";
import { useState } from "react";

function Root() {
    const [token] = useState(localStorage.getItem('jwt-token'))
    console.log(token)
    return(
        <div>
            {
                token ? (
                <>
                    <NavBar></NavBar>
                    <Outlet />
                </>
                ) : (
                    <Main></Main>
                )
            }
        </div>
    )
}

export default Root;