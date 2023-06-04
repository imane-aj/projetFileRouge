import React, { Fragment } from "react";
import NavBar from "./Components/Layouts/NavBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ModalWindow from "../Modal/ModalWindow";
import { ModalOpen } from "../redux/ToggleSlice";
import { useDispatch, useSelector } from "react-redux";

function User() {
    const modalOpen = useSelector((state) => state.toggle.modalOpen);
    console.log(modalOpen)
    const dispatch = useDispatch();
    const handleClose = () => dispatch(ModalOpen(false));
    return (
        <Fragment>
                <div className="scroll-smooth">
                    <NavBar />
                    <Outlet/>
                </div>
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
}

export default User;
