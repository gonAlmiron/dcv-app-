import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <hr/>

        <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          </Routes>
        <ItemDetailContainer idProducto={1}/>
        



      
    </BrowserRouter>
   
  );
}

export default App;
