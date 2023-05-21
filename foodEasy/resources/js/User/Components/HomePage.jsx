import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { randomProducts } from '../../redux/ProductSlice';
import { addToCart } from '../../redux/CartSlice';
import IsLoading from '../../IsLoading';

function ProductList() {
    const imgUrl =  import.meta.env.BASE_URL
    const loggedIn = localStorage.getItem("role") === "user";
    const error = useSelector((state)=>state.cart.error)
    const randomData = useSelector((state)=>state.product.randomData)
   // console.log(randomData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(randomProducts())
    },[dispatch])
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
        <div className="menu-grid mt-10">
            {randomData && randomData.data && Array.isArray(randomData.data.data) && randomData.data.data.length > 0 ? ( randomData.data.data.map((item,idx)=>
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
                )) : (<tr><td><IsLoading/></td></tr>)
                }
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList