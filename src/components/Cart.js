// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';

const Cart = () => {
    const items = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>Cart</h2>
            {items.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
