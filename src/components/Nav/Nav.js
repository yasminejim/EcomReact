import React from 'react';
import "./Nav.css";




const Nav = () =>{
    return (
        
            <>
         <header className="NavHeader">
         <a className="Logo" href="/Home"><img src = "images/NailsByYaz.png" alt="Nail nail logo"></img></a>
         <nav>
             <div className="desktop">
            <a className="navLink" href="/Home">Home</a>
            <a className="navLink" href="/Product">Products</a>
            <a className="navLink" href="/Contact">Contact</a>
        </div>
{/* 
            <div className="main-mobile-menu">
       <div className="mobile-menu">

        <a className="menu-item" href="/Home"></a>
       <span className="ti-home"></span>
      
       <a className="menu-item" href="/Product"></a>
          <span className="ti-home"></span>
          
     <a className="menu-item" href="/Contact"></a>
       <span className="ti-home"></span>
    </div>
    </div>  */}
        </nav>
      </header>
            </>
        )
    }




export default Nav