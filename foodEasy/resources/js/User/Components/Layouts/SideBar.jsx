import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCat } from "../../../redux/CategorySlice";

function SideBar() {
    const imgUrl =  import.meta.env.BASE_URL
    const data = useSelector((state)=>state.category.data)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCat())
    },[dispatch])
    return (
        <div className="front-sidebar w-24 h-screen fixed left-0 top-0 bg-white z-50">
            <div className="brand text-center mt-1">
                <img className="mx-auto w-48" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"/>
                <span className="text-orange-600 pb-1">EasyFood</span>
            </div>

            <div className="front-sidemenu mt-14">
                <ul>
                {Array.isArray(data?.data) ? (
                    data.data.map((item, idx )=>
                        <li key={idx} className="text-center flex justify-center flex-col mb-5 cursor-pointer active:p-2 rounded-lg">
                            <div>
                                <img
                                    src={imgUrl + `images/categories/${item?.img}`} alt={item?.name}
                                    className="m-auto w-10 active:w-8"
                                />
                                <h3 className="text-base font-normal mt-2 text-pink active:text-white active:mt-0">
                                    {item.name}
                                </h3>
                            </div>
                        </li>
                    )) : (<p>isLoding</p>)}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
