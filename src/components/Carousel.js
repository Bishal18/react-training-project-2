import React, { PureComponent } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default Carousel;