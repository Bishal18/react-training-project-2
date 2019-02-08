import React from 'react';
import ProductDescription from '../components/ProductDescription';

const productDetail = (props) => {
    console.log("productDetail", props.match.params.productId);
    return (
        <div>
            <br />
            <ProductDescription productId={props.match.params.productId} />
        </div>

    )
}

export default productDetail;