import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCat } from "../../../../redux/CategorySlice";
import Swal from "sweetalert2";
import { updateProduct } from "../../../../redux/ProductSlice";

function EditProductForm({ handleClose }) {
    const item = useSelector((state) => state.toggle.item);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const errors = useSelector((state)=>state.product.error)
    const categories = useSelector((state) => state.category.data);
    const dispatch = useDispatch();
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
    useEffect(() => {
        if (item && !name && !desc && !imageFile) {
            setName(item.name);setDesc(item.desc);setImageFile(item.img); setPrice(item.price);setCategory(item.category.name);
        }
    }, [item, name, desc, imageFile]);
    const [imageUrl, setImageUrl] = useState("");
    const imgUr = import.meta.env.BASE_URL || "";

    useEffect(() => {
        if (item && item.img) {
            setImageUrl(`${imgUr}images/categories/${item.img}`);
        }
    }, [item, imgUr]);

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };
    const handleEdit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", name);
        formData.append("desc", desc);
        formData.append("price", price);
        formData.append('category_id', category);
        if (imageFile) {
            formData.append("img", imageFile);
        } else {
            formData.append("img", item.img);
        }
        dispatch(updateProduct({ id: item.id, formData })).then((res) => {
            if (res.type === "product/updateProduct/fulfilled") {
                setName("");
                setDesc("");
                setImageFile(null);
                handleClose();
                Swal.fire(
                    "Success",
                    "This item was updated succefuly",
                    "success"
                );
            }
        });
    };

    const imgUrl = import.meta.env.BASE_URL;
    return (
        <Fragment>
            <div className="flex items-center justify-center h-screen">
                <form encType="multipart/form-data">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            {errors && errors?.errors?.name &&
                                errors?.errors?.name[0] && (
                                    <span className="text-red-600">
                                        {errors?.errors?.name[0]}
                                    </span>
                                )}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="file"
                                name="imageFile"
                                onChange={handleImageChange}
                            />
                            {errors && errors?.errors?.img && errors?.errors?.img[0] && (
                                <span className="text-red-600">
                                    {errors?.errors?.img[0]}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="text"
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />
                            {errors &&
                                errors?.errors?.price &&
                                errors.errors.price[0] && (
                                    <span className="text-red-600">
                                        {errors.errors.name[0]}
                                    </span>
                                )}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select
                                value={category}
                                onChange={handleCategoryChange}
                                className=" bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                            >
                                <option value="" className="text-orange-600">
                                    
                                </option>
                                {Array.isArray(categories?.data) ? (
                                    categories?.data.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                            className="text-orange-600"
                                        >
                                            {category.name}
                                        </option>
                                    ))
                                ) : (
                                    <option>No Categories</option>
                                )}
                            </select>
                            {errors &&
                                errors?.errors?.category_id &&
                                errors.errors.category_id[0] && (
                                    <span className="text-red-600">
                                        {errors.errors.category_id[0]}
                                    </span>
                                )}
                        </div>
                    </div>
                    <img
                        src={imgUrl + `images/categories/${item?.img}`}
                        width="200px"
                    />
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Description
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        name="desc"
                        className="mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        placeholder="Leave a description..."
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    ></textarea>
                    {errors && errors?.errors?.desc && errors?.errors?.desc[0] && (
                        <span className="text-red-600">
                            {errors?.errors?.desc[0]}
                        </span>
                    )}
                </form>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                    data-modal-hide="staticModal"
                    type="button"
                    className="btn btn-main-gradient"
                    onClick={handleEdit}
                >
                    Edit
                </button>

                <button
                    data-modal-hide="staticModal"
                    type="button"
                    className="btn bg-gray-400 text-white"
                    onClick={handleClose}
                >
                    Cancel
                </button>
            </div>
        </Fragment>
    );
}

export default EditProductForm;
