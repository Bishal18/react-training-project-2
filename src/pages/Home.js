//Manoj, Shubham, Ankit, Rathan

import React from 'react';
import Carousel from '../components/Carousel';
import config from '../configs/config';
import ProductSection from '../containers/ProductSection';

const carouselSettings = {
    autoplay: true
}
const Home = () => {
    return (
        <div>
            <Carousel settings={carouselSettings}>
                {
                    config.carouselImages.map((image, index) => (
                        <img key={index}
                            src={image.url}
                            alt={image.name} />
                    ))
                }
            </Carousel>
            <br />
            <hr />
            <h2>Top Selling Products</h2>
            <ProductSection type={config.listingType.topProductsListing} />
        </div>

    )
}

export default Home;