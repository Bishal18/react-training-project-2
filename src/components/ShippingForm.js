import React from 'react';
import config from '../configs/config';


class ShippingForm extends React.Component {

    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () => {
        let { userId, cartItems } = this.props;
        if (cartItems && cartItems.length > 0) {
            var userDetails = {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.stateName,
                pincode: this.state.pincode
            }
            var productSent = [];
            var amount = 0;
            cartItems.map((product) => {
                var item = {
                    id: product.id,
                    qty: product.qty
                }
                amount = amount + (product.qty * product.price)
                productSent.push(item)
            });
            var dataSent = {
                userId,
                userDetails: userDetails,
                products: productSent,
                amountPaid: amount
            }
            this.props.placeOrder(dataSent);
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.cartItems && this.props.cartItems.length > 0
                    &&
                    <div>
                        {
                            config.formDetails.map((item, index) => (
                                <div className="form-group" key={index}>
                                    <label >{item.fieldname}:</label>
                                    <input type="text"
                                        name={item.fieldname.toLowerCase()}
                                        className="form-control"
                                        value={this.state[item.fieldname.toLowerCase()]}
                                        onChange={this.onChange} />
                                </div>
                            ))
                        }
                        <button className="btn btn-primary" onClick={this.onSubmit}> Place Order</button>
                    </div>
                }

            </div >
        )
    }
}


export default ShippingForm;