import React, { useEffect, useState }from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/ApiSlice";
import { Link, useNavigate  } from "react-router-dom";

function Login() {
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLogin = useSelector((state)=>state.api.isLogin)
    const user = useSelector((state)=>state.api.user)

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(loginUser(user))
          .then((res) => {
            if (res.type === 'api/loginUser/fulfilled') {
              setEmail('');
              setPassword('');
              if (res.payload.user.role === 'admin') {
                navigate('/admin');
              } else {
                navigate('/');
              }
            }
          });
      };
    const errors = useSelector((state)=>state.api.error)
    return (
        <form onSubmit={handleLogin}>
            <p className="mb-4">Please create your account</p>
            {errors && <span className="text-red-600">{errors}</span>}
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                </div>
            </div>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
                <button
                    className=" mb-3 btn btn-main-gradient inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                    type="submit"
                >
                    LOGIN
                </button>

                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
            </div>

            {/* <!--Register button--> */}
            <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Don't have an account?</p>
                <Link
                    to='/auth/register'
                    type="button"
                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-orange-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                >
                    SIGN UP
                </Link>
            </div>
        </form>
    );
}

export default Login;
