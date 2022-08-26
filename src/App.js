import { useState } from 'react';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { Producto } from './components/Producto/Producto';

function App() {

  let producto1 = {id: 100, name: "camisa negra", price: 60};
  let greet = "saludos";
  let stock = 10;

  const [initial, setInitial] = useState(0);

  const onAdd = () => {
		if (initial < stock){
      setInitial(initial + 1);
    }
  };

  const onRemove = () => {
		if (initial > 0){
      setInitial(initial - 1)};
	};

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer x = {greet} />
      <div style={{display:'flex'}}>
        <Producto item = {producto1} />
        <ItemCount initial={initial} stock={stock} onAdd={onAdd} onRemove={onRemove} ></ItemCount>
      </div>
    </div>
  );

}

export default App;
