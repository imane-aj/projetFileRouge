import React, { useState } from 'react'
import Wrapper from './User/Container/Wrapper'
import Admin from './Admin/Container/Admin'
import {AnimatePresence} from 'framer-motion';
import ModalWindow from './Admin/Components/Modal/ModalWindow';


function AppCont() {
  // const modalOpen = useSelector((state)=>state.toggle.modalOpen)
  const [modalOpen,setModalOpen] = useState(false)
  return (
    <div>
        {/* <Wrapper /> */}
        <Admin />
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={()=>null}>
           {modalOpen && <ModalWindow modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
    </div>
  )
}

export default AppCont