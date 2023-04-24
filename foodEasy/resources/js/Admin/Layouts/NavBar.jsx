import React from "react";

function NavBar() {
    return (
        <div className="fixed top-6 rounded-xl bg-white px-7 py-5 left-28 right-5 md:left-96 md:right-10">
            <nav className="flex flex-row justify-between items-center">
                <div className="front-search flex items-center">
                    <span className="ti-search px-4 py-2 text-2xl"></span>
                    <input
                        type="search"
                        placeholder="Search or scan for items"
                        className="flex-1 h-10"
                    />
                </div>
                <div className="front-nav-links flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="flex flex-row">
                    <button className="btn-link mx-6">
                        <small>
                            <span className="ti-power-off text-red-600"></span> Logout
                        </small>
                    </button>
                    |
                    <button className="btn-link mx-6">
                                <small>
                                    <span className="ti-user text-green-700"></span> Profile
                                </small>
                            </button>
                            </div>
                    <div className=" flex flex-row justify-between text-left">
                    
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src="https://via.placeholder.com/50"
                                        alt="User Avatar"
                                    />
                        <div className="ml-3 text-gray-500"><p>imane ajroudi <br/><small>Admin</small></p></div>
                    </div> 
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
