// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, addItemToCart }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
