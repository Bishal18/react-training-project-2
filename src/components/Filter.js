import React, { Component } from 'react';
import SearchProduct from '../components/SearchProduct';
import CategoryFilter from '../components/CategoryFilter';
import config from '../configs/config';
import PropTypes from 'prop-types';

class Filter extends Component {

    state = {
        filterCategory: '',
        searchQuery: ''
    }

    onFilter = (e, type) => {
        switch (type) {
            case config.filterType.searchFilter:
                this.setState({ searchQuery: e.target.value || '' },
                    () => this.updateProducts());
                break;
            case config.filterType.categoryFilter:
                this.setState({ filterCategory: e.target.value !== '0' ? e.target.value : '' },
                    () => this.updateProducts());
                break;
            default:
                break;
        }
    }

    updateProducts = () => {
        var params = [];
        if (this.state.filterCategory !== '') {
            params = [...params, {
                name: "categoryId", value: this.state.filterCategory
            }]
        }

        if (this.state.searchQuery !== '') {
            params = [...params, {
                name: "q", value: this.state.searchQuery
            }]
        }
        this.props.fetchProducts(config.listingType.filterProductsListing, params);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <SearchProduct onFilter={this.onFilter} />
                </div>
                <div className="col-md-4 offset-md-2">
                    <CategoryFilter onFilter={this.onFilter} selectedCategory={this.props.selectedCategory} />
                </div>
            </div>
        );
    }
}

Filter.PropTypes ={
        filterCategory: PropTypes.string,
        searchQuery: PropTypes.string
}

export default Filter;