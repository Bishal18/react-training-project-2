import React, { Component } from 'react';

class AddToCart extends Component {
    render() {
        console.log('AddToCart', this.props);
        let { product, cartItems } = this.props;
        product.qty = 1;
        var index = cartItems.findIndex(item => item.id === product.id)
        return (
            <div className="row">
                {
                    index !== -1 && cartItems[index].qty > 0
                        ? <div className="row">
                            <div className="col-md-3">
                                <button className="btn btn-primary" onClick={(e) => this.props.updateCart(product)} >-</button>
                            </div>
                            <div className="col-md-2 offset-md-1">
                                <p>{cartItems[index].qty}</p>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-primary" onClick={(e) => this.props.addToCart(product)} >+</button>
                            </div>
                        </div>
                        : <button className="btn btn-primary" onClick={(e) => this.props.addToCart(product)} >+Cart</button>
                }

            </div>
        );
    }
}

export default AddToCart;