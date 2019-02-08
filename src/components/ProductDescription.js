import React, { Component } from 'react';
import config from '../configs/config';
import AddToCart from '../containers/AddToCart';
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
                    productDesc.map((detail, index) => (
                        <div key={index}>
                            <h2>{detail.name}</h2>
                            <br />
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={detail.imageUrl} alt={detail.name} />
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <h4>{detail.name}</h4>
                                            <h5>{detail.price} INR</h5>
                                            <div>
                                                <StarRatings rating={detail.ratings.avgRating}
                                                    starRatedColor="yellow"
                                                    numberOfStars={config.totalStars}
                                                    name='rating'
                                                    starDimension="20px"
                                                    starSpacing="3px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <h3>Add To Cart</h3>
                                    <AddToCart product={detail} />
                                </div>
                            </div>
                            <br />
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