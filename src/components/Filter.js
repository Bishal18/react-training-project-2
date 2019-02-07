import React, { Component } from 'react';
import SearchContainer from '../containers/SearchProduct';
import CategoryFilter from '../containers/CategoryFilter';


class Filter extends Component {
    render() {
        let { filterType: { searchFilter, categoryFilter } } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <SearchContainer type={searchFilter} />
                </div>
                <div className="col-md-4 offset-md-2">
                    <CategoryFilter type={categoryFilter} />
                </div>

            </div>
        );
    }
}

export default Filter;