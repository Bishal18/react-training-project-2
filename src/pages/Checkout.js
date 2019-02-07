import CheckoutTable from '../components/CheckoutTable'
import ShippingForm from '../components/ShippingForm'

import React, { Component } from 'react';

const Checkout = (props) =>{
    //console.log("CheoutPage", props.cartItems)
    return (
        <div>
            <h2>Checkout</h2>
            <div className="row">
                <CheckoutTable cartItems={props.cartItems}/>
                <ShippingForm  />
            </div>
        </div>
    );
}

export default Checkout;