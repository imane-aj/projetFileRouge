import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCatWithProduct } from '../../../../redux/CategorySlice';

function ProductList() {
    const { id } = useParams();
    const products = useSelector((state)=>state.category.CatWithProduct.data)
    // console.log(products.category);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCatWithProduct(id))
    },[id, dispatch])
  return (
    <div className="front-main">
    <div className="main-grid">
      <div className="menu-section">
      {products && (<h3>{products.category && products.category}</h3>)}
        <div className="menu-grid">
            {products?.products?.map((item,idx)=>
                <div className="menu-card" style={{backgroundImage: 'url("assets/img/front/maxresdefault.jpg")'}}>
                    <div>
                    <span className="bg-main-gradient item-price">
                        <span>DH</span> {item?.price}
                    </span>
                    </div>
                    <div>
                    <span className="item-name">{item?.name}</span>
                    </div>

                    <button className="btn btn-main-gradient">
                    Add to cart
                    </button>
                </div>
            )}
        </div>
      </div>
      <div className="cart-section hidden md:block">
        <div className="cart-card">
          <div className="cart-header">
            <h3>New Order</h3>
            <small>3 items in cart</small>
          </div>

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
                

                <button className="btn btn-success">
                  <span className="ti-credit-card"></span> Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList