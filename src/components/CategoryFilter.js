import React, { Component } from 'react';
import config from '../configs/config';
import axios from 'axios';
import * as actionTypes from '../state/action-types';

class CategoryFilter extends Component {
    state = { categoryList: [] }

    componentDidMount() {
        let apiUrl = `${config.baseApiUrl}${config.apiRoutes.categoryRoute}`;
        axios.get(apiUrl)
            .then(response => {
                var categoryList = response.data;
                this.setState({ categoryList });
            })
            .catch(function (error) {
                console.log("Error in fetchProducts action: " + error);
            });
    }

    render() {
        let { categoryList } = this.state;
        console.log("categoryList",categoryList)
        return (
            <div className="row">
                <div className="col-md-4">
                    <p>Category:</p>
                </div>
                <div className="col-md-7">
                    <select onChange={(e) => this.props.fetchProducts((e.target.value != actionTypes.DEFAULT_SELECT )?config.listingType.filterProductsListing : config.listingType.allProductsListing, [{ name: "categoryId", value: (e.target.value)}])}>
                    <option value={actionTypes.DEFAULT_SELECT}>Select</option>
                    {(categoryList)
                    &&
                    categoryList.map((category, index) => (
                        console.log("category",category,"index", category.id),
                        <option value={category.id}>{category.name}</option>
                    ))     
                    }
                    </select>
                </div>
            </div>
        );
    }
}

export default CategoryFilter;

