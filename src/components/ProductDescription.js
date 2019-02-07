import React, { Component } from 'react';
import config from '../configs/config';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

class ProductDescription extends Component {
    state = {
        productDesc: []
    }

    componentDidMount() {
        let apiUrl = `${config.baseApiUrl}${config.apiRoutes.productRoute}?id=${this.props.productId}`;
        axios.get(apiUrl)
            .then(response => {
                var productDesc = response.data;
                this.setState({ productDesc });

            })
            .catch(function (error) {
                console.log("Error in ProductDescription action: " + error);
            });
    }

    render() {
        let { productDesc } = this.state;
        return (
            <div>
                {
                    (productDesc)
                    &&
                    productDesc.map((detail) => (
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={detail.imageUrl} alt={detail.name} />
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <p>{detail.name}</p>
                                            <p>{detail.price}</p>
                                            <StarRatings rating={detail.ratings.avgRating}
                                                starRatedColor="yellow"
                                                numberOfStars={config.totalStars}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="3px" />
                                            <p>({detail.ratings.totalReviews} rated)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                </div>

                            </div>

                            <h3>Description</h3>
                            <p>{detail.longDescription}</p>

                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ProductDescription;