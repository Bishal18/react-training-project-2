import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import config from '../../configs/config';
import AddToCart from '../../containers/AddToCart';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {

    onClickMore = (productId) => {
        this.props.history.push(`/products/${productId}`);
    }

    callBuyNow = () => {
        let { cardDetail } = this.props;
        this.props.buyNow({ ...cardDetail, qty: 1, totalPrice: cardDetail.price });
        this.props.history.push('/checkout');
    }

    render() {
        let { cardDetail, cardDetail: { id, name, shortDescription, imageUrl, ratings } } = this.props;
        return (
            <div className="col-md-3">
                <div className="card">
                    <img onClick={() => this.onClickMore(id)} style={{ cursor: 'pointer' }} src={imageUrl} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="cardDetails">
                            <StarRatings rating={ratings.avgRating}
                                starRatedColor="yellow"
                                numberOfStars={config.totalStars}
                                name='rating'
                                starDimension="20px"
                                starSpacing="3px" />
                            <p>({ratings.totalReviews} rated)</p>
                            <p className="card-text">{shortDescription}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-primary" onClick={this.callBuyNow}>Buy Now</button>
                                </div>
                                <div className="col-md-6">
                                    <AddToCart product={cardDetail} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

ProductCard.PropTypes ={
    cardDetail : PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        shortDescription: PropTypes.string,
        ratings: PropTypes.number
      }),
}

export default withRouter(ProductCard);