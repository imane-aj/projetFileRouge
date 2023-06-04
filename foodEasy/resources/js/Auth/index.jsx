import React, { Fragment } from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../User/Components/Layouts/NavBar";
import Footer from './../User/Components/Layouts/Footer';

function Auth() {
    const location = useLocation()
    const renderForm = () => {
        switch(location.pathname) {
          case '/register':
            return <Register />
          case '/login':
            return <Login />
          default:
            return null
        }
      }
    
    return (
        <Fragment>
            <NavBar />
            <div className="heroLogin h-[140vh] md:h-[122vh]">
            </div>
            <div className='containerAuth w-full px-20 absolute top-44 aos-init aos-animate flex flex-row justify-between' data-aos="fade-left">
                <div className="w-full md:w-auto rounded-lg m-auto shadow border xl:p-0 bg-[#1a1814] border-[#1a1814]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                   <Outlet />
                </div>
            </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Auth;
