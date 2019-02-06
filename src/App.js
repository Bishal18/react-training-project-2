import React, { Component } from 'react';
import {BrowserRouter as Router, 
    Route, 
    Redirect,
    Switch} from 'react-router-dom';

import Header from './containers/Header';
import Login from './containers/Login';
import Home from './components/Home';

class App extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                    <Route path="/" exact render={ (props)=>(<Home  />)} />

                    <Route path="/login" 
                          component={Login} />

                    <Route path="*" render={(props) => (<Home/>)}/>

                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;