import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCatWithProduct } from '../../../../redux/CategorySlice';
import IsLoading from '../../../../IsLoading';
import Swal from 'sweetalert2';
import CartBody from './CartBody';
import { addToCart, getFromCart } from '../../../../redux/CartSlice';

function ProductList() {
  const imgUrl =  import.meta.env.BASE_URL
  const loggedIn = localStorage.getItem("role") === "user";
    const { id } = useParams();
    const CategoryP = useSelector((state)=>state.category.CatWithProduct.data)
    const error = useSelector((state)=>state.cart.error)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCatWithProduct(id))
    },[id, dispatch])
    const handleAddToCart = (id) => {
      if(loggedIn){
        const product_id = {product_id:id}
        dispatch(addToCart(product_id)).then((res) => {
          if(res.type === 'cart/addToCart/fulfilled'){
            Swal.fire('Success', res.payload.message, 'success')
            dispatch(getFromCart());
          }else{
            Swal.fire('Warning', res.payload.error, 'warning')
          }
        });
      }else{
          Swal.fire({
            title: 'You need to log in',
            text: 'Do you want to go to the login page?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/auth/login')
            }
          });
      }
    };
  return (
    <div className="front-main">
    <div className="main-grid">
      <div className="menu-section">
      {CategoryP ? (<h3>{CategoryP.name && CategoryP.name}</h3>): <IsLoading/>}
        <div className="menu-grid">
            {CategoryP?.products?.map((item,idx)=>
                <div key={idx} className="menu-card" style={{backgroundImage: `url(${imgUrl}images/products/${item?.img})`}}>
                    <div>
                    <span className="bg-main-gradient item-price">
                        <span>DH</span> {item?.price}
                    </span>
                    </div>
                    <div>
                    <span className="item-name">{item?.name}</span>
                    </div>

                    <button onClick={() => handleAddToCart(item?.id)}
                    className="btn btn-main-gradient">
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
            <small>0 items in cart</small>
          </div>
              <CartBody loggedIn={loggedIn} dispatch={dispatch}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList