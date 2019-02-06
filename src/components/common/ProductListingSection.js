import React, { Component } from 'react';
import Card from './Card';

class ProductListingSection extends Component {
    componentDidMount() {
        this.props.fetchProducts(this.props.type);
    }

    render() {
        let { products } = this.props;
        return (
            <div className="row">
                {
                    (products)
                    &&
                    products.map((product, index) => (
                        <Card key={index}
                            cardDetail={product}
                            type="ProductCard" />
                    ))
                }
            </div>
        );
    }
}

export default ProductListingSection;