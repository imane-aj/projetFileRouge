import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCat } from "../../../redux/CategorySlice";
import { Link } from "react-router-dom";
import IsLoading from "../../../IsLoading";

function SideBar() {
    const imgUrl =  import.meta.env.BASE_URL
    const data = useSelector((state)=>state.category.data)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCat())
    },[dispatch])
    return (
        <div className="front-sidebar w-24 h-screen fixed left-0 top-0 bg-white z-50">
           

            <div className="front-sidemenu mt-10">
                <ul>
                <Link to='/' className="text-center flex justify-center flex-col mb-5 cursor-pointer active:p-2 rounded-lg">
                    <div>
                        <img
                            src={imgUrl + 'images/categories/home.png'} alt='home page'
                            className="m-auto w-10 active:w-8"
                        />
                        <h3 className="text-base font-normal mt-2 text-gray-600 active:text-white active:mt-0">
                            Home
                        </h3>
                    </div>
                </Link>
                {Array.isArray(data?.data) ? (
                    data.data.map((item, idx )=>
                        <Link key={idx} to={`category/${item.id}`} className="text-center flex justify-center flex-col mb-5 cursor-pointer active:p-2 rounded-lg">
                            <div>
                                <img
                                    src={imgUrl + `images/categories/${item?.img}`} alt={item?.name}
                                    className="m-auto w-10 active:w-8"
                                />
                                <h3 className="text-base font-normal mt-2 text-gray-600 active:text-white active:mt-0">
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    )) : <IsLoading />}
                </ul>
                {/* <img className="w-48 absolute bottom-5" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"/> */}
            </div>
            
           
        </div>
    );
}

export default SideBar;
