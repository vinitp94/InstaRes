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
          <p>{this.props.restaurant.name}</p>
          <p>{this.props.restaurant.category}</p>
          <p>{this.priceToSymbol(this.props.restaurant.price)}</p>
        </div>
      </li>
    );
  }
}

export default RestaurantIndexItem;
