import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../css/home.css"
import { FaAngleLeft } from "react-icons/fa"
import Card1 from '../components/Card1';
import AllFoodItems from '../components/AllFoodItems';
import { cartContext } from '../context/CartContext';
import { useContext,useCallback } from 'react';


function Home(props) {

  const [cartItems,setCartItems] = useContext(cartContext);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  });

  // const fetchCartItemsHandler = useCallback(async () => {
  //   // setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://meal-api-63e7e-default-rtdb.firebaseio.com/cartItems.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something Went Wrong In cart Page..!..?");
  //     }

  //     const data = await response.json();
  //     const loadingData = [];
  //     for (const key in data) {
  //       loadingData.push({
  //         id: key,
  //         idMeal: data[key].idMeal,
  //         mealCost: data[key].mealCost,
  //         strMeal: data[key].strMeal,
  //         strMealThumb: data[key].strMealThumb,
  //         total: data[key].total,
  //       });
  //     }
  //     setCartItems(loadingData);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // });

  // useEffect(() => {
  //   fetchCartItemsHandler();
  // }, []);



  return (
    <Fragment>
      <div>
        <div className="container-fluid" style={{ padding: "50px" }}>
          <div className="row gx-5">
            <div className="col-12 col-md-6 p-3 bg-light">
              <h1 className="text-10xl sm:text-5xl font-bold" data-testid="search-intro-title"
                style={{ padding: "20px", fontWeight: "700" }}>
                <div
                  style={{
                    fontSize: "50px",
                    paddingTop: "40px",
                    textAlign: "center",
                    fontStyle: "oblique",
                    fontWeight: "500",
                  }}
                >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(300)
                        .typeString("Hungry??")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Cooking gone wrong?")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Unexpected Guests?")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("We got you! -FOODIE")
                        .start();
                    }}
                  />
                </div>
              </h1>
              <h2 style={{ paddingLeft: "20px", opacity: "0.5", fontSize: "130%" }}><b>Your destination to Discover the best food.</b></h2>
              <div>
                <p style={{ padding: "20px", fontSize: "large" , color:"black"}}>
                Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 p-3 bg-light text-center" style={{ display: "flex", justifyContent: "space-around", allignItems: "center" }}>
              <img className="img-fluid rounded" alt="" style={{ height: "520px" }} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" />
            </div>
          </div>
        </div>
      </div>


      <div className="container px-50px">
        <div className="row g-3">
          <div data-aos="fade-right" className="col-12 col-md-4">
            <div>
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front" style={{ padding: "20px" }}>
                    <img
                      alt=""
                      src="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
                      style={{ height: "250px", decoding: "async", dataNimg: "fill" }}
                      className="w-full rounded-lg card-img-top"
                    />
                  </div>
                  <div className="flip-card-back p-1" style={{}}>
                    < h2>Free Delivery</h2>
                    <p style={{ marginTop: "20px", color:"black" ,textAlign:"center" }}>Become a plus member and get free delivery anytime.. anywhere </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-zoom-in"
            data-aos-duration="2000"
            className="col-12 col-md-4"
          >
            <div>
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front" style={{ padding: "20px" }}>
                    <img
                      alt=""
                      src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"
                      style={{ height: "250px", decoding: "async", dataNimg: "fill" }}
                      className="w-full rounded-lg card-img-top"
                    />
                  </div>
                  <div className="flip-card-back p-1" style={{}}>
                    < h2>Become a Patner</h2>
                    <p style={{ marginTop: "20px", color:"black",textAlign:"center" }}>Grow your business and reach new customers by partnering with us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div data-aos="fade-left" className="col-12 col-md-4">
            <div>
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front" style={{ padding: "20px" }}>
                    <img
                      alt=""
                      src="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
                      style={{ height: "250px", decoding: "async", dataNimg: "fill" }}
                      className="w-full rounded-lg card-img-top"
                    />
                  </div>
                  <div className="flip-card-back p-1" style={{}}>
                    < h2>Try the App</h2>
                    <p style={{ marginTop: "20px", color:"black",textAlign:"center" }}>Get our mobile app. Supports both android and ios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid" style={{ padding: "50px" }}>
          <div className="row gx-5">
            <div className="col-12 col-md-4 py-3 bg-light">
              <h1 className="text-10xl sm:text-5xl font-bold" data-testid="search-intro-title"
                style={{ paddingTop: "50px", fontWeight: "700" }}>It’s all here.</h1>
              <h1 className="text-10xl sm:text-5xl font-bold" data-testid="search-intro-title"
                style={{ paddingBottom: "40px", fontWeight: "700" }}>All in one app.</h1>
              <div>
                <p style={{ color:"black"}} data-aos="fade-zoom-in"
                  data-aos-duration="2000">
                  Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 p-1 bg-light text-center" style={{ display: "flex", justifyContent: "space-around", allignItems: "center" }}>
              <img data-aos="fade-left" className="img-fluid rounded" alt="" style={{ height: "500px", width: "600px" }} src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid" style={{ padding: "50px" }}>
          <div className="row gx-5 bg-light">
            <div className="col-12 col-md-8 p-1 bg-light text-center" style={{ display: "flex", justifyContent: "space-around", allignItems: "center" }}>
              <img data-aos="fade-right" className="img-fluid rounded" alt="" style={{ height: "500px", width: "600px" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3images.zee5.com%2Fwp-content%2Fuploads%2Fsites%2F7%2F2020%2F07%2Fmutton-biryani-punjab-grill-scaled.jpg&f=1&nofb=1&ipt=f22ed2068a3ee8fe8732723772b8143d7a4c1b653df6e8e9e7fb04a2f9cc22fd&ipo=images" />
            </div>
            <div className="col-12 col-md-4 py-3 bg-light">
              <h1 className="text-10xl sm:text-5xl font-bold" data-testid="search-intro-title"
                style={{ paddingTop: "50px", paddingBottom: "40px", paddingRight: "40px", fontWeight: "700" }}>Every Flavor Welcome</h1>
              <div>
                <p style={{color:"black"}} data-aos="fade-zoom-in"
                  data-aos-duration="2000">
                  From your neighborhood sushi spot to the burger and fries you crave, choose from over 300,000 local and national favorites across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <AllFoodItems />



      {/* <div className='container-xl'>
        <div className='row'>
          <div className='col-md-12'>
            <h2>Featured <b>Products</b></h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/ipad.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="thumb-content">
                          <h4>Apple iPad</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <p className="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/headphone.jpg" className="img-fluid" alt="Headphone" />
                        </div>
                        <div className="thumb-content">
                          <h4>Sony Headphone</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <p className="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/macbook-air.jpg" className="img-fluid" alt="Macbook" />
                        </div>
                        <div className="thumb-content">
                          <h4>Macbook Air</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                            </ul>
                          </div>
                          <p className="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/nikon.jpg" className="img-fluid" alt="Nikon" />
                        </div>
                        <div className="thumb-content">
                          <h4>Nikon DSLR</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <p className="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item carousel-item">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/play-station.jpg" className="img-fluid" alt="Play Station" />
                        </div>
                        <div className="thumb-content">
                          <h4>Sony Play Station</h4>
                          <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/macbook-pro.jpg" className="img-fluid" alt="Macbook" />
                        </div>
                        <div className="thumb-content">
                          <h4>Macbook Pro</h4>
                          <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/speaker.jpg" className="img-fluid" alt="Speaker" />
                        </div>
                        <div className="thumb-content">
                          <h4>Bose Speaker</h4>
                          <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/galaxy.jpg" className="img-fluid" alt="Galaxy" />
                        </div>
                        <div className="thumb-content">
                          <h4>Samsung Galaxy S8</h4>
                          <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item carousel-item">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/play-station.jpg" className="img-fluid" alt="Play Station" />
                        </div>
                        <div className="thumb-content">
                          <h4>Sony Play Station</h4>
                          <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/macbook-pro.jpg" className="img-fluid" alt="Macbook" />
                        </div>
                        <div className="thumb-content">
                          <h4>Macbook Pro</h4>
                          <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/speaker.jpg" className="img-fluid" alt="Speaker" />
                        </div>
                        <div className="thumb-content">
                          <h4>Bose Speaker</h4>
                          <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">

                        <div className="img-box">
                          <img src="/examples/images/products/galaxy.jpg" className="img-fluid" alt="Galaxy" />
                        </div>
                        <div className="thumb-content">
                          <h4>Samsung Galaxy S8</h4>
                          <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star"></i></li>
                              <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                            </ul>
                          </div>
                          <a href=" " className="btn btn-primary">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left" style={{ color: "black" }}></i>
              </a>
              <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right" style={{ color: "black" }}></i>
                {/* <FaAngleLeft></FaAngleLeft> */}
              {/* </a>
            </div>
          </div>
        </div>
      </div> */} 

    </Fragment>
  )
}

export default Home