import React from 'react';


export const Product = () => {
    return (
        <div className="item_info">
            <ul className="product_list">
                <li className="item_product row">
                    <div className="product_description product" >
                        <div className="product_image">
                            <button>
                                <img className="image-product" src='shirt.png' alt="Producto"/>
                            </button>
                        </div>
                        <div className="product_text">
                            <div className="product_name">
                                <h3>Shirt</h3>
                            </div>
                            <div className="product_description">
                                <a href="/#">Product code X7R20PX</a>
                            </div>
                        </div>
                    </div>
                    <div className="box_numbers_product">
                        <form className="product_quantity" >
                            <button>-</button>
                            <input type="number" className="input_quantity" placeholder="0" ></input>
                            <button>+</button>
                        </form>
                    </div>
                    <div className="product_price">
                        <span className="price_currency">$</span>
                        <span className="price_number">1000</span>
                    </div>
                    <div className="product_total">
                        <span className="total_currency">$</span>
                        <span className="total_number">1000</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}