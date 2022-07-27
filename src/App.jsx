import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import swal from 'sweetalert2'


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
