import React from "react";

function Login() {
    return (
        <form>
            <p class="mb-4">Please create your account</p>

            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        id="inline-full-name"
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        id="inline-full-name"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>

            {/* <!--Submit button--> */}
            <div class="mb-12 pb-1 pt-1 text-center">
                <button
                    class=" mb-3 btn btn-main-gradient inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                    type="button"
                >
                    LOGIN
                </button>

                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
            </div>

            {/* <!--Register button--> */}
            <div class="flex items-center justify-between pb-6">
                <p class="mb-0 mr-2">Don't have an account?</p>
                <button
                    type="button"
                    class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-orange-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                >
                    SIGN UP
                </button>
            </div>
        </form>
    );
}

export default Login;
