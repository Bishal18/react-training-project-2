import React from 'react';

const productDetail = (props) => {
    console.log("productDetail", props.match.params.productId);
    return (
        <div>Product Detail</div>
    )
}

export default productDetail;