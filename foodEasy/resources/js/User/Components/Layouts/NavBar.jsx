import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../../../redux/ApiSlice";
import { getFromCart } from "../../../redux/CartSlice";
import IsLoading from "../../../IsLoading";
import { getCat, handleSearch } from "../../../redux/CategorySlice";

function NavBar() {
    const imgUrl =  import.meta.env.BASE_URL
    const data = useSelector((state)=>state.category.data)
    const dispatch = useDispatch()
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

          const [activeSection, setActiveSection] = useState('');

          useEffect(() => {
            const handleScroll = () => {
              const sections = document.querySelectorAll('section');
              const scrollPosition = window.scrollY;
        
              sections.forEach((section) => {
                const sectionId = section.getAttribute('id');
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 50;
                const sectionBottom = sectionTop + sectionHeight;
        
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  setActiveSection(sectionId);
                }
              });
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

          //search
          const onChange =(e)=>{
            const query = e.target.value
            dispatch(handleSearch(query))
          }
 
    return (
        // <nav className=></nav>
            <nav
            className={`navFront ${isScrolled ? 'fixed top-0 bg-black flex w-full flex-wrap md:px-20 items-center justify-between text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4' : 'absolute top-[40px] flex w-full flex-wrap md:px-20 items-center justify-between text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4'}`}
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                className="block border-0 bg-transparent px-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent4"
                aria-controls="navbarSupportedContent4"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7">
                    <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd" />
                    </svg>
                </span>
                </button>

                <div
                className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4"
                data-te-collapse-item>
                <Link className="pr-2 text-4xl font-semibold text-pink" to="/">Foodify</Link>
                <ul
                    className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref>
                    <Link to='/' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className={`text-lg font-normal mt-2 text-white ${activeSection == 'about' ? 'text-pink' : 'hover:text-pink'}`}>
                                Home
                            </h3>
                        </div>
                    </Link>
                    <a href='#about' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0 hover:text-pink">
                                About
                            </h3>
                        </div>
                    </a>
                    <a href='#why-us' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0 hover:text-pink">
                                Why-Us
                            </h3>
                        </div>
                    </a>
                    <a href='#events' className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <div>
                            <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0 hover:text-pink">
                                Events
                            </h3>
                        </div>
                    </a>
                
                <div className="relative group">
                    <button className="my-4 lg:my-0 lg:pr-2 mx-4">
                        <h3 className="text-lg font-normal mt-2 text-white active:text-white active:mt-0 hover:text-pink">Menu <i className="bi bi-chevron-down text-pink"></i></h3>
                    </button>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                        
                        <div className="px-10 pt-1 pb-1 bg-white shadow-lg">
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

                <div className="relative flex items-center">
                    <div className="frontNavLinks flex items-center">
                        <div className="front-search flex items-center">
                            <span className="ti-search px-4 py-2 text-2xl text-pink"></span>
                            <input
                                onChange={onChange}
                                type="search"
                                placeholder="Search..."
                                className="flex-1 h-10 bg-transparent focus:px-5 focus:border-pink focus:mr-3 active:border-none"
                            />
                        </div>
                        <div>
                        {loggedIn ?
                            <Link className="btn-link text-base mr-5 hover:text-pink" ><span className="ti-user text-pink"></span> Profile</Link>
                            :<Link className="reg btn-link mr-5 text-base hover:text-pink" to='/auth/register'><span className="ti-user text-pink"></span> Register</Link>
                        }
                            
                        {loggedIn ?
                        <button  onClick={handleLogout} className="btn-link text-base mr-5 hover:text-pink"><span className="ti-power-off text-pink"></span> Logout</button>
                        :<Link className="btn-link text-base hover:text-pink" to='/auth/login'><span className="ti-power-off text-pink"></span> Login</Link>
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
