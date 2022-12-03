import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from "../redux/cart/cart.selectors";
import CartDropdownItem from "./items/CartDropdownItem";
import CustomButton from "../../UI/buttons/CustomButton";
import { toggleCartHidden } from "../redux/cart/cart.actions";


import './CartDropdown.scss';

const CartDropdown = ({cartItems, total, dispatch}) => {
    const navigate = useNavigate();

    
    return (
    <div className="cart-dropdown">
        <div className="cart-heading" >
           <h3>My Bag</h3>
            <span></span> 
        </div>
        <div className="cart-items">
            {   cartItems.length ? (
                cartItems.map(cartItem => 
                <CartDropdownItem key={cartItem.id} item={cartItem}/>
            )) : (
                <span className="empty-msg">Your Cart Is Empty</span>
            )
        }
        </div>
        {/* <div className="total">
            <span>Total:</span>
            <span>$ {total}</span>
        </div> */}
        <div className="check-out">
            <CustomButton>VIEW BAG</CustomButton>
            <CustomButton 
            className="checkout"
            onClick={ ()=>  {
                navigate('/checkout');
                dispatch(toggleCartHidden())
                }}>CHECK OUT</CustomButton>
        </div>
        
    </div>
);
} 

const mapDispatchToProps = (state)=> ({
    cartItems : selectCartItems(state)
});

const mapStateToProps = createStructuredSelector({
    total : selectCartTotal
})






export default connect(mapDispatchToProps)(CartDropdown);   