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
import products from './pages/Products';
import categories from './pages/Categories';
import Login from './pages/Login'
import productDetail from './pages/ProductDetail';
import Cart from './containers/Cart';

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
                        <hr />
                        <Switch>
                            <Route path="/"
                                exact
                                render={(props) => (<Home />)} />

                            <Route path="/products"
                                exact
                                component={products} />

                            <Route path="/products/:productId"
                                exact
                                component={productDetail} />

                            <Route path="/Categories"
                                component={categories} />

                            <Route path="/login"
                                component={Login} />

                            <Route path="/cart"
                                component={Cart} />

                            <Route path="*"
                                render={(props) => (<Home />)} />

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