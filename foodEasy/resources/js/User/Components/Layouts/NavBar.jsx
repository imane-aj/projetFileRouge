import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoutUser } from "../../../redux/ApiSlice";

function NavBar() {
        const loggedIn = localStorage.getItem("role") === "user";
        const dispatch =  useDispatch()
        const navigate = useNavigate()
        const handleLogout = () => {
            try{
                dispatch(logoutUser()).unwrap().then(
                    navigate('/auth/login', { replace: true })
                )
            }catch(e){
                console.log(e)
            }
          };
    return (
            <div className="front-header fixed top-6 z-50 bg-white rounded-xl px-7 py-5">
                <nav className="flex flex-col md:flex-row justify-between items-center">
                    <div className="hidden md:block">
                        <h3 className="text-2xl">Foodie</h3>
                        <small className="block mt-1">
                            Awesome food and Beverages
                        </small>
                    </div>

                    <div className="front-search flex items-center">
                        <span className="ti-search px-4 py-2 text-2xl"></span>
                        <input
                            type="search"
                            placeholder="Search or scan for items"
                            className="flex-1 h-10"
                        />
                    </div>

                    <div className="front-nav-links flex items-center">
                        <div>
                        {loggedIn ?
                            <Link className="btn-link" to='/auth/register'><small><span className="ti-user"></span> Profile</small></Link>
                            :<Link className="btn-link" to='/auth/register'><small><span className="ti-user"></span> Register</small></Link>
                        }
                            |
                        {loggedIn ?
                        <button  onClick={handleLogout} className="btn-link"><small><span className="ti-power-off"></span> Logout</small></button>
                        :<Link className="btn-link" to='/auth/login'><small><span className="ti-power-off"></span> Login</small></Link>
                        }
                        </div>

                        {loggedIn && <div>
                            <button className="btn btn-main-gradient">
                                <span className="ti-shopping-cart"></span>
                                <span></span>
                            </button>
                        </div>}
                        
                    </div>
                </nav>
            </div>
    );
}

export default NavBar;
