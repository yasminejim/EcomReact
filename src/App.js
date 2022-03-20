import logo from './logo.svg';
import './App.css';
import Product from './components/Product'
import jsonProducts from './products.json'

function App() {

 const allProducts = jsonProducts.map((index, product) =>  <Product {...product} index={index} />)
  return (
    <div className="App">

    
        {allProducts}
    
   
    </div>
  );
}

export default App;
