import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';

export const ItemDetail = ({ data }) => {
  const [toCart, setToCart] = useState(false)
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div style={{ paddingLeft: "20px"}}>
      <h2>{data.name}</h2>
      <p>{data.category}</p>
      <p>${data.price}</p>
      {
        toCart 
          ? <Link to='/cart'><button>Finalizar compra</button></Link>
          : <ItemCount initial={3} stock={5} onAdd={onAdd} />
      }
    </div>
  );
}

export default ItemDetail;
