//Ankit

import React, { Component } from 'react';
import config from '../configs/config';
import AddToCart from '../containers/AddToCart';
import StarRatings from 'react-star-ratings';
import * as utils from '../utilities/api';

class ProductDescription extends Component {
    state = {
        productDesc: []
    }

    componentDidMount() {
        utils.fetchProducts(config.listingType.filterProductsListing, [{ name: 'id', value: this.props.productId }])
            .then(productDesc => {
                this.setState({ productDesc });
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
                                    <AddToCart product={{ id: detail.id, name: detail.name, price: detail.price, qty: 0, totalPrice: detail.price }} />
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