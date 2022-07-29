import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'


export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let variedades = [
      {id: 001, name: "Jack Herer", price: 550},
      {id: 002, name: "kali Mist", price: 500},
      {id: 003, name: "Northern Lights", price: 450},
      {id: 004, name: "Gorilla Glue", price: 400},
      {id: 005, name: "Durban Poison", price: 350},
    ];

    const miPromesa = new Promise ((res, rej) => {
      setTimeout (() => {
        res(variedades);
      }, 2000);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });
  
  }, []);
  
  
  return <ItemList productos={productos} />;
}
