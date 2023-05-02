import React from "react";
import NavBar from "./Components/Layouts/NavBar";
import SideBar from "./Components/Layouts/SideBar";
import Content from "./Components/Home/index.jsx";
import { Outlet } from "react-router-dom";

function User() {
    return (
        <div className="front-wrapper flex">
            <div>
                <SideBar />
            </div>
            <div className="w-contentW">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default User;
