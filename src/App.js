import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css'

function App() {

  let greet = "saludos";


  return (
    
    <Router> 
      <NavBar />
      <Routes>
        <Route path='/' element = {
          <ItemListContainer x = {greet} />
        }>
        </Route>
        <Route path='/detail/:id' element = {<ItemDetailContainer />} ></Route>
        <Route path='/categoria/:idCategoria' element = { <ItemListContainer x = {greet} /> }></Route>
      </Routes>
    </Router>
  );

}

export default App;
