import { render } from '@testing-library/react';
import React from 'react';

export const ProductList = () => {

    return (
        <div className="product_list">
            <h1 className="section_title">Shopping Cart</h1>
            <ul className="subtitle">
            <li className="product-list-subtitle row">
                <div>Product details</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Total</div>
            </li>
            </ul>
        </div>
    )
}