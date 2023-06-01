import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../../redux/ApiSlice";
import { getFromCart } from "../../../redux/CartSlice";
import { searchProduct } from "../../../redux/SearchSlice";
import IsLoading from "../../../IsLoading";
import { getCat } from "../../../redux/CategorySlice";

function NavBar() {
    const imgUrl =  import.meta.env.BASE_URL
    const data = useSelector((state)=>state.category.data)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCat())
    },[dispatch])
        const loggedIn = localStorage.getItem("role") === "user";
        const navigate = useNavigate()
        const dataCart = useSelector((state)=>state.cart.dataCart)
        const [query, setQuery] = useState('')
        useEffect(() => {
            if(loggedIn){
                dispatch(getFromCart());
            }
          }, [dispatch]);
        const handleLogout = () => {
            try{
                dispatch(logoutUser()).unwrap().then(
                    navigate('/auth/login', { replace: true })
                )
            }catch(e){
                console.log(e)
            }
          };
        
        const handleInput = (setState) => (e) => {
            setState(e.target.value)
            dispatch(searchProduct(query))
        }
 
    return (
            // <div className="front-header fixed top-6 z-50 bg-[#202020] rounded-xl px-7 py-5">
            //     <nav className="flex flex-col md:flex-row justify-between items-center">
            //         {/* <div className="hidden md:block">
            //             <h3 className="text-2xl">Foodify 
            //             <div className="display-content">
            //                 <i className="ml-3 fa-brands fa-facebook-f text-blueClear py-[4px] px-[8px] text-sm border border-blueClear rounded-full mr-2"></i>
            //                 <i class="fa-brands fa-twitter  text-pink py-[4px] px-[7px] text-sm border border-pink rounded-full mr-2"></i>
            //                 <i class="fa-brands fa-instagram  text-green-600 py-[4px] px-[8px] text-sm border border-green-600 rounded-full"></i>
            //             </div>
            //             </h3>
            //             <small className="block mt-1">
            //                 Awesome food and Beverages
            //             </small>
            //         </div> */}

            //         {/* <div className="front-search flex items-center">
            //             <span className="ti-search px-4 py-2 text-2xl"></span>
            //             <input value={query} onChange={handleInput(setQuery)}
            //                 type="search"
            //                 placeholder="Search or scan for items"
            //                 className="flex-1 h-10"
            //             />
            //         </div> */}
                    
            // <div className="mt-10">
            //     <ul className="flex justify-between">
            //     <Link to='/' className="mb-5 cursor-pointer active:p-2 rounded-lg">
            //         <div>
            //             {/* <img
            //                 src={imgUrl + 'images/categories/home.png'} alt='home page'
            //                 className="m-auto w-10 active:w-8"
            //             /> */}
            //             <h3 className="text-base font-normal mt-2 text-white active:text-white active:mt-0">
            //                 Home
            //             </h3>
            //         </div>
            //     </Link>
            //     {Array.isArray(data?.data) ? (
            //         data.data.map((item, idx )=>
            //             <Link key={idx} to={`category/${item.id}`} className="text-center mb-5 cursor-pointer active:p-2 rounded-lg">
            //                 <div>
            //                     {/* <img
            //                         src={imgUrl + `images/categories/${item?.img}`} alt={item?.name}
            //                         className="m-auto w-10 active:w-8"
            //                     /> */}
            //                     <h3 className="text-base font-normal mt-2 text-white active:text-white active:mt-0">
            //                         {item.name}
            //                     </h3>
            //                 </div>
            //             </Link>
            //         )) : <IsLoading />}
            //     </ul>
            //     {/* <img className="w-48 absolute bottom-5" src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"/> */}
            // </div>

            //         <div className="front-nav-links flex items-center">
            //             <div>
            //             {loggedIn ?
            //                 <Link className="btn-link" ><small><span className="ti-user"></span> Profile</small></Link>
            //                 :<Link className="btn-link" to='/auth/register'><small><span className="ti-user"></span> Register</small></Link>
            //             }
            //                 |
            //             {loggedIn ?
            //             <button  onClick={handleLogout} className="btn-link"><small><span className="ti-power-off"></span> Logout</small></button>
            //             :<Link className="btn-link" to='/auth/login'><small><span className="ti-power-off"></span> Login</small></Link>
            //             }
            //             </div>

            //             {loggedIn  && dataCart && Array.isArray(dataCart) && <div>
            //                 <Link className="btn btn-main-gradient py-4" to='/cart'>
            //                     <span className="ti-shopping-cart">{dataCart.length} | Tot: {" "} 
            //                         {dataCart.reduce(
            //                             (sum, item) => sum + item.product.price * item.qtity,
            //                             0 + 4
            //                         )}
            //                     </span>
            //                     <span></span>
            //                 </Link>
            //             </div>}
                        
            //         </div>
            //     </nav>
            // </div>
        <nav
        class="navFront flex w-full flex-wrap md:px-20 items-center justify-between text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <button
            class="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="[&>svg]:w-7">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7">
                <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
            </span>
            </button>

            <div
            class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item>
            <a class="pr-2 text-5xl font-semibold text-pink" href="#">Foodify</a>
            <ul
                class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                data-te-navbar-nav-ref>
                <Link to='/' className="my-4 lg:my-0 lg:pr-2 mx-4">
                     <div>
                        <h3 className="text-xl font-normal mt-2 text-white active:text-white active:mt-0">
                            Home
                         </h3>
                     </div>
                 </Link>
                 {Array.isArray(data?.data) ? (
                    data.data.map((item, idx )=>
                        <Link key={idx} to={`category/${item.id}`} className="my-4 lg:my-0 lg:pr-2 mx-4">
                            <div>
                                <h3 className="text-xl font-normal mt-2 text-white active:text-white active:mt-0">
                                    {item.name}
                                </h3>
                            </div>
                        </Link>
                    )) : <IsLoading />}
            </ul>
            </div>

            <div class="relative flex items-center">
                <div className="frontNavLinks flex items-center">
                    <div>
                    {loggedIn ?
                        <Link className="btn-link text-xl" ><span className="ti-user text-pink"></span> Profile</Link>
                        :<Link className="reg btn-link mr-5 text-xl" to='/auth/register'><span className="ti-user text-pink"></span> Register</Link>
                    }
                        
                    {loggedIn ?
                    <button  onClick={handleLogout} className="btn-link"><span className="ti-power-off text-pink"></span> Logout</button>
                    :<Link className="btn-link text-xl" to='/auth/login'><span className="ti-power-off text-pink"></span> Login</Link>
                    }
                    </div>

                    {loggedIn  && dataCart && Array.isArray(dataCart) &&
                    <div>
                        <Link className="btn btn-main-gradient py-4" to='/cart'>
                            <span className="ti-shopping-cart">{dataCart.length} | Tot: {" "} 
                                {dataCart.reduce(
                                    (sum, item) => sum + item.product.price * item.qtity,
                                    0
                                )}
                            </span>
                            <span></span>
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;
