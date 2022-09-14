import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';



function App() {

  return (

    <CartProvider>

      <BrowserRouter>

          <NavBar/>
          <br/>

          <Routes>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/Productos' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/Cart' element={<Cart/>}/>
              <Route path='/Contacto' element={<Contacto/>}/>
              <Route path='/Nosotros' element={<Nosotros/>}/>
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          
      </BrowserRouter>
   
    </CartProvider>
  );
}

export default App;
