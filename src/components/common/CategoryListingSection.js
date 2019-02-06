import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import config from '../../configs/config';


class CategoryListingSection extends Component {
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
        console.log(categoryList);
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