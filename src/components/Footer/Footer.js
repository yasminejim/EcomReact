import React from 'react';
import "./Footer.css";


const Footer = () =>{
    return (
        <>
        <footer>
         <a className="footerLogo" href="Homepage.html"><img src="images/NailsByYaz.png" alt="Nail By Yaz Logo"></img></a>
         <p>© 2021 Nails By Yaz, Inc</p>
         <aside className="socialmedia">
            <a className="logo" target="_blank" rel="noopener" href="http://instagram.com"><img src="images/iglogo.png" alt="instagram logo link"></img></a>
            <a className="logo" target="_blank" rel="noopener" href="http://twitter.com"><img src="images/twitterlogo.png" alt="twitter logo link"></img></a>
            <a className="logo" target="_blank" rel="noopener" href="http://facebook.com"><img src="images/facebooklogo.png" alt="facebook logo link"></img></a>
         </aside>
      </footer>
        </>
    )
}

export default Footer