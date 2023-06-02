import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { placeOrder, validateOrder } from '../../../redux/CheckoutSlice';
import { useNavigate } from 'react-router-dom';
import { getFromCart } from '../../../redux/CartSlice';
import { DefPage, ModalOpen, PaypalData } from '../../../redux/ToggleSlice';
import Paypal from './Components/Paypal';
import Footer from '../../Components/Layouts/Footer'

function Checkout() {
    const modalOpen = useSelector((state)=>state.toggle.modalOpen)
    const handleClose = () => dispatch(ModalOpen(false));
    const handleOpen = () => dispatch(ModalOpen(true));
    const dataCart = useSelector((state)=>state.cart.dataCart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const submitOrder = (e, payment_mode) =>{
        e.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            address: address,
            phone: phone,
            email: email,
            payment_mode: payment_mode,
            payment_id: ''
        }
        switch (payment_mode) {
            case 'COD':
                dispatch(placeOrder(data)).then((res) => {
                    if(res.type === 'checkout/placeOrder/fulfilled'){
                    Swal.fire('Success', res.payload.message, 'success')
                    dispatch(getFromCart())
                    navigate('/')
                }});
                break;
            case 'razorpay':
                //firstName@ybl
                dispatch(validateOrder(data)).then((res) => {
                    if(res.type === 'checkout/validateOrder/fulfilled'){
                        var options = {
                            "key": "rzp_test_IUuUQNAuBukjUY", // Enter the Key ID generated from the Dashboard
                            "amount": (1*100), 
                            "name": "Foodify", //your business name
                            "description": "Test Transaction",
                            "image": "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp",
                            "handler" : function(response){
                                console.log(response)
                                data.payment_id = response.razorpay_payment_id
                                dispatch(placeOrder(data)).then((res) => {
                                    if(res.type === 'checkout/placeOrder/fulfilled'){
                                    Swal.fire('Success', res.payload.message, 'success')
                                    dispatch(getFromCart())
                                    navigate('/')
                                }});
                            },
                            "prefill": { 
                                "name": data.first_name + data.last_name, 
                                "email": data.email,
                                "contact": data.phone 
                            },
                            "theme": {
                                "color": "#3399cc"
                            }
                        };
                        var rzp = new window.Razorpay(options);
                        rzp.open();
                }});
                break;

                case 'paypal':
                    dispatch(validateOrder(data)).then((res) => {
                        if(res.type === 'checkout/validateOrder/fulfilled'){
                            dispatch(DefPage('paypal'));
                            dispatch(PaypalData(data))
                            handleOpen();
                          
                    }});
                    break;
        
            default:
                break;
        }
    }
    const errors = useSelector((state)=>state.checkout.error)
  return (
    <Fragment>
        <div className="md:px-20 px:10 pt-56 pb-32 bg-[#fffaf3] ">
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-white px-8'>
                <div className="flex flex-row justify-between py-6 space-x-2 border-b border-gray-200 rounded-b">
                    <h3 className="text-xl font-semibold text-gray-700 ">Basic information</h3>
                </div>
                <form>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="text"
                                placeholder="First name"
                            />
                            {errors && errors?.errors?.first_name && errors.errors.first_name[0] && (
                            <span className="text-red-600">{errors.errors.first_name[0]}</span>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={lastName} onChange={(e)=>setLastName(e.target.value)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="text"
                                placeholder="Last name"
                            />
                            {errors && errors?.errors?.last_name && errors.errors.last_name[0] && (
                            <span className="text-red-600">{errors.errors.last_name[0]}</span>
                            )}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={email} onChange={(e)=>setEmail(e.target.value)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="email"
                                placeholder="Email Address"
                            />
                            {errors && errors?.errors?.email && errors.errors.email[0] && (
                            <span className="text-red-600">{errors.errors.email[0]}</span>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input value={phone} onChange={(e)=>setPhone(e.target.value)}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                                type="text"
                                placeholder="Phone number"
                            />
                            {errors && errors?.errors?.phone && errors.errors.phone[0] && (
                            <span className="text-red-600">{errors.errors.phone[0]}</span>
                            )}
                        </div>
                    </div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full address</label>
                    <textarea value={address} onChange={(e)=>setAddress(e.target.value)}
                        id="message" rows="4" className="mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600" placeholder="Full Address..."
                    ></textarea>
                    {errors && errors?.errors?.address && errors.errors.address[0] && (
                    <span className="text-red-600">{errors.errors.address[0]}</span>
                    )}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button onClick={(e)=>submitOrder(e, 'COD')} type="button" className="btn btn-main-gradient">Place Order</button>
                        <button onClick={(e)=>submitOrder(e, 'razorpay')} type="button" className="btn bg-gray-400 text-white">Pay Online</button>
                        <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn bg-blue-500 text-white"
                            onClick={(e) => submitOrder(e, 'paypal')}>
                            Paypal
                        </motion.button>
                    </div>
                </form>
            </div>
            <div className="self-start cart-sum">
            <table className="w-full border-collapse overflow-auto bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">Quantity</th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                <tbody>
                    {dataCart && dataCart.map((item, idx)=>
                        <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs">
                                {item.product.name}
                            </span>
                        </td>
                        <td className="px-6 py-4"> {item.product.price}</td>
                        <td className="px-6 py-4 w-full text-center"> {item.qtity}</td>
                        <td className="px-6 py-4">{item.product.price * item.qtity} </td>
                    </tr>
                    ) }
                    <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-4 font-medium text-gray-900">
                        Total
                    </td>
                    <td className="px-6 py-4">{dataCart && Array.isArray(dataCart) && dataCart.reduce((sum, item) => sum + item.product.price * item.qtity,
                    0 + 4)}</td>
                    </tr>

                </tbody>
            </table>
            </div>
        </div>
        </div>

        <Footer />
    </Fragment>
  )
}

export default Checkout