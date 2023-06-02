import React, { Fragment, useEffect, useState } from "react";
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
    const handleInput = (setState) => (e) => {
        setState(e.target.value)
        dispatch(searchProduct(query))
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
        
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
        
          const [isScrolled, setIsScrolled] = useState(false);
          useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 0) {
                setIsScrolled(true);
              } else {
                setIsScrolled(false);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
        
 
    return (
        // <nav className=></nav>
            <nav
            class={`navFront ${isScrolled ? 'fixed top-0 bg-black flex w-full flex-wrap md:px-20 items-center justify-between text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4' : 'absolute top-[40px] flex w-full flex-wrap md:px-20 items-center justify-between text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4'}`}
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
                <a class="pr-2 text-4xl font-semibold text-pink" href="#">Foodify</a>
                <ul
                    class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <Link to='/' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0">
                                Home
                            </h3>
                        </div>
                    </Link>
                    <a href='#about' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0">
                                About
                            </h3>
                        </div>
                    </a>
                    <a href='#why-us' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0">
                                Why-Us
                            </h3>
                        </div>
                    </a>
                    <a href='#events' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0">
                                Events
                            </h3>
                        </div>
                    </a>
                
                <div class="relative group">
                    <button class="my-4 lg:my-0 lg:pr-2 mx-4">
                        <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0">Menu <i class="bi bi-chevron-down text-pink"></i></h3>
                    </button>
                    <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                        
                        <div class="px-10 pt-1 pb-1 bg-white shadow-lg">
                            {Array.isArray(data?.data) ? (
                                data.data.map((item, idx )=>
                                    <Link key={idx} to={`category/${item.id}`} className="my-2 lg:my-0 lg:pr-2 mx-2">
                                        <div>
                                            <h2 className="text-md font-normal text-black hover:text-pink active:text-white active:mt-0">
                                                {item.name}
                                            </h2>
                                        </div>
                                    </Link>
                            )) : <IsLoading />}
                        </div>

                    </div>
                </div>  


                </ul>
                </div>

                <div class="relative flex items-center">
                    <div className="frontNavLinks flex items-center">
                        <div>
                        {loggedIn ?
                            <Link className="btn-link text-sm mr-5" ><span className="ti-user text-pink p"></span> Profile</Link>
                            :<Link className="reg btn-link mr-5 text-sm" to='/auth/register'><span className="ti-user text-pink"></span> Register</Link>
                        }
                            
                        {loggedIn ?
                        <button  onClick={handleLogout} className="btn-link text-sm mr-5"><span className="ti-power-off text-pink"></span> Logout</button>
                        :<Link className="btn-link text-sm" to='/auth/login mr-5'><span className="ti-power-off text-pink"></span> Login</Link>
                        }
                        </div>

                        {loggedIn  && dataCart && Array.isArray(dataCart) &&
                        <div>
                            <Link className="cartIcon px-4" to='/cart'>
                                <span className="ti-shopping-cart ">{dataCart.length} | Tot: {" "} 
                                    {dataCart.reduce(
                                        (sum, item) => sum + item.product.price * item.qtity,
                                        0
                                    )}
                                </span>
                                <span></span>
                            </Link>
                        </div>}
                    </div>
                    <p className="text-white text-sm pl-10">+212 535 733940</p>
                </div>
            </div>
            </nav>
    );
}

export default NavBar;
