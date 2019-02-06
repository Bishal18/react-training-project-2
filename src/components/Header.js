import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import CRM from './CRM';

function Header(props) {
    return (
            <div>
                <h1>Product App</h1>
                <div className="row">
                    <div className="col-md-8"><Navigation /></div>
                    <div className="col-md-4"><CRM {...props}/></div>
                </div>
            </div>
    );
}

export default Header;