//Manoj

import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class CRM extends Component {
    componentWillMount() {
        this.props.actions.validateToken();
    }
    
    render() {
        var { user } = this.props;
        return (
            user ?
                <React.Fragment >
                    <b>Hi, {user.username}</b> | <button className="btn btn-primary" onClick={this.props.actions.logout}>Logout</button>
                </React.Fragment >
                :
                < React.Fragment >
                    <NavLink to="/login">Login</NavLink> | <NavLink to="/register">Register</NavLink>
                </React.Fragment >
        );
    }
}
export default CRM;