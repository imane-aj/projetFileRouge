import React, { Fragment, useState } from 'react'
import { motion } from 'framer-motion'
import Backdrop from './../BackDrop/index';
import {useSelector } from 'react-redux';
import AddCatForm from '../../Admin/Components/Content/Category/AddCatForm';
import EditCatForm from '../../Admin/Components/Content/Category/EditCatForm';
import AddProductForm from '../../Admin/Components/Content/Product/AddProductForm';
import EditProductForm from '../../Admin/Components/Content/Product/EditProductForm';
import Paypal from '../../User/Components/Content/Components/Paypal';

const dropIn = {
  hidden: {y: '-100vh',},
  visible: {y: '0',opacity: 1,transition: {duration: 0.1,type: 'spring',damping: 25,stiffness: 500,}},
  exit: {y: '100vh',opacity: 0}
}
const ModalWindow = ({ handleClose }) => {
  const pageName = useSelector((state)=>state.toggle.page)
  console.log(pageName)
  const titleConfig = [
    { text: "Edit Category", condition: pageName === "editCat" },
    { text: "Add New Category", condition: pageName === "addCat" },
    { text: "Add New Product", condition: pageName === "addProduct" },
    { text: "Edit Product", condition: pageName === "editProduct" },
    { text: "Paypal payment", condition: pageName === "paypal" },
  ];
  const componentConfig = [
    { component: <AddCatForm handleClose={handleClose}/>, condition: pageName === "addCat" },
    { component: <EditCatForm handleClose={handleClose}/>, condition: pageName === "editCat" },
    { component: <AddProductForm handleClose={handleClose}/>, condition: pageName === "addProduct" },
    { component: <EditProductForm handleClose={handleClose}/>, condition: pageName === "editProduct" },
    { component: <Paypal handleClose={handleClose}/>, condition: pageName === "paypal" },
  ];
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className='modal'
        drag varients={dropIn} initial='hidden' animate='visible' exit='exit'
      >
        <div className="flex flex-row justify-between p-6 space-x-2 border-b border-gray-200 rounded-b">
            {titleConfig.map((config,idx)=>{
              const {condition=true} =config;
              return condition? 
                <h3 key={idx} className="text-xl font-semibold text-gray-700 ">{config.text}</h3>
                :null
            })}
          
          <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        {componentConfig.map((config, idx)=>{
          const {condition=true} = config;
          return condition?(
            <Fragment key={idx}>
              {config.component}
            </Fragment>
          ) : null
        })}
      </motion.div>
    </Backdrop>
  )
}

export default ModalWindow