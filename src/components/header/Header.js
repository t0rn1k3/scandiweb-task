import React from "react";
import NavBar from "./NavBar";
import './Header.scss';
import logo from '../../assets/icons/logo.svg';
import { Link } from "react-router-dom";
import CartAndCurrencyIcons from "./CartAndCurrencyIcons";
import SwitchCurrencyBox from './switch-currency/SwitchCurrencyBox';
import CartDropdown from "../cart-dropdown/CartDropdown";

import { connect } from "react-redux";

const Header = ({hidden, hide}) => {
    return (
        <header className="header">
            <NavBar/>
            <Link to={"/"}><img src={logo} alt='logo'/></Link>
            <CartAndCurrencyIcons/>
            {hidden ? null : <SwitchCurrencyBox/>}
            {hide ? null : <CartDropdown />}  
        </header>
    )
}

const mapStateToProps = ({ currency: {hidden}, cart: {hide}}) => ({
    hidden,
    hide
});



export default connect(mapStateToProps)(Header);