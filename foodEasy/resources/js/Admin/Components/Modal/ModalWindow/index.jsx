import React from 'react'
import {motion} from 'framer-motion'
import Backdrop from '../BackDrop'

const dropIn = {
    hidden:{
        y:'-100vh',
    },
    visible:{
        y:'0',
        opacity:1,
        transition:{
            duration:0.1,
            type:'spring',
            damping:25,
            stiffness:500,
        }
    },
    exit:{
        y:'100vh',
        opacity:0
    }
}
const ModalWindow = ({handleClose, text}) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div onClick={(e)=>e.stopPropagation()} className='modal'
          drag varients={dropIn} initial='hidden' animate='visible' exit='exit'
        >
            <button onClick={handleClose} className='border border-custom-1 rounded-full px-1 mt-5'><i class="fa-regular fa-circle-xmark"></i></button>
            <p>hellow</p>
        </motion.div>
    </Backdrop>
  )
}

export default ModalWindow