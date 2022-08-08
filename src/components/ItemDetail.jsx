import React from 'react';

export const ItemDetail = ({ planta }) => {
  return (
    <div style={{ paddingLeft: "20px"}}>
      <h2>{planta.name}</h2>
      <p>{planta.idCategoria}</p>
    </div>
  );
}

export default ItemDetail;
