import React from 'react';
import config from '../configs/config';
import ProductsContainer from '../containers/ProductsContainer';

const products = () => {
    return (
        <div>
            <ProductsContainer type={config.listingType.allProductsListing} />
        </div>

    )
}

export default products;