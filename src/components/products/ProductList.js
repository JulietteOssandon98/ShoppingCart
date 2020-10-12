//import { render } from '@testing-library/react';
import React from 'react';
import { Product } from './Product';

export const ProductList = () => {

    return (
        <div className="product_list">
            <h1 className="section_title">Shopping Cart</h1>
            <ul className="subtitle">
            <li className="product-list-subtitle row">
                <div className="product-details-column">Product details</div>
                <div className="quantity-column">Quantity</div>
                <div className="price-column">Price</div>
                <div className="total-column">Total</div>
            </li>
            </ul>
            <Product/>
        </div>
    )
}