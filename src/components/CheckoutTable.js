import React from 'react';
//import config from '../configs/config';


const CheckoutTable = (props) => {
    //console.log(">>>CheckoutTable ",  props)
    return (
       
            <div className="col-md-6">
                <table className="cart table table table-bordered">
                        <thead>
                            <tr className="w3-light-grey">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                        <tbody>
                         {
                                props.cartItems && props.cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{item.name}</th>
                                        <td>{item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.qty * item.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                </table>
            </div>
   
    )
}

export default CheckoutTable;