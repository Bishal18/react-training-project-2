import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import config from '../../configs/config';
import AddToCart from '../../containers/AddToCart';

class Card extends Component {
    render() {
        let { cardDetail, cardDetail: { id, name, shortDescription, imageUrl, ratings }, type } = this.props;
        return (
            <div className="col-md-3">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {
                            type && type === 'ProductCard'
                                ? <div className="cardDetails">
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
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <a href="#" className="btn btn-primary">+Cart</a> */}
                                            <AddToCart product={cardDetail} />
                                        </div>
                                    </div>
                                </div>
                                : <div className="cardDetails offset-md-9">
                                    <a href={`/products/${id}`} className="btn btn-primary">More</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;