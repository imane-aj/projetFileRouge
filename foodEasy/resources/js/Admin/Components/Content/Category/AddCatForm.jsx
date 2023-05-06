import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCat } from '../../../../redux/CategorySlice';
import Swal from 'sweetalert2';

function AddCatForm({handleClose}) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const dispatch = useDispatch();
    const errors = useSelector((state)=>state.category.error)
    const handleNewCat = (e) => {
        e.preventDefault();
        const item = new FormData();
        item.append('name', name);
        item.append('desc', desc);
        item.append('img', imageFile);
    
        dispatch(AddCat(item)).then((res) => {
          if (res.type === 'category/AddCat/fulfilled') {
            handleClose();
            setName('');
            setDesc('');
            setImageFile(null);
            Swal.fire('Success', 'This item was added succefuly', 'success');
          }
        });
      };
  return (
    <Fragment>
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
            {errors && errors?.errors?.name && errors.errors.name[0] && (
              <span className="text-red-600">{errors.errors.name[0]}</span>
            )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                type="file"
                name="imageFile"
                onChange={(e) => setImageFile(e.target.files[0])} 
            />
            {errors && errors?.errors?.img && errors.errors.img[0] && (
              <span className="text-red-600">{errors.errors.img[0]}</span>
            )}
        </div>
    </div>
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea id="message" rows="4" className="mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600" placeholder="Leave a description..."
     onChange={(e)=>setDesc(e.target.value)} value={desc}></textarea>
     {errors && errors?.errors?.desc && errors.errors.desc[0] && (
      <span className="text-red-600">{errors.errors.desc[0]}</span>
    )}
</form>
</div>
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      
          <button data-modal-hide="staticModal" type="button" className="btn btn-main-gradient" onClick={handleNewCat}>+ Add to list</button>
      
          <button data-modal-hide="staticModal" type="button" className="btn bg-gray-400 text-white" onClick={handleClose}>Cancel</button>
        </div>
        </Fragment>
  )
}

export default AddCatForm