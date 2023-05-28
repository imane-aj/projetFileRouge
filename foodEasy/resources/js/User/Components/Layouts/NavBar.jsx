import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../../redux/ApiSlice";
import { getFromCart } from "../../../redux/CartSlice";
import { searchProduct } from "../../../redux/SearchSlice";

function NavBar() {
        const loggedIn = localStorage.getItem("role") === "user";
        const dispatch =  useDispatch()
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
            <div className="front-header fixed top-6 z-50 bg-white rounded-xl px-7 py-5">
                <nav className="flex flex-col md:flex-row justify-between items-center">
                    {/* <div className="hidden md:block">
                        <h3 className="text-2xl">Foodify 
                        <div className="display-content">
                            <i className="ml-3 fa-brands fa-facebook-f text-blueClear py-[4px] px-[8px] text-sm border border-blueClear rounded-full mr-2"></i>
                            <i class="fa-brands fa-twitter  text-pink py-[4px] px-[7px] text-sm border border-pink rounded-full mr-2"></i>
                            <i class="fa-brands fa-instagram  text-green-600 py-[4px] px-[8px] text-sm border border-green-600 rounded-full"></i>
                        </div>
                        </h3>
                        <small className="block mt-1">
                            Awesome food and Beverages
                        </small>
                    </div> */}

                    <div className="front-search flex items-center">
                        <span className="ti-search px-4 py-2 text-2xl"></span>
                        <input value={query} onChange={handleInput(setQuery)}
                            type="search"
                            placeholder="Search or scan for items"
                            className="flex-1 h-10"
                        />
                    </div>

                    <div className="front-nav-links flex items-center">
                        <div>
                        {loggedIn ?
                            <Link className="btn-link" ><small><span className="ti-user"></span> Profile</small></Link>
                            :<Link className="btn-link" to='/auth/register'><small><span className="ti-user"></span> Register</small></Link>
                        }
                            |
                        {loggedIn ?
                        <button  onClick={handleLogout} className="btn-link"><small><span className="ti-power-off"></span> Logout</small></button>
                        :<Link className="btn-link" to='/auth/login'><small><span className="ti-power-off"></span> Login</small></Link>
                        }
                        </div>

                        {loggedIn  && dataCart && Array.isArray(dataCart) && <div>
                            <Link className="btn btn-main-gradient py-4" to='/cart'>
                                <span className="ti-shopping-cart">{dataCart.length} | Tot: {" "} 
                                    {dataCart.reduce(
                                        (sum, item) => sum + item.product.price * item.qtity,
                                        0 + 4
                                    )}
                                </span>
                                <span></span>
                            </Link>
                        </div>}
                        
                    </div>
                </nav>
            </div>
    );
}

export default NavBar;
