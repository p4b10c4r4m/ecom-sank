import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {idProducto} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', idProducto);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() })) 
      }, [idProducto])
       

  return (
    <ItemDetail data={data} />);
}

export default ItemDetailContainer;

