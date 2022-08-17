import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const variedades = [
  {id: 101, name: "Trainwreck", price: 550, idCategoria: "Sativa"},
  {id: 102, name: "Hindu Kush", price: 500, idCategoria: "Indica"},
  {id: 103, name: "Northern Lights", price: 550, idCategoria: "Indica"},
  {id: 104, name: "Michka", price: 500, idCategoria: "Sativa"},
  {id: 105, name: "Durban Poison", price: 450, idCategoria: "Sativa"},
];

export const ItemDetailContainer = () => {
  const [planta, setPlanta] = useState({});
  const {idProducto} = useParams();

  useEffect(() => {
    const getPlanta = new Promise(resolve => {
      setTimeout(() => {
        resolve(variedades);
      }, 2000);
    });

    getPlanta.then(res => setPlanta(res.find(variedad => variedad.id === parseInt(idProducto))));
  }, [])

  return (
  <ItemDetail planta={planta} />
  );
}

export default ItemDetailContainer;
