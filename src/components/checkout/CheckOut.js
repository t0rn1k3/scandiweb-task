import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import CheckoutItem from "./CheckoutItem";

import './CheckOut.scss';

const CheckOut = ({ cartItems, total}) => {
    console.log(cartItems)
    return (
        <div className="checkout-page">
            <h2 className="cart-checkout">CART</h2>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className="final-view">
                <div>
                    <span>Tax 21% :</span>
                    <span className="numbers">${total * 21 / 100}</span>
                </div>
                <div>
                    <span>Quantity: </span>
                    <span className="numbers"></span>
                </div>
                <div>
                    <span>Total :</span>
                    <span className="numbers">${total}</span>
                </div>
                <button className="order">ORDER</button>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);