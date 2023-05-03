import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Backdrop from './../BackDrop/index';
import { AddCat } from '../../redux/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';

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
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const dispatch = useDispatch();
  const errors = useSelector((state)=>state.category.error)
console.log(errors?.errors?.desc[0])
  const handleNewCat = (e) => {
    e.preventDefault();
    const item = new FormData();
    item.append('name', name);
    item.append('desc', desc);
    item.append('img', imageFile);

    dispatch(AddCat(item)).then((res) => {
      if (res.type === 'category/AddCat/fulfilled') {
        setName('');
        setDesc('');
        setImageFile(null);
        
      }
    });
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className='modal'
        drag varients={dropIn} initial='hidden' animate='visible' exit='exit'
      >
        <div className="flex flex-row justify-between p-6 space-x-2 border-b border-gray-200 rounded-b">
          <h3 className="text-xl font-semibold text-gray-700 ">
            Add new category
          </h3>
          <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className='flex items-center justify-center h-screen'>
          <form>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>setName(e.target.value)} value={name}
                    />
                    {errors?.errors?.name[0] && <span className="text-red-600">{errors?.errors?.name[0]}</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="file"
                        name="imageFile"
                        onChange={(e) => setImageFile(e.target.files[0])} 
                    />
                   {errors?.errors?.img[0] && <span className="text-red-600">{errors?.errors?.img[0]}</span>}
                </div>
            </div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea id="message" rows="4" className="mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600" placeholder="Leave a description..."
             onChange={(e)=>setDesc(e.target.value)} value={desc}></textarea>
             {errors?.errors?.desc[0] && <span className="text-red-600">{errors?.errors?.desc[0]}</span>}
        </form>
        </div>
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
          <button data-modal-hide="staticModal" type="button" className="btn btn-main-gradient" onClick={handleNewCat}>+ Add to list</button>
          <button data-modal-hide="staticModal" type="button" className="btn bg-gray-400 text-white" onClick={handleClose}>Cancel</button>
        </div>

      </motion.div>
    </Backdrop>
  )
}

export default ModalWindow