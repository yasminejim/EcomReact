import React from 'react';





    const Navbar = () =>{
        return (
            <>
         <header className="NavHeader">
         <a className="Logo" href="Homepage.html"><img src = "images/NailsByYaz.png" alt="Nail nail logo"></img></a>
         <nav>
            <a className="navLink" href="Homepage.html">Home</a>
            <a className="navLink" href="Products.html">Products</a>
            <a class="navLink" href="Contact.html">Contact</a>
        
            <a className="mobile" href="Homepage.html">Home</a>
            <a className="mobile" href="Products.html">Products</a>
            <a className="mobile" href="Contact.html">Contact</a>
        
        </nav>
      </header>
            </>
        )
    }




export default Nav