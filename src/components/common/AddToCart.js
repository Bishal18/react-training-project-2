import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
    render() {
        let { product, cartItems } = this.props;
        let cartItem = cartItems.find(item => item.id === product.id);

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
                            ...product, qty: product.qty + 1, totalPrice: (product.qty + 1) * product.price
                        })} >+Cart</button>
                }

            </div>
        );
    }
}

AddToCart.propTypes = {
    cartItems: PropTypes.array,
    product: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        qty: PropTypes.number,
        totalPrice: PropTypes.number
    }),
}

export default AddToCart;

