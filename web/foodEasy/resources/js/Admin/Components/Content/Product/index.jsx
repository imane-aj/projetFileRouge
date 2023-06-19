import React, { useState, Fragment, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { DefPage, ModalOpen } from "../../../../redux/ToggleSlice";
import List from "./List";
import { getCat } from "../../../../redux/CategorySlice";

function Product() {
    const modalOpen = useSelector((state)=>state.toggle.modalOpen)
    const dispatch = useDispatch()
    const handleClose = () => dispatch(ModalOpen(false));
    const handleOpen = () => dispatch(ModalOpen(true));
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
 
    useEffect(()=>{
        dispatch(getCat())
      },[dispatch])
    const [selectedCategory, setSelectedCategory] = useState('')
    const categories = useSelector((state) => state.category.data);
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
   
    return (
        <div className="absolute md:left-96 md:right-10 md:top-40 left-28 top-44">
            <div className="flex flex-row justify-between">
                <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="save-buttonb btn btn-main-gradient mb-5"
                onClick={() => (modalOpen ? handleClose() : handleOpen(), dispatch(DefPage('addProduct')))}>
                + Add Product
                </motion.button>
                <div className="mb-4">
                    <select value={selectedCategory} onChange={handleCategoryChange} className="py-3 px-5 btn btn-main-gradient active:border-x-white">
                    <option value="" className="text-orange-600">All</option>
                    {Array.isArray(categories?.data) ? (categories?.data.map((category) => (
                        <option key={category.id} value={category.id} className="text-orange-600">
                        {category.name}
                        </option>
                    ))):(<option>No Categories</option>)}
                    </select>
                </div>
            </div>
            <div className="rounded-lg border border-gray-200 shadow-md ">
            <table className="w-full border-collapse overflow-auto bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Picture</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Category</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Description</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">price</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <List modalOpen={modalOpen} handleClose={handleClose} handleOpen={handleOpen} selectedCategory={selectedCategory} currentPage={currentPage}/>
    
            </tbody>
            </table>
            </div>
            <div className="flex flex-row justify-between">
                <button className="py-2 px-7 bg-slate-500 text-white rounded-md mt-5 sm:mb-3"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                >
                 Previous
                </button>
                <button className="py-2 px-7 bg-slate-500 text-white rounded-md mt-5 sm:mb-3" onClick={() => handlePageChange(currentPage + 1)}>
                Next 
                </button>
            </div>
        </div>
    );
}

export default Product;
