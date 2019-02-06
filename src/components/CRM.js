import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

function CRM(props) {
    let { authenticated, username } = props;

    return (
        authenticated ?
            <React.Fragment >
                <b>Hi, {username}</b> | <button onClick={props.actions.logout}>Logout</button>
            </React.Fragment >
            :
            < React.Fragment >
                <NavLink to="/login">Login</NavLink> | <NavLink to="/register">Register</NavLink>
            </React.Fragment >
    );
}

export default CRM;