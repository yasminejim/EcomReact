import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Home.css"



const HomeSlider = () => {
  return (
    <div>
      <Carousel className='main-slide'> 
                <div>
                    <div className="img-1"alt = "nail background 2"/> 
                </div>
                
                <div>
                    <div className="img-2" alt = "nail background 2" />   
                </div>

                <div>
                    <div className="img-3" alt = "image 3"/>
                    
                </div>
            </Carousel>
    </div>
  )
}

export default HomeSlider








// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Home from "../Home/Home";
// import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="images/NailBg2.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

























// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import Slider from "react-slick";
// import "./Home.css";
// import Product from "../Product/Product";

// // array for slider images
// const productArray = [
//   {
//     image: process.env.PUBLIC_URL + "/images/Household.jpg",
//   },
//   {
//     image: process.env.PUBLIC_URL + "/images/clothing.jpg",
//   },
//   {
//     image: process.env.PUBLIC_URL + "/images/accessories.jpg",
//   },
// ];
// const slideShow = () => {
//   const settings = {
//     infinite: true,
//     speed: 550,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   //goes through our list one by one and returns a product componet for us
//   const sliderProducts = productArray.map((product) => (
//     <Product image={product.image} title={product.title} />
//   ));

//   return (
//     <Slider className="slider" {...settings}>
//       {sliderProducts}
//     </Slider>
//   );
// };

// export default slideShow;