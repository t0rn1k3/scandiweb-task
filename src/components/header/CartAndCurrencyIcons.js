import React from "react";
import DollarCurrency from '../../assets/icons/dollar-currency.svg';
import CartIconCopm from "./CartIconCopm";
import './CartAndCurrencyIcons.scss';

import { connect} from "react-redux";
import { toggleCurrencyHidden } from '../redux/currency-dropdown/currency.actions';

const CartAndCurrencyIcons = ({ toggleCurrencyHidden }) => {

    return (
        <div className="CartAndCurrencyIcons">
            <img className="dollar-icon" src={DollarCurrency} alt="dollar"  onClick={toggleCurrencyHidden}/>
            <CartIconCopm />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden())
})

export default connect(null, mapDispatchToProps)(CartAndCurrencyIcons);