import React from "react";
import './Navbar.css';
import Button from "../Button/Button";

function Navbar() {
    return (
        <nav className="nav-menu">
            <ul className="nav-list">
                <li className="nav-item">Contact</li>
                <li className="nav-item">Why Geeklee?</li>
                <li className="nav-item">Blog</li>
                <Button/>
            </ul>
        </nav>
    );
}

export default Navbar;