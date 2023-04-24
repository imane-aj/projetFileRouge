import React from 'react'

function SideBar() {
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
                <ul className='ml-6'>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                            <a class="" href="/dashboard/home"><button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg><p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p></button></a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                            <a class="" href="/dashboard/home"><button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg><p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Products</p></button></a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                            <a class="" href="/dashboard/home"><button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg><p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Orders</p></button></a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                            <a class="" href="/dashboard/home"><button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg><p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Customers</p></button></a>
                    </li>

                    <li className="mb-5 cursor-pointer active:p-2 rounded-lg relative">
                            <a class="" href="/dashboard/home"><button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-100 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize relative overflow-hidden" type="button" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit"><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path></svg><p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Transactions</p></button></a>
                    </li>

                </ul>
            </div>
        </div>
  )
}

export default SideBar