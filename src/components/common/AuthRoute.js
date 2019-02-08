import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class AuthRoute extends component {
    constructor(props) {
        super(props);
        let {
            authenticated,
            exact,
            path,
            component
        } = props;
    }

    componentWillMount()
    {
        this.props.authenticateUser();
    }

    render() {
        return (
            <React.Fragment>
                <Route path={path}
                    exact={exact || false}
                    render={(props) => authenticated
                        ? React.createElement(component, props)
                        : <Redirect to="/login" />

                    } />
            </React.Fragment>
        )
    }
}

export default AuthRoute;