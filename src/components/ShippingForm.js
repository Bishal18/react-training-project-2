import React from 'react';
import config from '../configs/config';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShippingForm extends React.Component {

    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        errorMsgs: []
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () => {
        let { userId, cartItems, history } = this.props;
        let { name, address, city, state, pincode } = this.state;
        if (this.validateForm(this.state) && cartItems && cartItems.length > 0) {
            var userDetails = { name, address, city, state, pincode };
            var products = [];
            var amountPaid = 0;
            cartItems.map((product) => {
                var item = { id: parseInt(product.id), qty: product.qty };
                products = [...products, item];
                return amountPaid += product.totalPrice;
            });
            var dataSent = { userId, userDetails, products, amountPaid };
            this.props.placeOrder(dataSent, history);
        }
    }

    validateForm = ({ name, address, city, state, pincode }) => {
        var errorMsgs = [];
        if (!name) {
            errorMsgs = [...errorMsgs, { name: 'name', errorMsg: "Invalid Name!" }];
        }
        if (!address) {
            errorMsgs = [...errorMsgs, { name: 'address', errorMsg: "Invalid Address!" }];
        }
        if (!city) {
            errorMsgs = [...errorMsgs, { name: 'city', errorMsg: "Invalid City!" }];
        }
        if (!state) {
            errorMsgs = [...errorMsgs, { name: 'state', errorMsg: "Invalid State!" }];
        }
        if (!(pincode && /[\d]{6}/.test(pincode))) {
            errorMsgs = [...errorMsgs, { name: 'pincode', errorMsg: "Invalid Pincode!" }];
        }
        if (errorMsgs.length > 0) {
            this.setState({ errorMsgs });
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                {
                    this.props.cartItems && this.props.cartItems.length > 0
                    &&
                    <div>
                        {
                            config.formDetails.map((item, index) => {
                                var error = this.state.errorMsgs.filter(msg => msg.name.toLowerCase() === item.fieldname.toLowerCase())[0];
                                return (
                                    <div className="form-group" key={index}>
                                        <label>{item.fieldname}</label>
                                        {error && <span style={{ color: 'red' }}>({error.errorMsg})</span>}
                                        <input type="text"
                                            name={item.fieldname.toLowerCase()}
                                            className="form-control"
                                            value={this.state[item.fieldname.toLowerCase()]}
                                            onChange={this.onChange} />
                                    </div>
                                )
                            })
                        }
                        <button className="btn btn-primary" onClick={this.onSubmit}> Place Order</button>
                    </div>
                }

            </div >
        )
    }
}


ShippingForm.PropTypes ={
    name: PropTypes.sring,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    errorMsgs: PropTypes.array,
    userId: PropTypes.number,
    cartItems: PropTypes.object

}

export default withRouter(ShippingForm);