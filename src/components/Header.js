import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = ()=>{

    const [btnName,SetbtnName] = useState("Login")

    return(
        <div className="header">
        <div className="logo-container ">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link className="header-option" to="/">Home</Link></li>
                <li><Link className="header-option" to="/about">About Us</Link></li>
                <li><Link className="header-option" to="/contact">Contact</Link></li>
                <li><Link className="header-option" to="/cart">Cart</Link></li>
                <button className="login" onClick={()=>{
                   btnName ==="Login" ? SetbtnName("Logout") :SetbtnName("Login")
                }} >{btnName}</button>
            </ul>
        </div>
    </div>
    )
};

export default Header;