import React, { Fragment, useState } from 'react'
import Wrapper from './User/Container/Wrapper'
import Admin from './Admin/Container/Admin'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import ModalWindow from './Modal/ModalWindow';
import { ModalOpen } from './redux/ToggleSlice';


function AppCont() {
  const modalOpen = useSelector((state) =>  state.toggle.modalOpen);
  const dispatch = useDispatch()
  const close = () => dispatch(ModalOpen(false));
  return (
    <Fragment>
        {/* <Wrapper /> */}
        <Admin />
        <AnimatePresence mode="wait" initial={false} onExitComplete={()=>null}>
           {modalOpen && <ModalWindow modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
    </Fragment>
  )
}

export default AppCont