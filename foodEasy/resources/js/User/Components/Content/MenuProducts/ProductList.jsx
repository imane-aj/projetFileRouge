import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCatWithProduct } from '../../../../redux/CategorySlice';
import IsLoading from '../../../../IsLoading';
import Swal from 'sweetalert2';
import { addToCart, getFromCart } from '../../../../redux/CartSlice';

function ProductList({name}) {
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
  const productSearched = useSelector((state)=>state.search.searchData)
  return (
    <div className="front-main">
    <div className="main-grid">
      <div className="menu-section">
        <div className="menu-grid mt-10">
        {productSearched && productSearched.data ? (productSearched.data.map((item,idx)=>
          <div key={idx} className="menu-card">
                <div className='divImg'>
                    <img src={imgUrl + `images/products/${item?.img}`} alt={item?.name} />
                  </div>
                    <div className='price'>
                    <span className="item-price">
                        <span>DH</span> {item?.price}
                    </span>
                    </div>
                    <div>
                      <span className="item-name">{item?.name}</span>
                    </div>
                    <p className='desc'>
                      {item?.desc}
                    </p>

                    <button onClick={() => handleAddToCart(item?.id)}
                    >
                    Add to cart
                    </button>
                </div>
        )) : ( 
          CategoryP?.products?.map((item,idx)=>
                <div key={idx} className="menu-card">
                <div className='divImg'>
                    <img src={imgUrl + `images/products/${item?.img}`} alt={item?.name} />
                  </div>
                    <div className='price'>
                    <span className="item-price">
                        <span>DH</span> {item?.price}
                    </span>
                    </div>
                    <div>
                    <span className="item-name">{item?.name}</span>
                    </div>
                    <p className='desc'>
                      {item?.desc}
                    </p>
                    <button onClick={() => handleAddToCart(item?.id)}
                    >
                    Add to cart
                    </button>
                </div>
            ))}
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList