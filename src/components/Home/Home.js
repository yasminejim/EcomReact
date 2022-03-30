import React from 'react';
import "./Home.css";
import HomeSlider from "./HomeSlider";
import Footer from "../Footer/Footer";


   const Home = () =>{
      return(
            <>
                  <div>
         <div className="hero-container">
           
             <HomeSlider/>
               <section className="hero-text">
                  <h2>Use Promo Code "SUMMER22" To Get 15% Off Your Order</h2>
                  <h3>For the lastest trends in nails.</h3>
                  <aside className="inputBox2">
                     <form action="/Product">
                        <input type="submit" value="Shop Now" />
                     </form>
                  </aside>
               
            </section>
            </div>
        </div>
         
        
      <Footer />
            </>
            
        )
    }




export default Home