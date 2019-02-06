import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Header from './containers/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import products from './pages/products';
import categories from './pages/categories';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" exact render={(props) => (<Home />)} />

                            <Route path="/products"
                                component={products} />

                            <Route path="/Categories"
                                component={categories} />

                            <Route path="*" render={(props) => (<Home />)} />

                        </Switch>
                        <hr />
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;