import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import swal from 'sweetalert2'
import Item from './components/Item'
import ItemList from './components/ItemList'


function App() {


  return (
    <>
    <Navbar />
     
    <Item />

    <ItemCount />
     
    </>
  )
}

export default App
