import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { randomProducts } from '../../redux/ProductSlice';
import { addToCart } from '../../redux/CartSlice';
import IsLoading from '../../IsLoading';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from "aos";
import "aos/dist/aos.css";

function ProductList() {
    const imgUrl =  import.meta.env.BASE_URL
    const loggedIn = localStorage.getItem("role") === "user";
    const error = useSelector((state)=>state.cart.error)
    const randomData = useSelector((state)=>state.product.randomData)
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
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
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div className="">
    <div className="hero">
       

        {/* <div className='text-center shoose'>
            <h1 className='text-3xl w-full text-center my-16'>Why customers choose us</h1>
            <div className='flex flex-col md:flex-row justify-between border py-5 px-5'>
              <div>
                <img src={imgUrl + 'images/front/healthyF.png'} className='m-auto filter-list' height='100px' width='100px' alt='healthy' />
                <h3 className='icon-natural text-pink my-[revert]'>Only healthy food</h3>
                <p className='w-[80%] m-auto text-sm'>Indulge in the pure flavors of nature with our range of exclusively natural food options</p>
              </div>
              <div>
                <img src={imgUrl + 'images/front/various.png'} className='m-auto' height='100px' width='100px' alt='various' />
                <h3 className='icon-natural text-pink my-[revert]'>Various dishes</h3>
                <p className='w-[80%] m-auto text-sm'>Embark on a culinary journey with our extensive selection of diverse and flavorful dishes.</p>
              </div>
              <div>
                <img src={imgUrl + 'images/front/packaging.png'} className='m-auto' height='90px' width='90px' alt='packaging' />
                <h3 className='icon-natural text-pink my-[revert]'>Handy packaging</h3>
                <p className='w-[80%] m-auto text-sm'>Enjoy the convenience of our carefully crafted handy packaging, ensuring your meals stay fresh and portable for your busy lifestyle.</p>
              </div>
              <div>
                <img src={imgUrl + 'images/front/frying.png'} className='m-auto' height='100px' width='100px' alt='frying' />
                <h3 className='icon-natural text-pink my-[revert]'>No frying</h3>
                <p className='w-[80%] m-auto text-sm'>Savor the goodness of our dishes with our no frying policy, providing you with flavorful and nutritious options that are free from unhealthy oils.</p>
              </div>
            </div>
        </div> */}

        {/* <div>
          <h1 className='text-3xl w-full text-center my-16'>Our Meals</h1>
          <Carousel responsive={responsive}>
            {randomData && randomData.data && Array.isArray(randomData.data.data) && randomData.data.data.length > 0 ? ( randomData.data.data.map((item,idx)=>
              <div key={idx} className="menu-card">
              <div className='divImg'>
                  <img src={imgUrl + `images/products/${item?.img}`} alt={item?.name} />
                </div>
                  <div className='price' style={{right: '4px'}}>
                  <span className="item-price" style={{padding: "2px 7px"}}>
                      <span>DH</span> {item?.price}
                  </span>
                  </div>
                  <div>
                  <span className="item-name">{item?.name}</span>
                  </div>

                  <button onClick={() => handleAddToCart(item?.id)}
                  >
                  Add to cart
                  </button>
              </div>
              )) : (<tr><td><IsLoading/></td></tr>)
            }
          </Carousel>
        </div> */}


    </div>
    <div className='md:px-20'>
      <div className='containerHero absolute top-80 aos-init aos-animate flex flex-row justify-between'>
        <div>
          <h1>Welcome To <span className='text-pink'>Foodify</span></h1>
          <h2>Healthy food for healthy life!</h2>
          <div className="btns mt-8">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
          </div>
        </div>
        <div class="video col-lg-4 d-flex align-items-center justify-content-center position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList