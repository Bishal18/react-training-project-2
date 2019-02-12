import React, { PureComponent } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

class Carousel extends PureComponent {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        settings = { ...settings, ...this.props.settings };
        
        return (
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        );
    }
}

Carousel.propTypes ={
    settings : PropTypes.exact({
        dots: PropTypes.bool,
        infinite: PropTypes.bool,
        speed: PropTypes.number,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number,
        autoplay: PropTypes.bool
      }),
}

export default Carousel;