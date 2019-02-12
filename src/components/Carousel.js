//Shubham

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Carousel = (props) => {
    settings = { ...settings, ...props.settings };

    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    );
}

Carousel.propTypes = {
    settings: PropTypes.exact({
        dots: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.number,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        autoplay: PropTypes.bool
    }),
}

export default Carousel;