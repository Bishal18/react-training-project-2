import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import products from './pages/Products';
import categories from './pages/Categories';
import Login from './containers/Login'
import productDetail from './pages/ProductDetail';
import cart from './pages/Cart';
import checkout from './pages/Checkout';

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
                            <Route path="/home"
                                exact
                                component={Home} />

                            <Route path="/products"
                                exact
                                component={products} />

                            <Route path="/products/:productId"
                                exact
                                component={productDetail} />

                            <Route path="/categories"
                                exact
                                component={categories} />

                            <Route path="/products/bycategory/:categoryId"
                                exact
                                component={products} />

                            <Route path="/login"
                                component={Login} />

                            <Route path="/checkout"
                                exact
                                component={checkout} />

                            <Route path="/cart"
                                component={cart} />

                            <Redirect path="/" to="/home" />

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