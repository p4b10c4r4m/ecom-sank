import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';



export const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (idCategoria) {
      const queryFilter = query(queryCollection, where('category', '==', idCategoria))
      getDocs(queryFilter)
        .then(res => setProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [idCategoria]);
  
  
  return <ItemList productos={productos} />;
}
