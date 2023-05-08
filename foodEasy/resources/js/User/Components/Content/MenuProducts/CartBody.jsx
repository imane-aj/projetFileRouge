import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getFromCart } from '../../../../redux/CartSlice'

function CartBody({loggedIn, dispatch}) {
  const dataCart = useSelector((state)=>state.cart.dataCart)
  
  useEffect(()=>{
    dispatch(getFromCart())
  },[dispatch])

  // Calculate subtotal
  const subtotal = dataCart.reduce((acc, item) => {
    return acc + (item.product.price * item.qtity)
  }, 0)
  console.log(subtotal)
  return (
    <div className="cart-body">
      <div className='items-container overflow-auto h-[25vh]'>
        <div className="cart-items">
        {dataCart.map((item,idx)=>{
        return (
          <div key={idx} className="cart-item">
            <div className="cart-info">
              <span className="ti-trash"></span>
              <div>
                <h5>{item.product.name}</h5>
                <small>{item.product.price} DH</small>
              </div>
            </div>
            <div className="cart-controls">
              <input type="text" readOnly value={item.qtity} />
              <div>
                <span className="ti-angle-up"></span>
                <span className="ti-angle-down"></span>
              </div>
            </div>
          </div>
        )
      })}
         
        </div>
      </div>
      <div className="cart-sum">
        
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
            <small>10</small>
          </div>

          <div className="price-flex">
            <small>Total</small>
            <h4>{subtotal + 10}</h4>
          </div>
        </div>

        <div className="cart-pay-btn">
        {loggedIn ? 
          <button className="btn btn-success button text-center">
            <span className="ti-credit-card"></span> Pay Now
          </button>:
          <Link to='/auth/login' className="btn btn-success button text-center">
            <span className="ti-power-off"></span> Login
          </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default CartBody