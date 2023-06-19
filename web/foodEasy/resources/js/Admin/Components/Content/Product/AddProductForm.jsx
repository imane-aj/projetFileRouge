import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct } from '../../../../redux/ProductSlice';
import Swal from 'sweetalert2';

function AddProductForm({handleClose}) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    const errors = useSelector((state)=>state.product.error)
    const categories = useSelector((state) => state.category.data);
    console.log(name)
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
    const handleNewProduct = (e) => {
        e.preventDefault();
        const item = new FormData();
        item.append('name', name);
        item.append('desc', desc);
        item.append('img', imageFile);
        item.append('price', price);
        item.append('category_id', category);
    
        dispatch(AddProduct(item)).then((res) => {
          if (res.type === 'product/AddProduct/fulfilled') {
            handleClose();
            setName('');
            setDesc('');
            setImageFile(null);
            setPrice('');
            setCategory('');
            Swal.fire('Success', 'This item was added succefuly', 'success');
          }
          if (typeof callback === 'function') {
            callback();
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
    <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                type="text"
                placeholder="Price"
                onChange={(e)=>setPrice(e.target.value)} value={price}
            />
            {errors && errors?.errors?.price && errors.errors.price[0] && (
              <span className="text-red-600">{errors.errors.price[0]}</span>
            )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <select value={category} onChange={handleCategoryChange} className=" bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600">
                <option value="" className="text-orange-600">Choose Category</option>
                {Array.isArray(categories?.data) ? (categories?.data.map((category) => (
                    <option key={category.id} value={category.id} className="text-orange-600">
                    {category.name}
                    </option>
                ))):(<option>No Categories</option>)}
            </select>
            {errors && errors?.errors?.category_id && errors.errors.category_id[0] && (
              <span className="text-red-600">{errors.errors.category_id[0]}</span>
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
      
          <button data-modal-hide="staticModal" type="button" className="btn btn-main-gradient" onClick={handleNewProduct}>+ Add to list</button>
      
          <button data-modal-hide="staticModal" type="button" className="btn bg-gray-400 text-white" onClick={handleClose}>Cancel</button>
        </div>
        </Fragment>
  )
}

export default React.memo(AddProductForm)