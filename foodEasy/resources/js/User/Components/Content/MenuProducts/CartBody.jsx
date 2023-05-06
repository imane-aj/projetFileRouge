import React from 'react'
import { Link } from 'react-router-dom'

function CartBody({loggedIn}) {
  return (
    <div className="cart-body">
    <div className='items-container overflow-auto h-[25vh]'>
      <div className="cart-items">
        <div className="cart-item">
          <div className="cart-info">
            <span className="ti-trash"></span>
            <div>
              <h5>Spagheti with bread</h5>
              <small>@ 200</small>
            </div>
          </div>
          <div className="cart-controls">
            <input type="text" readOnly defaultValue="item.qty" />
            <div>
              <span className="ti-angle-up"></span>
              <span className="ti-angle-down"></span>
            </div>
          </div>
        </div>
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
            <small>23</small>
          </div>

          <div className="price-flex">
            <small>Total</small>
            <h4>345</h4>
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