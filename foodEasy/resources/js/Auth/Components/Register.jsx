import React, { Fragment, useState } from "react";
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
                navigate('/auth/login')
            }
        })
    }
    const errors = useSelector((state)=>state.api.error)

    return (
        <Fragment>
        <p className="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Create your account
        </p>
        <form className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 md:gap-2">
                <div className="relative z-0 w-full group">
                    <label htmlFor="Name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input type="text" name="Name" id="Name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="Jon"
                    onChange={(e)=>setName(e.target.value)} value={name}
                    />
                    {errors && errors.name && <span className="text-red-600">{errors.name}</span>}
                </div>

                <div className="relative z-0 w-full group">
                    <label htmlFor="Last Name" className="block mb-2 text-sm font-medium text-white">Your Last Name</label>
                    <input type="text" name="Last Name" id="Last Name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="Doe"
                    // onChange={(e)=>setName(e.target.value)} value={name}
                    />
                    {/* {errors && errors.lastName && <span className="text-red-600">{errors.lastName}</span>} */}
                </div>
            </div>

            <div className="grid md:grid-cols-1 md:gap-2">
                <div className="relative z-0 w-full group">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <input type="email" name="email" id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="name@company.com"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    />
                    {errors && errors.email && <span className="text-red-600">{errors.email}</span>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-2">
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your Password</label>
                    <input type="password" name="password" id="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="••••••••"
                    onChange={(e)=>setPassword(e.target.value)} value={password}
                    />
                    {errors && errors.password && <span className="text-red-600">{errors.password}</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="c_password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                    <input type="password" name="c_password" id="c_password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                    placeholder="••••••••"
                    onChange={(e)=>setCpassword(e.target.value)} value={c_password}
                    />
                    {errors && errors.c_password && <span className="text-red-600">{errors.c_password}</span>}
                </div>
            </div>
            <button type="submit" onClick={handleRegister} className="w-full m-auto text-white border border-spacing-1 border-pink  bg-pink rounded-lg p-2.5 hover:text-lg hover:bg-[unset]">Sign in</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                You have already an account? <Link to='/auth/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
            </p>
        </form>
    </Fragment>
    );
}

export default Register;
