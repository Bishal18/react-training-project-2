//import React from 'react';
//import config from '../configs/config';
import CheckoutTable from '../components/CheckoutTable'
import ShippingForm from '../components/ShippingForm'

import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        const name = "rathan"
            return (
                <div>
                    <h2>Checkout</h2>
                    <div className="row">
                        <CheckoutTable data={name} />
                         <ShippingForm data={name} />
                    </div>
                </div>
            );
        }
    }

export default Checkout;