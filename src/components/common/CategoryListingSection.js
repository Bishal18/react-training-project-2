// Rathan

import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import * as utility from '../../utilities/api';
import PropTypes from 'prop-types';

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
                        <CategoryCard key={index}
                            cardDetail={category} />
                    ))
                }
            </div>
        );
    }
}

CategoryListingSection.propTypes = {
    categoryList : PropTypes.array
}

export default CategoryListingSection;