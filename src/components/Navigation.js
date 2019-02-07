import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/categories" activeClassName="active">Categories</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/cart" activeClassName="active">Cart</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/checkout" activeClassName="active">Checkout</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;