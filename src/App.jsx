import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemCount from './components/ItemCount'
import swal from 'sweetalert2'
import Item from './components/Item'
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer'


function App() {


  return (
    <>
    <Navbar />

    <ItemListContainer />
     
    <ItemCount />

    </>
  )
}

export default App
