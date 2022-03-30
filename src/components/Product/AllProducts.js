import React from "react";
import "./Product.css"
import Footer from "../Footer/Footer";


const products = require("./product.json");

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.Products,
    };
  }

  render() {
    return (
      <>
       <section className="container"> 
        {this.state.products.map((product, index) => (
          
          <div className="card">
              <div className={'card-image nail-' + index}></div>
            <h2>{product.title} </h2>
            <h3> {product.price}</h3>
            <p> {product.description} </p>{""}
            <div className="cartbuttonForm">
            <form>
               <div className="inputBox1">
                  <input type="submit" name="submit button" value="Add To Cart"/>
               </div>
            </form>
            </div>
              
          </div>
        
        ))}
        <div>
         
        </div>
        </section>
        <Footer/>
      </>
    );
  }
}