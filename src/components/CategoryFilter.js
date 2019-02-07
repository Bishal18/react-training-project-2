import React, { Component } from 'react';
import config from '../configs/config';
import * as utility from '../utilities/api';

class CategoryFilter extends Component {

    state = { categoryList: [] }

    componentDidMount() {
        utility.fetchCategories()
            .then(res => {
                var categoryList = res;
                this.setState({ categoryList });
            });

    }

    onCategoryChange = (event) => {
        var selectedValue = event.target.value;
        let { type } = this.props;
        if (selectedValue && selectedValue !== "selected" && selectedValue !== "all") {
            this.props.fetchProducts(
                type,
                [
                    {
                        name: "categoryId",
                        value: event.target.value
                    }
                ]);
        }

        if (selectedValue === "all") {
            this.props.fetchProducts();
        }
    }

    render() {
        let { categoryList } = this.state;
        return (
            <div className="row">
                <div className="col-md-4">
                    <p>Category:</p>
                </div>
                <div className="col-md-7">
                    <select onChange={this.onCategoryChange}>
                        <option value="selected">Selected</option>
                        <option value="all">All</option>
                        {
                            categoryList.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        );
    }
}

export default CategoryFilter;

