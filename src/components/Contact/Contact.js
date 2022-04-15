import React from 'react';
import "./Contact.css";
import Footer from "../Footer/Footer";



const Contact = () =>{
    return (
      <>
        <main className="contact">
      {/* <div className="content">
        <h2>Contact Us</h2>
      </div> */}
          <div className="contactForm">
            <form>
              <h2>Send Us a Message</h2>
              <div className="inputBox">  
           <input id="full name" type="text" required="required"></input>
                <label for="full name">Full Name</label>
              </div>
            <div className="inputBox">
                <input  id="Email" placeholder="" required="required"></input>
                <label for="Email">Email</label>
            </div>
            <div className="inputBox">
          <textarea id="type your message" placeholder="" name="type your message" required="required"></textarea>
                <label for="type your message">Type you Message...</label>
            </div>
            <div className="inputBox">
              <input type="submit" name="submit button" value="Send"></input>
              </div>
            </form>
          </div>
      </main>
    
     <Footer/>
     </>
    )
}


export default Contact