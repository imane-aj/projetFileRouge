import React from "react";
import NavBar from "../Components/Layouts/NavBar";
import Category from "./Category";

function Content() {
    return (
        <div>
            <NavBar />
            {/* <div className="relative"> */}
            <Category />
            {/* </div> */}
            
        </div>
    );
}

export default Content;
