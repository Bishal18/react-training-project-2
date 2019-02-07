import React from 'react';
import ProductDescription from '../components/ProductDescription';

const productDetail = (props) => {
    console.log("productDetail", props.match.params.productId);
    return (
        <div>Product Detail : 
             <div>
            <br />
            <ProductDescription productId={props.match.params.productId}/>
            </div>
        </div>

    )
}

export default productDetail;