import React, { Component } from 'react';

const cart = (props) => {
    return (
        <div className="row">
            {
                (props.cartItems && props.cartItems.length > 0)
                    ?
                    <div className="col">
                        <h2>Cart</h2>
                        <div className="row">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{item.name}</th>
                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.qty * item.price}</td>
                                                <td><button onClick={() => props.removeFromCart(item.id)}>Remove</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    : <div className="col">
                        <h3 className="text-center">No products added to the cart!</h3>
                    </div>
            }
        </div>
    )
}

export default cart;