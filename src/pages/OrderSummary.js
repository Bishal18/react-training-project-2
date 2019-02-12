//Shubham

import React, { Component } from 'react';
import * as utils from '../utilities/api';
import config from '../configs/config';

class OrderSummary extends Component {

    state = { orderData: null, products: [] }

    componentDidMount() {
        if (this.props.user) {
            this.getOrderDetails();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.user && !prevProps.user) {
            this.getOrderDetails();
        }
    }

    getOrderDetails = () => {
        let { match: { params: { orderId } }, history, user } = this.props;
        utils.getOrderDetail(orderId)
            .then(orderData => {
                if (orderData && orderData.userId === user.id) {
                    var productParams = [];
                    orderData.products.map(product => {
                        return productParams = [...productParams, { name: 'id', value: product.id }]
                    });
                    utils.fetchProducts(config.listingType.filterProductsListing, productParams)
                        .then(products => {
                            this.setState({ orderData, products });
                        });
                }
                else {
                    history.push('/notfound');
                }
            })
    }

    render() {
        let { orderData, products } = this.state;
        return (
            <div className="row">
                {
                    orderData
                        ? <div className="col-md-10 offset-md-1">
                            <h2>Order Summary</h2>
                            <br />
                            <p>Your order is successfully placed! <b>Order Id: </b> {orderData.id}</p>
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Shipping Details:</h4>
                                    <p><b>Name: </b>{orderData.userDetails.name}</p>
                                    <p><b>Address: </b>{orderData.userDetails.address}</p>
                                    <p><b>City: </b>{orderData.userDetails.city}</p>
                                    <p><b>Pincode: </b>{orderData.userDetails.pincode}</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Product Details:</h4>
                                    <table className="cart table table">
                                        <thead>
                                            <tr className="w3-light-grey">
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.map((product, index) => {
                                                    var orderedProduct = orderData.products.filter(item => item.id === product.id)[0];
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">{product.name}</th>
                                                            <td>{product.price}</td>
                                                            <td>{orderedProduct.qty}</td>
                                                            <td>{product.price * orderedProduct.qty}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <p className="text-right"><b>Total Amount Paid: </b>{orderData.amountPaid}</p>
                                </div>
                            </div>
                        </div>
                        : <div className="col-md-10 offset-md-1">
                            <h5 className="text-center">Loading...</h5>
                        </div>
                }

            </div>
        );
    }
}

export default OrderSummary;