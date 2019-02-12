import React from 'react';
import ProductDescription from '../components/ProductDescription';

const productDetail = (props) => {
    return (
        <div>
            <br />
            <ProductDescription productId={props.match.params.productId} />
        </div>

    )
}

export default productDetail;