import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


export default function ItemListContainer() {
  
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(() => {
    let variedades = [
      {id: 101, name: "Trainwreck", price: 550, idCategoria: "Sativa"},
      {id: 102, name: "Hindu Kush", price: 500, idCategoria: "Indica"},
      {id: 103, name: "Northern Lights", price: 550, idCategoria: "Indica"},
      {id: 104, name: "Michka", price: 500, idCategoria: "Sativa"},
      {id: 105, name: "Durban Poison", price: 450, idCategoria: "Sativa"},
    ];

    const miPromesa = new Promise ((res, rej) => {
      setTimeout (() => {
        if (!idCategoria) {
          res(variedades);
        } else {
          res(variedades.filter((variedad) => variedad.idCategoria === idCategoria));
        }
      }, 2000);
    });

    miPromesa.then((res) => {
      setProductos(res);
    });  
  }, [idCategoria]);
  
  
  return <ItemList productos={productos} />;
}
