import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [login, setLogin] = useState(false); 
    const data = useContext(UserContext)
    const {loggedInUser} = data; 
    const cartItems = useSelector((store) => store.cart.items)
    return (
    <div className="flex justify-between shadow-md bg-blue-100 mb-2">
        <div className="logo-container">
            <img className="w-40" src={`${LOGO_URL}`}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex m-2">
                <li className="px-4">
                    <Link to="/" className="font-bold text-md font-san-serif"> Home </Link>
                </li>
                <li className="px-4">
                    <a href="/about" className="font-bold text-md font-san-serif"> About </a></li>
                <li>
                    <Link to="/contact" className="font-bold text-md font-san-serif"> Contact </Link>
                </li>
               
                <li className="px-4">
                    <Link to="/grocery" className="font-bold text-md font-san-serif"> Grocery </Link>
                </li>
                <li className="px-2 font-bold text-bold text-md"> 
                    <Link to="/cart">
                        Cart({cartItems.length}items)
                    </Link>
                </li>
                <button 
                onClick={() => setLogin((login) => !login)} 
                className="font-bold bg-blue-300 text-md font-san-serif px-4 py-1 rounded-lg">
                    {!login? "Login" : "Logout"} 
                </button>
                <li className="px-4 font-bold">
                    {loggedInUser}
                </li>
            </ul>
        </div>
    </div>
    )
}
export default Header; 