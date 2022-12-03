import React from "react";

import './CustomButton.scss';

const CustomButton = (props) => (
    <button onClick={props.onClick} className="custom-button">{props.children}</button>
)

export default CustomButton;    