import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function ItemCart({ producto }) {
    const { removeProduct } = useCartContext();
  return (
    <div>
        <p>Variedad: {producto.name}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Precio: ${producto.price}</p>
        <p>Subtotal: ${producto.quantity * producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
    </div>
  )
}
