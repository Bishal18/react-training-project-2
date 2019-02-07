import React, { Component } from 'react';
import Card from './Card';
import * as utility from '../../utilities/api';


class CategoryListingSection extends Component {
    state = { categoryList: [] }

    componentDidMount() {
        utility.fetchCategories()
            .then(res => {
                var categoryList = res;
                this.setState({ categoryList });
            });

    }

    render() {
        let { categoryList } = this.state;
        return (
            <div className="row">
                {
                    (categoryList)
                    &&
                    categoryList.map((category, index) => (
                        <Card key={index}
                            cardDetail={category}
                            type="CategoryCard" />
                    ))
                }
            </div>
        );
    }
}

export default CategoryListingSection;