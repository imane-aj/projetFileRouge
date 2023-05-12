// import React, { Fragment, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { HandleDataCart, getFromCart, updateCartQtity } from '../../../../redux/CartSlice'

// function CartBody({loggedIn, dispatch}) {
//   const [updatedQtity, setUpdatedQtity] = useState('')
//   const dataCart = useSelector((state)=>state.cart.dataCart)
//   const [subtotal, setSubtotal] = useState('')


//   useEffect(()=>{
//     dispatch(getFromCart())
//   },[dispatch])

//   const handelIncrement = (cart_id)=>{
//     console.log(cart_id)
//     if(loggedIn){
//       const updatedData = dataCart.map((item)=>
//         cart_id === item.id ? {...item, qtity : item.qtity + (item.qtity > 1 ? 1 : 0)} : item)
//         setUpdatedQtity(updatedData.find((item) => item.id === cart_id).qtity)
//         setSubtotal(updatedData.reduce((accumulator, item) => accumulator + item.product.price * item.qtity, 0))
//       updatq(cart_id, "inc")
//     }
//   }
//   const handelDecrement = (cart_id)=>{
//     if(loggedIn){
//       const updatedData = dataCart.map((item)=>
//         cart_id === item.id ? {...item, qtity : item.qtity - (item.qtity < 1 ? 1 : 0)} : item)
//         setUpdatedQtity(updatedData.find((item) => item.id === cart_id).qtity)
//         setSubtotal(updatedData.reduce((accumulator, item) => accumulator + item.product.price * item.qtity, 0))
//       updatq(cart_id, "dec")
//     }
//   }
//   const updatq = (cart_id, scope)=>{
//     dispatch(updateCartQtity({cart_id, scope}))
//   }
  
  
  
//   return (
//     <div className="cart-body">
//       <div className='items-container overflow-auto h-[25vh]'>
//         <div className="cart-items">
//         {Array.isArray(dataCart)  && dataCart.map((item,idx)=>{
//         return (
//           <div key={idx} className="cart-item">
//             <div className="cart-info">
//               <span className="ti-trash"></span>
//               <div>
//                 <h5>{item.product.name}</h5>
//                 <small>{item.product.price} DH</small>
//               </div>
//             </div>
//             <div className="cart-controls">
//               <input type="text" readOnly value={updatedQtity? updatedQtity : item.qtity}  onChange={()=>setUpdatedQtity(item.qtity)}/>
//               <div>
//                 <span className="ti-angle-up" onClick={()=>handelIncrement(item.id)}></span>
//                 <span className="ti-angle-down" onClick={()=>handelDecrement(item.id)}></span>
//               </div>
//             </div>
//           </div>
//         )
//       })}
         
//         </div>
//       </div>
//       <div className="cart-sum">
        
//         <div className="cart-address">
//           <div className="price-flex">
//             <div>
//               <small><span className="ti-location-pin"></span> <b>Address</b></small>
//               <p>address</p>
//             </div>
//             <button className="btn btn-main-gradient"> Change
//             </button>
//           </div>
//         </div>

//         <div>
//           <div className="price-flex">
//             <small>Subtotal</small>
//             <small>{subtotal}</small>
//           </div>
//           <div className="price-flex">
//             <small>Delivery</small>
//             <small onChange={()=>setSubtotal(e.target.Value)}>{subtotal > 0 ? 10: 0}</small>
//           </div>

//           <div className="price-flex">
//             <small>Total</small>
//             <h4>{subtotal > 0 ? subtotal + 10 : 0}</h4>
//           </div>
//         </div>

//         <div className="cart-pay-btn">
//         {loggedIn ? 
//           <button className="btn btn-success button text-center">
//             <span className="ti-credit-card"></span> Pay Now
//           </button>:
//           <Link to='/auth/login' className="btn btn-success button text-center">
//             <span className="ti-power-off"></span> Login
//           </Link>
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartBody