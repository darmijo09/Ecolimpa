// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ProductItem from './ProductItem';

const ProductList = ({ addItemToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productList);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <ProductItem key={product.id} product={product} addItemToCart={addItemToCart} />
            ))}
        </div>
    );
};

export default ProductList;
