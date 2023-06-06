import React, { Fragment } from 'react'
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

    const productSearched = useSelector((state)=>state.category.search) 
  return (
    <Fragment>
    {productSearched && productSearched.data?.length > 0 ? 
      ( <section className="px-20 pt-56 pb-32 bg-[#fffaf3]">
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
        )) : (<IsLoading /> )}
          
        </div>
      </section>)
      : (
      <div className="">
      <div className="hero">
      </div>
      <div className='px-20'>
        <div className='containerHero absolute top-80 aos-init aos-animate flex flex-row justify-between' data-aos="fade-left">
          <div>
            <h1>Best <span className='text-pink'>Quality</span> Ingredients</h1>
            <h2>A healthy outside Start from healthy inside!</h2>
            <div className="btns mt-8">
              <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
            </div>
          </div>
        </div>
        
      </div>
  
      <section id="about" className="px-20 about-main pt-24 pb-24 flex flex-col md:flex-row justify-between bg-[#fffaf3]">
                  <div className="md:w-[60%] aos-init aos-animate relative"  data-aos="fade-right">
                      <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                          <h2 className="block-title text-pink"> About Us </h2>
                          <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                          <p className='mb-3 text-lightBroun'>Immersed in the world of cooking through our grandmother's teachings, we have mastered the art of good taste. She passed down her treasured knowledge, enabling us to create healthy and flavorful dishes. Guided by a secret combination of spices and the richness of olive oil, we meticulously craft meals that nourish and delight. Our passion lies in sharing the harmonious blend of health and taste, proving that wholesome food can be an exquisite culinary experience.</p>
  
                          <p className='mb-3 text-lightBroun'> With every dish we prepared, we paid homage to our grandmother's legacy, infusing each creation with the love and care she had instilled in us. Through our culinary artistry, we shared the joy of wholesome eating with others, inspiring them to embrace a healthier lifestyle without compromising on taste. </p>
  
                          <p className='text-lightBroun'> Today, our passion continues to evolve as we explore the vast world of culinary possibilities. From vibrant salads bursting </p>
                      </div>
                  </div>
                  <div className="m-auto hidden md:block aos-init aos-animate relative" data-aos="fade-down">
                      <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                          <div className="about-images">
                              <img className="about-main" src={imgUrl + 'images/front/health-bottle-cut.png'} alt="About Main Image" />
                          </div>
                      </div>
                  </div>
      </section>
  
      <section id="why-us" className="why-us px-20 pt-32 pb-32 bg-[#0c0b09]">
        <div className="container aos-init aos-animate" data-aos="fade-up">
  
          <div className="section-title pb-[40px]">
            <h2>Why Us</h2>
            <p>Why Choose Our Meals</p>
          </div>
  
          <div className="flex flex-col md:flex-row md:justify-between">
  
            
              <div className="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="100">
              <span>01</span>
                <h4>Only healthy food</h4>
                <p>Indulge in the pure flavors of nature with our range of exclusively natural food options.</p>
              </div>
          
  
            
              <div className="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
                <h4>Various dishes</h4>
                <p>Embark on a culinary journey with our extensive selection of diverse and flavorful dishes.</p>
              </div>
            
  
            
              <div className="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="300">
              <span>03</span>
                <h4>Handy packaging</h4>
                <p>Savor the convenience of our fresh and portable meal packaging, designed for your busy lifestyle.</p>
              </div>
        
  
            
              <div className="box aos-init aos-animate mt-4 md:w-[24%]" data-aos="zoom-in" data-aos-delay="300">
              <span>04</span>
                <h4>No frying</h4>
                <p>Delight in our oil-free, flavorful dishes. Enjoy nutritious options without guilt.</p>
              </div>
  
          </div>
  
        </div>
      </section>
  
      <div id="meals" className="px-20 pt-24 pb-24 bg-[#fffaf3] aos-init aos-animate relative" data-aos="fade-left">
            <div>
            <h2 className='w-full text-pink'>Our Meals</h2>
            <h3 className='mb-14'>Enjoy delicious food with us and explore a variety of flavors.</h3>
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
  
                      <button onClick={() => handleAddToCart(item?.id)} className='hover:bg-[unset] hover:text-pink'
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
  
      <section id="events" className="events px-20 pt-24 pb-24">
        <div className="container aos-init aos-animate relative" data-aos="fade-left">
  
          <div className="section-title mb-[40px]">
            <h2>Events</h2>
            <p>Organize Your Healthy Events</p>
          </div>
  
          <div className="events-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 3">
            <Carousel responsive={responsive}>
                <div className="flex flex-col md:flex-row justify-between event-item">
                  <div className='md:w-[50%]'>
                    <img src={imgUrl + 'images/front/event-birthday.jpg'} alt="" className='w-full h-auto' />
                  </div>
                  <div className="md:w-[50%] pt-4 content pl-6 leading-8">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className='mb-3'>
                    We specialize in baking healthy birthday cakes and cookies that are not only incredibly tasty but also promote a balanced and wholesome lifestyle.
                    </p>
                    <ul className='mb-3'>
                      <li><i className="bi bi-check-circled"></i> high-quality ingredients and innovative baking techniques.</li>
                      <li><i className="bi bi-check-circled"></i> Prepared with whole grains, natural sweeteners, and fresh fruits.</li>
                      <li><i className="bi bi-check-circled"></i> Delightful burst of flavors made with nutrient-rich ingredients like oats, nuts, and seeds.</li>
                    </ul>
                    <p className='mb-3'>
                    We believe that celebrating life's special moments should go hand in hand with maintaining a healthy lifestyle, and our bakery is dedicated to delivering guilt-free delights that make birthdays even more memorable.
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col md:flex-row justify-between event-item">
                  <div className='md:w-[50%]'>
                    <img src={imgUrl + 'images/front/meat.jpg'} alt="" className='w-full h-auto' />
                  </div>
                  <div className="md:w-[50%] pt-4 content pl-6 leading-8">
                    <h3>Special Business lunch</h3>
                    <div className="price">
                      <p><span>$100</span></p>
                    </div>
                    <p className='mb-3'>
                    We take pride in offering a range of healthy meat options that are carefully cooked to perfection..
                    </p>
                    <p className='mb-3'>
                    the meat we serve is lean, tender, and packed with flavor. We source our meats from trusted suppliers who prioritize animal welfare and sustainable practices. We offer a variety of lean protein choices, such as grilled chicken, lean cuts of beef, and succulent seafood options. These protein-rich dishes are complemented with a selection of wholesome sides, including fresh vegetables, whole grains, and vibrant salads. We strive to strike the perfect balance between deliciousness and healthiness, ensuring that your work date event is not only productive but also leaves participants feeling energized and satisfied.
                    </p>
                    <p className='mb-3'>
                    Our dedication to providing healthy meat options allows you to enjoy a flavorful and guilt-free dining experience that promotes overall well-being.
                    </p>
                  </div>
                </div>
  
                <div className="flex flex-col md:flex-row justify-between event-item">
                  <div className='md:w-[50%]'>
                    <img src={imgUrl + 'images/front/mariage.jpg'} alt="" className='w-full h-auto' />
                  </div>
                  <div className="md:w-[50%] pt-4 content pl-6 leading-8">
                    <h3>Wedding Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className='mb-3'>
                    Our Moroccan-inspired menu features a delightful array of dishes that showcase the rich flavors and vibrant spices of Moroccan cuisine.
                    </p>
                    <ul className='mb-3'>
                      <li><i className="bi bi-check-circled"></i> Prepared using traditional cooking techniques and the finest ingredients.</li>
                      <li><i className="bi bi-check-circled"></i> High-quality meats, fresh vegetables, and fragrant herbs and spices.</li>
                      {/* <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li> */}
                    </ul>
                    <p className='mb-3'>
                    With our authentic Moroccan cuisine, your wedding celebration will be a true reflection of your heritage and a feast for the senses.
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
    </Fragment>
   
  )
}

export default ProductList