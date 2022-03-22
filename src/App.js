import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import Footer from '/components/Footer'
import jsonProducts from '/products.json'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

 const allProducts = jsonProducts.map((index, product) =>  <Product {...product} index={index} />)
  return (
    <div className="App">

    
        {allProducts}
    
   
    </div>
  );
}

export default App;
