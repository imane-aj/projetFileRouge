import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
    const location = useLocation()
    console.log(location.pathname)

    const dashboardImg = import.meta.env.BASE_URL + 'assets/img/admin/dashboard.png';
    const categoryImg = import.meta.env.BASE_URL + 'assets/img/admin/category.png';
    const productImg = import.meta.env.BASE_URL + 'assets/img/admin/product.png';
    const orderImg = import.meta.env.BASE_URL + 'assets/img/admin/orders.png';
    const transImg = import.meta.env.BASE_URL + 'assets/img/admin/transaction.png';
    const customersImg = import.meta.env.BASE_URL + 'assets/img/admin/customers.png';
  return (
    <div className="md:w-80 md:h-[95vh] fixed md:left-8 md:top-6 bg-white z-50 rounded-lg w-24 h-[100vh] left-0 top-0">
           <div className='border-b-1 pb-7'>
           <div className="ml-6 brand mt-10">
                <h1 className="text-pink">
                    <span className='text-4xl md:inline-block'>Foodify</span>
                </h1>
            </div>
           </div>
            
           
            <div className="front-sidemenu mt-8">
                <ul className='ml-2'>

                <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="/admin" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                              ${location.pathname === '/admin'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                
                            <img src={dashboardImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dashboard</p>
                   
                        </Link>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="categories" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                              ${location.pathname === '/admin/categories'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                            <img src={categoryImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Categories</p>
                        </Link>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="products" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                              ${location.pathname === '/admin/products'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                            <img src={productImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Products</p>
                        </Link>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="orders" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                              ${location.pathname === '/admin/orders'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                            <img src={orderImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Orders</p>
                        </Link>
                    </li>

                    {/* <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="customers" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                            ${location.pathname === '/admin/customers'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                            <img src={customersImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Customers</p>
                        </Link>
                    </li> */}

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <Link to="transactions" className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500
                            ${location.pathname === '/admin/transactions'? "bg-gray-200" : "hover:bg-gray-100"} w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden`}>
                            <img src={transImg} className="w-9 text-inherit"/>
                            <p className="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Transactions</p>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
  )
}

export default SideBar