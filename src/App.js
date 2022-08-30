import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  let greet = "saludos";


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer x = {greet} />
    </div>
  );

}

export default App;
