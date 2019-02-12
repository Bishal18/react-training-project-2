//Ankit, Shubham

import React from 'react';
import StarRatings from 'react-star-ratings';
import config from '../../configs/config';
import AddToCart from '../../containers/AddToCart';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const onClickMore = (history, productId) => {
    history.push(`/products/${productId}`);
}

const callBuyNow = (props) => {
    let { cardDetail: {id, name, price}, cartItems } = props;
    var cartItem = cartItems.find(item => item.id === id);
    if (cartItem) {
        props.buyNow({ ...cartItem, qty: cartItem.qty + 1, totalPrice: (cartItem.qty + 1) * price });
    }
    else {
        props.buyNow({ id, name, price, qty: 1, totalPrice: price });
    }
    props.history.push('/checkout');
}

const ProductCard = (props) => {
    let { cardDetail: { id, name, price, shortDescription, imageUrl, ratings } } = props;
    return (
        <div className="col-md-3">
            <div className="card">
                <img onClick={() => onClickMore(props.history, id)} style={{ cursor: 'pointer' }} src={imageUrl} className="card-img-top" alt={name} />
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
                                <button className="btn btn-primary" onClick={() => callBuyNow(props)}>Buy Now</button>
                            </div>
                            <div className="col-md-6">
                                <AddToCart product={{ id, name, price, qty: 0, totalPrice: price }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    cardDetail: PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        shortDescription: PropTypes.string,
        categoryId: PropTypes.number,
        longDescription: PropTypes.string,
        price: PropTypes.number,
        ratings: PropTypes.object,
        views: PropTypes.number
    }),
}

export default withRouter(ProductCard);