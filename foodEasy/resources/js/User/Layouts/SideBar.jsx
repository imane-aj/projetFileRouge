import React from "react";

function SideBar() {
    return (
        <div className="front-sidebar w-24 h-screen fixed left-0 top-0 bg-white z-50">
            <div className="brand text-center mt-16">
                <h1 className="text-pink">
                    <span className="ti-bolt text-5xl"></span>
                </h1>
            </div>

            <div className="front-sidemenu mt-6">
                <ul>
                    <li className="text-center flex justify-center flex-col mb-5 cursor-pointer active:p-2 rounded-lg">
                        <div>
                            <img
                                src="assets/img/front/dish.svg"
                                alt=""
                                className="m-auto w-10 active:w-8"
                            />
                            <h3 className="text-base font-normal mt-2 text-pink active:text-white active:mt-0">
                                Foods
                            </h3>
                        </div>
                    </li>
                    <li className="text-center flex justify-center flex-col mb-5 cursor-pointer active:p-2 rounded-lg">
                        <div>
                            <img
                                src="assets/img/front/coffee-cup.svg"
                                alt=""
                                className="m-auto w-10 active:w-8"
                            />
                            <h3 className="text-base font-normal mt-2 text-pink active:text-white active:mt-0">
                                Drinks
                            </h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
