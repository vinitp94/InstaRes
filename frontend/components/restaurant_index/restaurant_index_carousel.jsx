import React from 'react';
import Slider from 'react-slick';

class RestaurantIndexCarousel extends React.Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 800,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
          {
            this.props.images.map(img => (
              <div><img src={img} /></div>
            ))
          }
        </Slider>
    );
  }
}

export default RestaurantIndexCarousel;

// var React = require('react');
// var Slider = require('react-slick');
//
// var RestaurantIndexCarousel = React.createClass({
//   render: function () {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div><h3>1</h3></div>
//         <div><h3>2</h3></div>
//         <div><h3>3</h3></div>
//         <div><h3>4</h3></div>
//         <div><h3>5</h3></div>
//         <div><h3>6</h3></div>
//       </Slider>
//     );
//   }
// });
// export default RestaurantIndexCarousel;
