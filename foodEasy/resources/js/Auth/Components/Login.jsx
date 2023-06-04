import React, { Fragment, useEffect, useState }from "react";
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

    const handleLogin = (e, callback) => {
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
              if (typeof callback === 'function') {
                callback();
              }
            }
          });
      };
    const errors = useSelector((state)=>state.api.error)
    console.log(errors)
    return (
        <Fragment>
            <p className="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Sign in to your account
            </p>
            {errors && <span className="text-red-600">{errors}</span>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                    <input type="email" name="email" id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="name@company.com" required=""
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                    <input type="password" name="password" 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                     required="" 
                     onChange={(e)=>setPassword(e.target.value)} value={password}
                     />
                </div>
                <button type="submit" className="w-full m-auto text-white border border-spacing-1 border-pink  bg-pink rounded-lg p-2.5 hover:text-lg hover:bg-[unset]">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to='/auth/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
            </form>
        </Fragment>
    );
}

export default Login;
