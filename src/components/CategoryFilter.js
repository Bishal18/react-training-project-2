import React, { Component } from 'react';
import config from '../configs/config';

class CategoryFilter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <p>Category:</p>
                </div>
                <div className="col-md-7">
                    <select onChange={(e) => this.props.fetchProducts(config.listingType.filterProductsListing, [{ name: "categoryId", value: e.target.value }])}>
                        <option value="">Selected</option>
                        <option value="1">Smartphone</option>
                        <option value="2">TV</option>
                        <option value="3">Earphones</option>
                        <option value="4">Cloths</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default CategoryFilter;

