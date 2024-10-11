import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Manufacturing DB</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;