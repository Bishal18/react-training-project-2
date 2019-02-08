import React from 'react'
import Navigation from './Navigation'
import CRM from './../containers/CRM';

function Header(props) {
    return (
        <div>
            <h1>Product App</h1>
            <br />
            <div className="row">
                <div className="col-md-8"><Navigation /></div>
                <div className="col-md-4"><CRM /></div>
            </div>
        </div>
    );
}

export default Header;