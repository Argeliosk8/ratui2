
import { Outlet } from "react-router";
import SideNav from "../components/navBar";

function Root() {

    return(
        <div>
            <SideNav></SideNav>
            <Outlet />
        </div>
    )
}

export default Root;