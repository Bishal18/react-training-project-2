import React, { Component } from 'react';
import ProductCard from './ProductCard';
import config from '../../configs/config';

class ProductListingSection extends Component {
    componentDidMount() {
        let { fetchProducts, selectedCategory } = this.props;
        if (selectedCategory) {
            var params = [{
                name: "categoryId", value: selectedCategory
            }];
            fetchProducts(config.listingType.filterProductsListing, params);
        }
        else {
            fetchProducts(this.props.type);
        }
    }

    render() {
        let { products, updateCart } = this.props;
        return (
            <div className="row">
                {
                    (products && products.length > 0)
                        ? products.map((product, index) => (
                            <ProductCard key={index}
                                cardDetail={product}
                                buyNow={updateCart} />
                        ))
                        : <h3>Products Not Found!</h3>
                }
            </div>
        );
    }
}

export default ProductListingSection;