import React from "react";
import SideBar from "../Layouts/SideBar";
import Content from "./../Content/index";

function Wrapper() {
    return (
        <div className="front-wrapper flex">
            <div>
                <SideBar />
            </div>
            <Content />
        </div>
    );
}

export default Wrapper;
