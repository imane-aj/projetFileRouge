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
import Footer from './Layouts/Footer';

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
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const mealsRes = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
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
    </div>
    <div className='px-20'>
      <div className='containerHero absolute top-80 aos-init aos-animate flex flex-row justify-between' data-aos="fade-left">
        <div>
          <h1>Best <span className='text-pink'>Quality</span> Ingredients</h1>
          <h2>A healthy outside Start from healthy inside!</h2>
          <div className="btns mt-8">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
          </div>
        </div>
      </div>
      
    </div>

    <div id="about" class="px-20 about-main pt-24 pb-24 flex flex-col md:flex-row justify-between bg-[#fffaf3]">
                <div class="md:w-[60%] aos-init aos-animate relative"  data-aos="fade-right">
                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                        <h2 class="block-title text-pink"> About Us </h2>
                        <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                        <p className='mb-3 text-lightBroun'>Immersed in the world of cooking through our grandmother's teachings, we have mastered the art of good taste. She passed down her treasured knowledge, enabling us to create healthy and flavorful dishes. Guided by a secret combination of spices and the richness of olive oil, we meticulously craft meals that nourish and delight. Our passion lies in sharing the harmonious blend of health and taste, proving that wholesome food can be an exquisite culinary experience.</p>

                        <p className='mb-3 text-lightBroun'> With every dish we prepared, we paid homage to our grandmother's legacy, infusing each creation with the love and care she had instilled in us. Through our culinary artistry, we shared the joy of wholesome eating with others, inspiring them to embrace a healthier lifestyle without compromising on taste. </p>

                        <p className='text-lightBroun'> Today, our passion continues to evolve as we explore the vast world of culinary possibilities. From vibrant salads bursting </p>
                    </div>
                </div>
                <div class="m-auto hidden md:block aos-init aos-animate relative" data-aos="fade-down">
                    <div class="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                        <div class="about-images">
                            <img class="about-main" src={imgUrl + 'images/front/health-bottle-cut.png'} alt="About Main Image" />
                            {/* <img class="about-inset" src="images/about-inset.jpg" alt="About Inset Image" /> */}
                        </div>
                    </div>
                </div>
    </div>

    <section id="why-us" class="why-us px-20 pt-32 pb-32 bg-[#0c0b09]">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title pb-[40px]">
          <h2>Why Us</h2>
          <p>Why Choose Our Meals</p>
        </div>

        <div class="flex flex-col md:flex-row md:justify-between">

          
            <div class="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="100">
            <span>01</span>
              <h4>Only healthy food</h4>
              <p>Indulge in the pure flavors of nature with our range of exclusively natural food options.</p>
            </div>
        

          
            <div class="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="200">
            <span>02</span>
              <h4>Various dishes</h4>
              <p>Embark on a culinary journey with our extensive selection of diverse and flavorful dishes.</p>
            </div>
         

          
            <div class="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="300">
            <span>03</span>
              <h4>Handy packaging</h4>
              <p>Savor the convenience of our fresh and portable meal packaging, designed for your busy lifestyle.</p>
            </div>
      

          
            <div class="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="300">
            <span>04</span>
              <h4>No frying</h4>
              <p>Delight in our oil-free, flavorful dishes. Enjoy nutritious options without guilt.</p>
            </div>

        </div>

      </div>
    </section>

    <div id="meals" class="px-20 pt-30 pb-24 bg-[#fffaf3] aos-init aos-animate relative" data-aos="fade-left">
          <div>
          <h2 className='w-full text-pink'>Our Meals</h2>
          <h3>Enjoy delicious food with us and explore a variety of flavors.</h3>
          <Carousel responsive={mealsRes}>
            {randomData && randomData.data && Array.isArray(randomData.data.data) && randomData.data.data.length > 0 ? ( randomData.data.data.map((item,idx)=>
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
              )) : (<tr><td><IsLoading/></td></tr>)
            }
          </Carousel>
        </div>
    </div>

    <section id="events" class="events px-20 pt-24 pb-24">
      <div class="container aos-init aos-animate relative" data-aos="fade-left">

        <div class="section-title mb-[40px]">
          <h2>Events</h2>
          <p>Organize Your Events in our Restaurant</p>
        </div>

        <div class="events-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 3">
          <Carousel responsive={responsive}>
              <div class="flex flex-col md:flex-row justify-between event-item">
                <div>
                  <img src={imgUrl + 'images/front/event-birthday.jpg'} alt="" className='w-full h-auto' />
                </div>
                <div class="pt-4 content pl-6 leading-8">
                  <h3>Birthday Parties</h3>
                  <div class="price">
                    <p><span>$189</span></p>
                  </div>
                  <p className='mb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul className='mb-3'>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p className='mb-3'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row justify-between event-item">
                <div>
                  <img src={imgUrl + 'images/front/event-birthday.jpg'} alt="" className='w-full h-auto' />
                </div>
                <div class="pt-4 content pl-6 leading-8">
                  <h3>Birthday Parties</h3>
                  <div class="price">
                    <p><span>$189</span></p>
                  </div>
                  <p className='mb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul className='mb-3'>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p className='mb-3'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row justify-between event-item">
                <div>
                  <img src={imgUrl + 'images/front/event-birthday.jpg'} alt="" className='w-full h-auto' />
                </div>
                <div class="pt-4 content pl-6 leading-8">
                  <h3>Birthday Parties</h3>
                  <div class="price">
                    <p><span>$189</span></p>
                  </div>
                  <p className='mb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul className='mb-3'>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p className='mb-3'>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>

              </Carousel>
          </div>
      </div>
      </div>
    </section>

            <Footer />
  </div>
  )
}

export default ProductList