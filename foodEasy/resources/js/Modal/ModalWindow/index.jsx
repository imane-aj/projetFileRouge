import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './../BackDrop/index';

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}
const ModalWindow = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className='modal'
        drag varients={dropIn} initial='hidden' animate='visible' exit='exit'
      >
        <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Add new category
          </h3>
          <button type="button" onClick={handleClose} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        {/* <button onClick={handleClose} className='border border-custom-1 rounded-full px-1 mt-5'><i class="fa-regular fa-circle-xmark text-red-600"></i></button> */}
        <div className='flex items-center justify-center h-screen'>
          <form>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input class="py-3 px-2 block w-full text-sm text-gray-900 border focus:border-orange-600 focus:bg-white border-gray-300 rounded bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="text" placeholder='Name' />
              </div>
              <div class="relative z-0 w-full mb-6 group">

                {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label> */}
                <input class=" block w-full text-sm text-gray-900 border border-gray-300 rounded  bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

              </div>
            </div>


            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-orange-600 focus:bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a description..."></textarea>


            {/* <button type="submit" class="btn btn-main-gradient mt-8 w-full">+ Add</button> */}

          </form>
        </div>
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="staticModal" type="button" class="btn btn-main-gradient">+ Add to list</button>
          <button data-modal-hide="staticModal" type="button" class="btn bg-gray-400 text-white" onClick={handleClose}>Cancel</button>
        </div>

      </motion.div>
    </Backdrop>
  )
}

export default ModalWindow