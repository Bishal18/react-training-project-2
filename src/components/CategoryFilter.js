//Ankit

import React, { Component } from 'react';
import config from '../configs/config';
import * as utility from '../utilities/api';

class CategoryFilter extends Component {

    state = { categoryList: [], selectedCategory: '' }

    componentDidMount() {
        utility.fetchCategories()
            .then(res => {
                if (res) {
                    var categoryList = [{ id: 0, name: 'All' }, ...res];
                    this.setState({ categoryList });
                }
            });
        let { selectedCategory } = this.props;
        if (selectedCategory) {
            this.setState({ selectedCategory });
        }
    }

    onCategoryChange = (e) => {
        this.setState({ selectedCategory: e.target.value });
        this.props.onFilter(e, config.filterType.categoryFilter)
    }

    render() {
        let { categoryList, selectedCategory } = this.state;
        return (
            <div>
                {
                    categoryList && categoryList.length > 0
                    &&
                    <div className="row">
                        <div className="col-md-4">
                            <p>Category:</p>
                        </div>
                        <div className="col-md-7">
                            <select value={selectedCategory} onChange={this.onCategoryChange}>
                                {
                                    categoryList.map(category => {
                                        return (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default CategoryFilter;

