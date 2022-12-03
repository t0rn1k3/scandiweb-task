import React from "react";
import { Link } from "react-router-dom";

import './NavBar.scss';

const NavBar = () => {
    return(
        <nav className="nav">
            <ul>
                <li><Link to={"/"}>WOMEN</Link></li>
                <li><Link to={"/men"}>MEN</Link></li>
                <li><Link to={"/kids"}>KIDS</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;