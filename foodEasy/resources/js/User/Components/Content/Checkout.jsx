import React from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
    const dataCart = useSelector((state)=>state.cart.dataCart)
  return (
    <div className="front-main">
    <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-white px-8'>
            <div className="flex flex-row justify-between py-6 space-x-2 border-b border-gray-200 rounded-b">
                <h3 className="text-xl font-semibold text-gray-700 ">Basic information</h3>
            </div>
            <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                            type="text"
                            placeholder="First name"
                        />
                        {/* {errors && errors?.errors?.name && errors.errors.name[0] && (
                        <span className="text-red-600">{errors.errors.name[0]}</span>
                        )} */}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                            type="text"
                            placeholder="Last name"
                        />
                        {/* {errors && errors?.errors?.name && errors.errors.name[0] && (
                        <span className="text-red-600">{errors.errors.name[0]}</span>
                        )} */}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                            type="text"
                            placeholder="Email Address"
                        />
                        {/* {errors && errors?.errors?.name && errors.errors.name[0] && (
                        <span className="text-red-600">{errors.errors.name[0]}</span>
                        )} */}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600"
                            type="text"
                            placeholder="Phone number"
                        />
                        {/* {errors && errors?.errors?.name && errors.errors.name[0] && (
                        <span className="text-red-600">{errors.errors.name[0]}</span>
                        )} */}
                    </div>
                </div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full address</label>
                <textarea id="message" rows="4" className="mb-6 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-600" placeholder="Leave a description..."
                ></textarea>
                {/* {errors && errors?.errors?.desc && errors.errors.desc[0] && (
                <span className="text-red-600">{errors.errors.desc[0]}</span>
                )} */}
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                    <button data-modal-hide="staticModal" type="button" className="btn btn-main-gradient">Place Order</button>
                    <button data-modal-hide="staticModal" type="button" className="btn bg-gray-400 text-white">Pay Online</button>
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
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                            {item.product.name}
                        </span>
                    </td>
                    <td className="px-6 py-4"> {item.product.price}</td>
                    <td className="px-6 py-4"> {item.qtity}</td>
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
  )
}

export default Checkout