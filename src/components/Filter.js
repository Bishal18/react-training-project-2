import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer';
import CategoryFilterContainer from '../containers/CategoryFilterContainer';


class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <SearchContainer />
                </div>
                <div className="col-md-4 offset-md-2">
                    <CategoryFilterContainer />
                </div>

            </div>
        );
    }
}

export default Filter;