import React from 'react';
import config from '../configs/config';
import ProductsContainer from '../containers/ProductsContainer';
import Filter from '../components/Filter';

const products = () => {
    return (
        <div>
            <br />
            <Filter />
            <br />
            <ProductsContainer type={config.listingType.allProductsListing} />
        </div>

    )
}

export default products;