import React from "react";
import NavBar from "./Components/Layouts/NavBar";
import SideBar from "./Components/Layouts/SideBar";
import { Outlet } from "react-router-dom";

function User() {
    return (
        <div className="front-wrapper flex">
            <div>
                <SideBar />
            </div>
            <div className="w-contentW">
                <NavBar />
                <Outlet id='9'/>
            </div>
        </div>
    );
}

export default User;
