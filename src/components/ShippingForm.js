import React from 'react';
import config from '../configs/config';


const ShippingForm = (props) => {

    const details = config.formDetails;
    //console.log(">>>" + details)
    const data = details.map((item, index) => {
        return (
            <div className="form-group" key={index}>
                <label >{item.fieldname}:</label>
                <input type="text" className="form-control" />
            </div>
        )
    })
    return (
        <div>
            {data}
            <button className="btn btn-primary">Place Order</button>
        </div>
    )
}


export default ShippingForm;