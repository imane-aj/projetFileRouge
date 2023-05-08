import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import  { NewUser } from "../../redux/ApiSlice";
import { Link, useNavigate} from 'react-router-dom'

function Register() {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [c_password,setCpassword] = useState('')
    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const user = {name, password, email,c_password} 
        dispatch(NewUser(user)).then((res)=>{
            if(res.type === 'api/NewUser/fulfilled'){
                setName('');setEmail('');setPassword('');setCpassword('');
                navigate('/login')
            }
        })
    }
    const errors = useSelector((state)=>state.api.error)

    return (
        <form>
            <p className="mb-4">Please create your account</p>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Name"
                        onChange={(e)=>setName(e.target.value)} value={name}
                    />
                    {errors && errors.name && <span className="text-red-600">{errors.name}</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                    {errors && errors.email && <span className="text-red-600">{errors.email}</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="text"
                        placeholder="Phone Number"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                    {errors && errors.password && <span className="text-red-600">{errors.password}</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                        type="password"
                        placeholder="Confirme Password"
                        onChange={(e)=>setCpassword(e.target.value)} value={c_password}
                    />
                    {errors.c_password && <span className="text-red-600">{errors.c_password}</span>}
                </div>
            </div>
            <div className="relative z-0 w-full mb-6">
                <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                    type="text"
                    placeholder="Address"
                />
            </div>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
                <button
                    className=" mb-3 btn btn-main-gradient inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                    type="button"
                    onClick={handleRegister}
                >
                    SIGN UP
                </button>
            </div>

            <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2">Have an account?</p>
                <Link
                    to='/auth/login'
                    type="button"
                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-orange-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-orange-600"
                >
                    Login
                </Link>
            </div>
        </form>
    );
}

export default Register;
