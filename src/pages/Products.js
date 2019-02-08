import React from 'react';
import config from '../configs/config';
import ProductSection from '../containers/ProductSection';
import Filter from '../containers/Filter';

const products = (props) => {
    let { match: { params: { categoryId } } } = props;
    return (
        <div>
            <br />
            <Filter selectedCategory={categoryId} />
            <br />
            <ProductSection type={config.listingType.allProductsListing}
                selectedCategory={categoryId} />
        </div>

    )
}

export default products;