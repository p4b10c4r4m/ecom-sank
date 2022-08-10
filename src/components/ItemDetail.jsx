import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export const ItemDetail = ({ planta }) => {
  const [toCart, setToCart] = useState(false)

  const onAdd = (quantity) => {
    setToCart(true);
  }

  return (
    <div style={{ paddingLeft: "20px"}}>
      <h2>{planta.name}</h2>
      <p>{planta.idCategoria}</p>
      {
        toCart 
          ? <Link to='/cart'><button>Finalizar compra</button></Link>
          : <ItemCount initial={3} stock={5} onAdd={onAdd} />
      }
    </div>
  );
}

export default ItemDetail;


/*function onAdd() {
    setCount(
        Swal.fire(
        'Agregaste tus productos al carrito',
      ))
  } */