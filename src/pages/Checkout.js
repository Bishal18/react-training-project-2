import React from 'react';
import CartSummary from '../containers/CartSummary'
import CheckoutForm from '../containers/CheckoutForm'

const checkout = () => {
    return (
        <div>
            <h2>Checkout</h2>
            <div className="row">
                <div className="col-md-6">
                    <CartSummary type="checkout"/>
                </div>
                <div className="col-md-6">
                    <CheckoutForm />
                </div>
            </div>
        </div>
    );
}

export default checkout;