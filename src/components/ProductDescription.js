import React, { Component } from 'react';
import config from '../configs/config';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

class ProductDescription extends Component {
    constructor(props){
        super(props)
        this.state ={
            productDesc : []
        }
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
        console.log("category", productDesc);
        return (
            <div className="row">
            {
                (productDesc)
                &&
                productDesc.map((detail) => (
                    <div>
                    <h1>{detail.name}</h1>
                    <img src={detail.imageUrl} className="card-img-top" />
                    <p>{detail.shortDescription}</p>
                    <p>Price : {detail.price}</p>
                    <StarRatings rating={detail.ratings.avgRating}
                                        starRatedColor="yellow"
                                        numberOfStars={config.totalStars}
                                        name='rating'
                                        starDimension="20px"
                                        starSpacing="3px" />
                                    <p>({detail.ratings.totalReviews} rated)</p>
                    <p><h4>Description : </h4></p> 
                    <p>{detail.longDescription}</p>                 
                    </ div>
                ))
            }
        </div>
        );
    }
}

export default ProductDescription;