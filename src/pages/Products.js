import React from 'react';
import config from '../configs/config';
import ProductSection from '../containers/ProductSection';
import Filter from '../components/Filter';

const products = () => {
    var filterType = {
        searchFilter: config.listingType.searchProductsListing,
        categoryFilter: config.listingType.filterProductsListing
    }

    return (
        <div>
            <br />
            <Filter filterType={filterType} />
            <br />
            <ProductSection type={config.listingType.allProductsListing} />
        </div>

    )
}

export default products;