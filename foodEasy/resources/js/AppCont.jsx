import React, { Fragment, useState } from 'react'
import Wrapper from './User/Container/Wrapper'
import Admin from './Admin/Container/Admin'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import ModalWindow from './Modal/ModalWindow';
import { ModalOpen } from './redux/ToggleSlice';
import Auth from './Auth';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function AppCont() {
  const modalOpen = useSelector((state) =>  state.toggle.modalOpen);
  const dispatch = useDispatch()
  const close = () => dispatch(ModalOpen(false));
  return (
    <Fragment>
        {/* <Wrapper /> */}
        {/* <Admin /> */}
        <BrowserRouter>
          <Auth />
          <Routes>
            <Route path='/register' exact element={<Register />} />
            <Route path='/login' exact element={<Login />} />
          </Routes>
        </BrowserRouter>
        
        <AnimatePresence mode="wait" initial={false} onExitComplete={()=>null}>
           {modalOpen && <ModalWindow modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
    </Fragment>
  )
}

export default AppCont

 