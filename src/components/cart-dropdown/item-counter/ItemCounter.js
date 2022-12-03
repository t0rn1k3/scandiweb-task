import React from "react";



import SquareButton from "../../../UI/buttons/SquareButton";
import './ItemCounter.scss';

const ItemCounter = () => (
    <div className="item-counter">
        <SquareButton>+</SquareButton>
        <span className="quantity">0</span>
        <SquareButton>-</SquareButton>
    </div>
);


export default ItemCounter;