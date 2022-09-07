import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Groot',
            phone: '123456',
            email: 'groot@guardian.com'
        },
        items: cart.map(producto => ({ id: producto.id, title: producto.name , price: producto.price, quantity: producto.quantity })),
        total: totalPrice(),               
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }
    
    if (cart.length === 0) {
        return (
            <>
                <p>El carrito se encuentra vacío</p>
                <Link to='/'>Agregar productos</Link>
            </>
        );
    }
 
    return (
    <>
        {cart.map(producto => <ItemCart key={producto.id} producto={producto} />)}
        <p>Total:${totalPrice()}</p>
        <button onClick={handleClick}>Emitir Compra</button>
    </>
  )
}

export default Cart
