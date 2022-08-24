import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { Producto } from './components/Producto/Producto';

function App() {

  let producto1 = {id: 100, name: "camisa negra", price: 60};
  let producto2 = {id: 101, name: "camisa azul", price: 60};
  let greet = "saludos";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer x = {greet} />
      <Producto item = {producto1} />
      <Producto item = {producto2} />
    </div>
  );
}

export default App;

