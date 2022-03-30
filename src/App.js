import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import AllProducts from "./components/Product/AllProducts";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import React from 'react'; 

function App() {
  return (
    <Router>
   <React.Fragment>
  <Nav />
     
      <Routes>
        <Route exact path="/Home" element ={<Home/>}>
       
        </Route>
        <Route path="/Product" element = {<AllProducts/>}>
         
        </Route>
        <Route path="/Contact" element ={<Contact/>}>
          
        </Route>
      </Routes>
   </React.Fragment>
  </Router>
);
}

export default App;





// //import logo from './logo.svg';
// //import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import './App.css';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Product from './components/Product';
// import Footer from './components/Footer'
// import jsonProducts from './products.json'


// const allProducts = jsonProducts.map((index, product) =>  <Product {...product} index={index} />)
//   return (
//     <div className="App">
     
//     <Nav/>
//    <Home/>
//    <Product/>

//        {allProducts}
//         <Contact/>
//        <Footer/>
    
   
//    </div>
     
//   );




// export default App;
