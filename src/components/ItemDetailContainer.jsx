import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const variedad = { id: 106, name: "River Haze", price: 550 };

export const ItemDetailContainer = () => {
  const [planta, setPlanta] = useState({});

  useEffect(() => {
    const getPlanta = new Promise(resolve => {
      setTimeout(() => {
        resolve(variedad);
      }, 2000);
    });

    getPlanta.then(res => setPlanta(res));
  }, [])

  return (
  <ItemDetail planta={planta} />
  );
}

export default ItemDetailContainer;
