import React from 'react';
import config from '../configs/config';
import ProductsContainer from '../containers/ProductsContainer';

const Products = () => {
    return (
        <div>
            <ProductsContainer type={config.listingType.allProductsListing} />
        </div>

    )
}

export default Products;