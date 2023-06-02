import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCatWithProduct } from '../../../../redux/CategorySlice';
import IsLoading from '../../../../IsLoading';
import Swal from 'sweetalert2';
import { addToCart, getFromCart } from '../../../../redux/CartSlice';
import Footer from '../../Layouts/Footer';

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
    <Fragment>
    <section class="px-20 pt-56 pb-32 bg-[#fffaf3]">
        <div className="grid grid-cols-4 gap-2">
        {productSearched && productSearched.data ? (productSearched.data.map((item,idx)=>
          <div key={idx} className="menu-card">
          <div className='divImg'>
              <img src={imgUrl + `images/products/${item?.img}`} alt={item?.name} />
            </div>
            <div className='px-5'>
              <div className='price' style={{right: '13px', top:'48px'}}>
              <span className="item-price text-lg bg-pink text-white" style={{padding: "5px 18px"}}>
                   {item?.price} <span>DH</span>
              </span>
              </div>
              <div>
              <span className="item-name w-full">{item?.name}</span>
              </div>
              <p className='text-sm pt-4'>{item?.desc}</p>

              <button onClick={() => handleAddToCart(item?.id)}
              >
              Add to cart
              </button>
              </div>
          </div>
        )) : ( 
          CategoryP?.products?.map((item,idx)=>
          <div key={idx} className="menu-card">
          <div className='divImg'>
              <img src={imgUrl + `images/products/${item?.img}`} alt={item?.name} />
            </div>
            <div className='px-5'>
              <div className='price' style={{right: '13px', top:'48px'}}>
              <span className="item-price text-lg bg-pink text-white" style={{padding: "5px 18px"}}>
                   {item?.price} <span>DH</span>
              </span>
              </div>
              <div>
              <span className="item-name w-full">{item?.name}</span>
              </div>
              <p className='text-sm pt-4'>{item?.desc}</p>

              <button onClick={() => handleAddToCart(item?.id)} className='hover:bg-[unset] hover:text-pink'
              > 
              Add to cart
              </button>
              </div>
          </div>
            ))}
           
        </div>
  </section>
  <Footer />
  </Fragment>
  )
}

export default ProductList