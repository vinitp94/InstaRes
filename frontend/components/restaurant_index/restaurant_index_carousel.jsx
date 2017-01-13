import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

class RestaurantIndexCarousel extends React.Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    };

    return (
      <Slider {...settings}>
        {
          this.props.images.map((img, idx) => (
            <div key={idx}>
              <Link to={`/`}>
                <img src={img} />
              </Link>
            </div>
          ))
        }
      </Slider>
    );
  }
}

export default RestaurantIndexCarousel;
