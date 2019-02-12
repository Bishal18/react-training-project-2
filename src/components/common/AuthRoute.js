//Manoj

import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthRoute = (props) => {
    
    let {
        authenticated,
        exact,
        path, 
        component,
        location
    } = props;
    return (
            <React.Fragment>
                <Route path={path}
                       exact = {exact || false}
                       render = { (props) => authenticated
                                        ? React.createElement(component, props)
                                        : <Redirect to={{
                                            pathname: '/login',
                                            state: { from: location }
                                        }} />

                        } />
            </React.Fragment>
    )
}

AuthRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    exact: PropTypes.string,
    path: PropTypes.string.isRequired,
    component: PropTypes.func,
    location: PropTypes.object
}
export default AuthRoute;