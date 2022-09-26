import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext'
import { Checkout } from './components/checkout/Checkout';


function App() {

  let greet = "saludos";
  
  return (
    <CartProvider>
      <Router> 
        <NavBar />
        <Routes>
          <Route path='/' element = {<ItemListContainer x = {greet} />}></Route>
          <Route path='/item/:id' element = {<ItemDetailContainer />} ></Route>
          <Route path='/categoria/:categoryId' element = { <ItemListContainer x = {greet} /> }></Route>
          <Route path='/cart' element = { <Cart /> }></Route>
          <Route path='/checkout' element = { <Checkout /> }></Route>
        </Routes>
      </Router>
    </CartProvider>
  );

}

export default App;
