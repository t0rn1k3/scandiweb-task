import React from "react";
import './SwitchCurrencyBox.scss';
import YenCurrency from '../../../assets/icons/yen-currency.svg';
import EuroCurrency from '../../../assets/icons/euro-currency.svg';
import DollarCurrency from '../../../assets/icons/dollar-list.svg';


const SwitchCurrencyBox = () => {
    return (
        <div className="currency-switch">
            <ul>
                <li>
                    <img src={DollarCurrency} alt='dollar'/>
                </li>
                <li>
                    <img src={EuroCurrency} alt='euro'/>
                </li>
                <li>
                    <img src={YenCurrency} alt='yen'/>
                </li>
            </ul>
        </div>
    )
}



export default SwitchCurrencyBox;