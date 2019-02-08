import React from 'react';
import CartSummary from '../containers/CartSummary'
import ShippingForm from '../components/ShippingForm'

const checkout = () => {
    return (
        <div>
            <h2>Checkout</h2>
            <div className="row">
                <div className="col-md-6">
                    <CartSummary type="checkout"/>
                </div>
                <div className="col-md-6">
                    <ShippingForm />
                </div>
            </div>
        </div>
    );
}

export default checkout;