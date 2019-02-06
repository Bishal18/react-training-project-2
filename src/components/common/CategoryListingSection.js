import React, { Component } from 'react';
import Card from './Card';

class CategoryListingSection extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        let { categories } = this.props;
        return (
            <div className="row">
                {
                    (categories)
                    &&
                    categories.map((category, index) => (
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