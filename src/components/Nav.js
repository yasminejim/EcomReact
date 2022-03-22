import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Product from './Product';


export class Nav extends Component {

    render(){
        return(
            <>
                  <header className="NavHeader">
         <a className="Logo" href="Homepage.html"><img src="images/NailsByYaz.png" alt="Nail nail logo"></img></a>
         <nav>
         <ul>
                    <Link to="/homepage"> <li><a href="Home">Home</a></li></Link>
                    <Link to="/products"> <li><a href="Products">Products</a></li></Link>
                    <Link to="/contact"><li><a href="Contact">Contact</a></li></Link>
                </ul>
        </nav>
        </header>
            </>
        )
    }
}



export default Nav