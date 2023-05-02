import React, { Fragment } from "react";
import SideBar from "./Components/Layouts/SideBar";
import NavBar from "./Components/Layouts/NavBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModalWindow from "../Modal/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { ModalOpen } from "../redux/ToggleSlice";

const Admin = () => {
    const modalOpen = useSelector((state) => state.toggle.modalOpen);
    console.log(modalOpen);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(ModalOpen(false));
    return (
        <Fragment>
            <div className="admin h-screen  w-full"><div><SideBar /></div><div><NavBar /><Outlet /></div></div>
            <AnimatePresence>
                {modalOpen && (
                    <ModalWindow
                        modalOpen={modalOpen}
                        handleClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default Admin;
