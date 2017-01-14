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
            <a>Ave reviews</a>
            <a id='num-reviews'>6 Reviews</a>
          </div>
        </div>
      </li>
    );
  }
}

export default RestaurantIndexItem;
