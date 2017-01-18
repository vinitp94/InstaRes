import React from 'react';
import RestaurantIndexCarousel from './restaurant_index_carousel';

class RestaurantIndexItem extends React.Component {
  priceToSymbol(price) {
    let symbol = [];
    for(let i = 0; i < price; i++) {
      symbol.push('$');
    }
    return symbol.join('');
  }

  ratingToStar(rating) {
    let imageCopies = [];
    for (let i = 0; i < rating; i++) {
      imageCopies.push("http://res.cloudinary.com/dlhshbg79/image/upload/v1484779138/Logomakr_26JXDI_ssodgb.png");
    }
    return (
      <ul id='stars'>
        {
          imageCopies.map((url, idx) => (
            <li key={idx}><img src={url} /></li>
          ))
        }
      </ul>
    );
  }

  render () {
    return (
      <li className='restaurant-index-item'>
        <div className='carousel-container'>
            <RestaurantIndexCarousel
              images={this.props.restaurant.image_urls}
              restaurantId={this.props.restaurant.id}/>
        </div>
        <div className='restaurant-index-caption'>
          <div className='left-caption'>
            <div className='caption-top'>
              <a id='index-item-title'>{this.props.restaurant.name}</a>
            </div>

            <div className='caption-bottom'>
              <a>{this.props.restaurant.category}</a>
              <a>|</a>
              <a>{this.priceToSymbol(this.props.restaurant.price)}</a>
            </div>
          </div>

          <div className='right-caption'>
            <a>{this.ratingToStar(this.props.restaurant.ave_rating)}</a>
            <a id='num-reviews'>{this.props.restaurant.num_reviews} Reviews</a>
          </div>
        </div>
      </li>
    );
  }
}

export default RestaurantIndexItem;
