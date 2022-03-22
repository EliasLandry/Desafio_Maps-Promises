import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'

function App(){
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer MENSAJE="Catalogo"/>
    </div>
  );
}

export default App;
