import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
    render() {
        let { product: { id, name, price }, cartItems } = this.props;
        this.product = { id, name, price, qty: 0 };
        this.product.totalPrice = this.product.qty * this.product.price;
        let cartItem = cartItems.find(item => item.id === this.product.id);

        return (
            <div>
                {
                    cartItem && cartItem.qty > 0
                        ? <div className="row">
                            <div className="col-md-3">
                                <span className="btn btn-primary" onClick={(e) => this.props.updateCart({
                                    ...cartItem, qty: cartItem.qty - 1, totalPrice: (cartItem.qty - 1) * cartItem.price
                                })} >-</span>
                            </div>
                            <div className="col-md-2 offset-md-1">
                                <p>{cartItem.qty}</p>
                            </div>
                            <div className="col-md-3">
                                <span className="btn btn-primary" onClick={(e) => this.props.updateCart({
                                    ...cartItem, qty: cartItem.qty + 1, totalPrice: (cartItem.qty + 1) * cartItem.price
                                })} >+</span>
                            </div>
                        </div>
                        : <button className="btn btn-primary" onClick={(e) => this.props.updateCart({
                            ...this.product, qty: this.product.qty + 1, totalPrice: (this.product.qty + 1) * this.product.price
                        })} >+Cart</button>
                }

            </div>
        );
    }
}

AddToCart.PropTypes = {
    cartItems : PropTypes.object,
    product : PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number
      }),
}

export default AddToCart;

