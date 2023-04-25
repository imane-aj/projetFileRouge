import React from 'react'

function SideBar() {
        const dashboardImg = import.meta.env.BASE_URL + 'assets/img/admin/dashboard.png';
        const categoryImg = import.meta.env.BASE_URL + 'assets/img/admin/category.png';
        const productImg = import.meta.env.BASE_URL + 'assets/img/admin/product.png';
        const orderImg = import.meta.env.BASE_URL + 'assets/img/admin/orders.png';
        const transImg = import.meta.env.BASE_URL + 'assets/img/admin/transaction.png';
        const customersImg = import.meta.env.BASE_URL + 'assets/img/admin/customers.png';
  return (
    <div className="md:w-80 md:h-[95vh] fixed md:left-8 md:top-6 bg-white z-50 rounded-lg w-24 h-[100vh] left-0 top-0">
           <div className='border-b-1 pb-7'>
           <div className="ml-6 brand  mt-4">
                <h1 className="text-pink">
                    <span className="ti-bolt text-4xl"></span>
                    <span className='hidden md:inline-block'>EasyFood</span>
                </h1>
            </div>
           </div>
            

            <div className="front-sidemenu mt-10">
                <ul className='ml-2'>

                <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={dashboardImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dashboard</p>
                        </button>
                        </a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={categoryImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Categories</p>
                        </button>
                        </a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={productImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Products</p>
                        </button>
                        </a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={orderImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Orders</p>
                        </button>
                        </a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={customersImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Customers</p>
                        </button>
                        </a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                        <a class="" href="/dashboard/home">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" >
                            <img src={transImg} class="w-9 text-inherit"/>
                            <p class="md:block hidden antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Transactions</p>
                        </button>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
  )
}

export default SideBar