//Shubham


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
    render() {
        let { product, cartItems } = this.props;
        let cartItem = cartItems.find(item => item.id === product.id);

        return (
            <span>
                {
                    cartItem && cartItem.qty > 0
                        ? <span>
                            <span className="btn btn-primary" onClick={(e) => this.props.updateCart({
                                ...cartItem, qty: cartItem.qty - 1, totalPrice: (cartItem.qty - 1) * cartItem.price
                            })} >-</span>
                            <span style={{margin: "0px 2px 0px 2px"}}>{cartItem.qty}</span>
                            <span className="btn btn-primary" onClick={(e) => this.props.updateCart({
                                ...cartItem, qty: cartItem.qty + 1, totalPrice: (cartItem.qty + 1) * cartItem.price
                            })} >+</span>
                        </span>
                        : <button className="btn btn-primary" onClick={(e) => this.props.updateCart({
                            ...product, qty: product.qty + 1, totalPrice: (product.qty + 1) * product.price
                        })} >+Cart</button>
                }
            </span>
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

