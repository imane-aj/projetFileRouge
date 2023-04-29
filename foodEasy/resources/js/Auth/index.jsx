import React from "react";
import Register from "./Register";
import Login from "./Login";
import { useLocation } from "react-router-dom";

function Auth() {
    const location = useLocation()
    return (
        <section class="gradient-form h-screen bg-neutral-200">
            <div class="container m-auto h-full py-10 px-32">
                <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800sdfds">
                    <div class="w-full">
                        <div class="block rounded-lg bg-white shadow-lg">
                            <div class="g-0 lg:flex lg:flex-wrap">
                                {/* <!-- Left column container--> */}
                                <div class="px-4 md:px-0 lg:w-6/12">
                                    <div class="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div class="text-center mb-12">
                                            <img
                                                class="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"
                                            />
                                            <span class="text-orange-600 pb-1">
                                                EasyFood
                                            </span>
                                        </div>
                                        {location.pathname === '/register' && <Register />}
                                        {location.pathname === '/login' && <Login />}
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    class="register flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    //   style={{"background": linear-gradient('to right, #ee7724, #d8363a, #dd3675, #b44593')}}
                                >
                                    <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 class="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auth;
