import React from "react";


import SquareButton from "../../../UI/buttons/SquareButton";

import './CartDropdownItem.scss';

const CartDropdownItem = ({item}) => {

    return (
    <div className="cart-dropdown-item">
        <div className="item-overview">
            <p>{item.name}</p>
            <span className="item-price">${item.price * item.quantity} </span>
            <p>size</p>
            <div className="size-buttons">
                <SquareButton />
                <SquareButton />
                <SquareButton />
                <SquareButton />
            </div>
        </div>
        <div className="item-counter">
            {/* <span className="item-quantity">{item.quantity}</span> */}
        </div>
        
        <div className="cart-dropdown-image">
            <img src={item.image} alt={item.name} />
        </div>
    </div>
    
)
} 

export default CartDropdownItem;