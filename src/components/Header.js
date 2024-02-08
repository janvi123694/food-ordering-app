import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [login, setLogin] = useState(false); 
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={`${LOGO_URL}`}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login" onClick={() => setLogin((login) => !login)}>
                    {!login? "Login" : "Logout"} 
                </button>
            </ul>
        </div>
    </div>
    )
}
export default Header; 