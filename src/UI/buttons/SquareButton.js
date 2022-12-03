import React from "react";
import './SquareButton.scss';

const SquareButton = (props) => {
    return (
        <button onClick={props.onClick} className="square-button">{props.children}</button>
    )
   
}


export default SquareButton;