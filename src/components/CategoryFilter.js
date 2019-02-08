import React, { Component } from 'react';
import config from '../configs/config';
import * as utility from '../utilities/api';

class CategoryFilter extends Component {

    state = { categoryList: [], selectedCategory: '' }

    componentDidMount() {
        utility.fetchCategories()
            .then(res => {
                var categoryList = res;
                this.setState({ categoryList });
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
            <div className="row">
                <div className="col-md-4">
                    <p>Category:</p>
                </div>
                <div className="col-md-7">
                    <select value={selectedCategory} onChange={this.onCategoryChange}>
                        <option value="0">All</option>
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
        );
    }
}

export default CategoryFilter;

