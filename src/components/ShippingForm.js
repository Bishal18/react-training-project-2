import React from 'react';
import config from '../configs/config';


const ShippingForm = (props) => {

    const details = config.formDetails;
    console.log(">>>" + details)
    const data = details.map(item =>{
        return(
            <div className="form-group">
                <label for={item.fieldname}>{item.fieldname}:</label>
                <input type="text" className="form-control" />
            </div>
        )
    })
     return(
             <div className=" col-md-5">
                    {data}
                    <button className="btn btn-primary">Place Order</button>
            </div>
        )
}
    

export default ShippingForm;