import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemCount from './components/ItemCount'
import swal from 'sweetalert2'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {


  return (
    <>
    <Navbar />

    <ItemListContainer />
  
    <ItemCount />

    <ItemDetailContainer />

    </>
  )
}

export default App
