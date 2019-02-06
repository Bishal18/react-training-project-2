import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation(props) {
    return (
        <ul className="nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/categories">Categories</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/products">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cart">Cart</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/checkout">Checkout</NavLink></li>
        </ul>
    );
}

export default Navigation;