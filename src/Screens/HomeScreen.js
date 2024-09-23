// src/screens/HomeScreen.js
import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            <h1>Welcome to Our Store</h1>
            <ProductList addItemToCart={addItemToCart} />
            <Cart />
        </div>
    );
};

export default HomeScreen;
