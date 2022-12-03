import React from "react";
import { connect } from "react-redux";

import CircleIcon from '../../assets/icons/circle-icon.svg';
import { addItem } from "../redux/cart/cart.actions";
import './Product.scss';

const Product = ({item, addItem}) => {
    const { image, name, price } = item
    return (
        <div className="product">
            <div className="image">
                <img className="image-background" src={image} alt={name} />
                <img onClick={()=> addItem(item)} className="circle-icon" src={CircleIcon} alt='cart-icon'/>
            </div>
            <div className="name-price">
                <span>{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Product) ;