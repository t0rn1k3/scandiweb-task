import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../redux/cart/cart.actions";

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem }) => {
    const {name, price, image, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="item-description">
                <span className="item-name">{name}</span>
                <span className="item-price">${price * quantity}</span>
                <span></span>
            </div>
            <div className="image-and-quantity">
                <div className="item-quantity">
                    <div onClick={() => addItem(cartItem)} className="plus">+</div>
                    <div className="quantity">{quantity}</div>
                    <div onClick={() => removeItem(cartItem)} className="plus">-</div>
                </div>
                <div className="image-container">
                    <img src={image} alt='item' />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);