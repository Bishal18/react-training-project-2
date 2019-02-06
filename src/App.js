import React, { Component } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Home />
                {/* <Products />
                <Categories /> */}
            </div>
        );
    }
}

export default App;