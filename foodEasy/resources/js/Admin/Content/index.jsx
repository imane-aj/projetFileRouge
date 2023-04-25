import React, {useState} from "react";
import NavBar from "../Components/Layouts/NavBar";
import Category from "./Category";
import { AnimatePresence } from 'framer-motion';
import ModalWindow from './../Components/Modal/ModalWindow/index';

function Content() {
   
    return (
        <div>
            <NavBar />
            {/* <div className="relative"> */}
            <Category/>
            {/* </div> */}
            
        </div>
    );
}

export default Content;
