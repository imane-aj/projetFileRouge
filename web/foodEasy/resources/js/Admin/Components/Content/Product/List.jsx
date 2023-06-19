import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { DefItem, DefPage } from '../../../../redux/ToggleSlice';
import { deletProduct, getProducts } from './../../../../redux/ProductSlice';
import Swal from 'sweetalert2';
import IsLoading from './../../../../IsLoading';

function List({modalOpen, handleClose, handleOpen,selectedCategory, currentPage}) {
    const data = useSelector((state)=>state.product.data)

    console.log(data.data)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getProducts({currentPage,selectedCategory}))
    },[dispatch, currentPage, selectedCategory])
    console.log(selectedCategory)

    const imgUrl =  import.meta.env.BASE_URL
    const handelDelet = (id)=>{
          Swal.fire({
            title: 'Are you sure ?',
            text: 'Deleting this item cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletProduct(id)).then((res) => {
                  if (res.type === 'product/deletProduct/fulfilled') {
                    Swal.fire('Success', 'This item was deleted succefuly', 'success');
                    console.log(res)
                  }
              })
            }
          });
      }
  return (
    <Fragment>
    {data && data.data ? (
      data.data.map((item, idx )=>(
        <tr key={idx} className="hover:bg-gray-50">
        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img className="h-full w-full rounded-full object-cover object-center" src={imgUrl + `images/products/${item?.img}`} alt={item?.name}/>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold ">
            {item.name}
          </span>
        </td>
        <td className="px-6 py-4">{item.category.name}</td>
        <td className="px-6 py-4">{item.desc}</td>
        <td className="px-6 py-4">{item.price}</td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" className='cursor-pointer' onClick={()=>handelDelet(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-orange-600" x-tooltip="tooltip" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
              </svg>
            </a>
            <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} x-data="{ tooltip: 'Edite' }" href="#" className='cursor-pointer'
            onClick={() => (modalOpen ? handleClose() : handleOpen(), dispatch(DefItem(item)), dispatch(DefPage('editProduct')))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke="currentColor"  className="h-6 w-6 text-green-800" x-tooltip="tooltip">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </motion.button>
          </div>
        </td>
      </tr>
      ))) : (<tr><td><IsLoading/></td></tr>)}
      </Fragment>
  )
}

export default List