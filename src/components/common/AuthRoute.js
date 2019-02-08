import React from 'react';
import {Redirect, Route} from 'react-router-dom';

function AuthRoute(props) {
    
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

export default AuthRoute;