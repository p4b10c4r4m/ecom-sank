import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';


export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let variedades = [
      {id: 101, name: "Jack Herer", price: 550},
      {id: 102, name: "kali Mist", price: 500},
      {id: 103, name: "Northern Lights", price: 450},
      {id: 104, name: "Gorilla Glue", price: 400},
      {id: 105, name: "Durban Poison", price: 350},
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
