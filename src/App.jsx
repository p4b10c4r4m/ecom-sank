import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartWidget from './components/CartWidget';


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={<p>404</p>} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
