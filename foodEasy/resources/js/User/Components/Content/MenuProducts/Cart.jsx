import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HandleDataCart, deletCart, getFromCart, updateCartQtity } from '../../../../redux/CartSlice'
import Swal from 'sweetalert2'

function Cart() {
  const dataCart = useSelector((state)=>state.cart.dataCart)
  const [updateData, setUpdateData] = useState([])
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const dispatch = useDispatch()
  const imgUrl =  import.meta.env.BASE_URL
  const loggedIn = localStorage.getItem("role") === "user";
  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);

  useEffect(() => {
    if (dataCart.length > 0) {
      setUpdateData(dataCart);
      const subT = dataCart.reduce((sum, item) => sum + item.product.price * item.qtity, 0);
      setSubtotal(subT);
      setDelivery(4)
    }
  }, [dataCart, subtotal, updateData]);
  
  const handelIncrement = (cart_id)=>{
    if(loggedIn){
        if (loggedIn) {
            const updatedD = dataCart.map((item) =>
              cart_id === item.id ? { ...item, qtity: item.qtity <= 10 ? item.qtity + 1 : item.qtity } : item
            );
            setUpdateData(updatedD);
            if (updatedD.find((item) => item.id === cart_id)?.qtity <= 10) {
              dispatch(updateCartQtity({ cart_id, scope: 'inc' }));
            }
          }
    }
  }
  const handelDecrement = (cart_id)=>{
    if(loggedIn){
        if (loggedIn) {
            const updatedD = dataCart.map((item) =>
              cart_id === item.id ? { ...item, qtity: item.qtity >= 1 ? item.qtity - 1 : item.qtity } : item
            );
            setUpdateData(updatedD);
            if (updatedD.find((item) => item.id === cart_id)?.qtity >= 1) {
              dispatch(updateCartQtity({ cart_id, scope: 'dec' }));
            }
        }
    }
  }

  const HandelDelet = (id) => {
    if(loggedIn){
      dispatch(deletCart(id)).then((res) => {
        if(res.type === 'cart/deletCart/fulfilled'){
          Swal.fire('Success', res.payload.message, 'success')
        }else{
          Swal.fire('Warning', res.payload.error, 'warning')
        }
      });
    }
  }

  return (
    <div className="front-main">
    {updateData && updateData.length > 0 ?
    <div className='grid grid-cols-3 gap-4'>
        <table className="col-span-2 border-collapse overflow-auto bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Picture</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Quantity</th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {Array.isArray(updateData)  ? updateData.map((item, idx )=>(
        <tr key={idx} className="hover:bg-gray-50">
        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img className="h-full w-full rounded-full object-cover object-center" src={imgUrl + `images/products/${item?.product.img}`} alt={item?.name}/>
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            {item.product.name}
          </span>
        </td>
        <td className="px-6 py-4">{item.product.price}</td>
        <td className="px-6 py-4">
        <div className="cart-controls justify-between max-w-max">
              <input type="text" readOnly value={item.qtity}/>
              <div>
                <span className="ti-angle-up" onClick={()=>handelIncrement(item.id)}></span>
                <span className="ti-angle-down" onClick={()=>handelDecrement(item.id)}></span>
              </div>
            </div>
        </td>
        <td className="px-6 py-4 text-center">
            <a x-data="{ tooltip: 'Delete' }" onClick={()=>HandelDelet(item.id)} className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-orange-600" x-tooltip="tooltip" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
              </svg>
            </a>
        </td>
      </tr>
      )) : (<tr><td><IsLoading/></td></tr>)}
            </tbody>
        </table>
        <div className="self-start cart-sum">
        
        <div className="cart-address">
          <div className="price-flex">
            <div>
              <small><span className="ti-location-pin"></span> <b>Address</b></small>
              <p>address</p>
            </div>
            <button className="btn btn-main-gradient"> Change
            </button>
          </div>
        </div>

        <div>
          <div className="price-flex">
            <small>Subtotal</small>
            <small>{subtotal}</small>
          </div>
          <div className="price-flex">
            <small>Delivery</small>
            <small onChange={()=>setSubtotal(e.target.Value)}>{delivery}</small>
          </div>

          <div className="price-flex">
            <small>Total</small>
            <h4> {dataCart && Array.isArray(dataCart) && dataCart.reduce((sum, item) => sum + item.product.price * item.qtity,
                0 + 4)}
            </h4>
          </div>
        </div>

        <div className="cart-pay-btn">
        <Link to={'/checkout'}>
          <button className="btn btn-success button text-center">
            <span className="ti-credit-card"></span> Chekout
          </button>
          </Link>
        </div>
        </div>
      </div>
    : <div> Your cart is empty</div>}
    </div>
  )
}

export default Cart