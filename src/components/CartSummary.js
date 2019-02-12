import React from 'react';
import AddToCart from '../containers/AddToCart';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const cartSummary = (props) => {
    var totalQty = 0;
    var totalPrice = 0;

    return (
        <div>
            {
                (props.cartItems && props.cartItems.length > 0)
                    ? <div>
                        <table className="cart table table table-bordered">
                            <thead>
                                <tr className="w3-light-grey">
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    {props.type !== 'checkout' && <th>Remove</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.cartItems.map((item, index) => {
                                        totalQty += item.qty;
                                        totalPrice += item.totalPrice;
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{item.name}</th>
                                                <td>{item.price}</td>
                                                <td>{props.type !== 'checkout' ? <AddToCart product={item} /> : item.qty}</td>
                                                <td>{item.totalPrice}</td>
                                                {props.type !== 'checkout' && <td><button className="btn btn-primary" onClick={() => props.removeFromCart(item.id)}>Remove</button></td>}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            props.type !== 'checkout' &&
                            <div className="row">
                                <div className="col-md-2 offset-md-10">
                                    <p><b>Total Quantity:</b> {totalQty}</p>
                                    <p><b>Total Price:</b> {totalPrice}</p>
                                    <button className="btn btn-primary" onClick={() => (props.history.push('/checkout'))}>Checkout</button>
                                </div>
                            </div>
                        }

                    </div>
                    : <h3 className="text-center">No products added to the cart!</h3>
            }

        </div>
    )
}

cartSummary.propTypes ={
    totalQty: PropTypes.number,
    totalPrice: PropTypes.number,
        
}

export default withRouter(cartSummary);