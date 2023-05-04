import React from 'react'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { DefPage, ModalOpen } from '../../../../redux/ToggleSlice';
import CatList from './CatList';

function Category() {
  const modalOpen = useSelector((state)=>state.toggle.modalOpen)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(ModalOpen(false));
  const handleOpen = () => dispatch(ModalOpen(true));
 
  return (
    <div className="absolute md:left-96 md:right-10 md:top-40 left-28 top-44">
      <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="save-buttonb btn btn-main-gradient mb-5"
        onClick={() => (modalOpen ? handleClose() : handleOpen(), dispatch(DefPage('addCat')))}>
        + Add Category
      </motion.button>
      <div className="rounded-lg border border-gray-200 shadow-md ">
        <table className="w-full border-collapse overflow-auto bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
        <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Picture</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <CatList modalOpen={modalOpen} handleClose={handleClose} handleOpen={handleOpen}/>

        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category