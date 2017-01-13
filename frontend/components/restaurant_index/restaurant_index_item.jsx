import React from 'react';
import RestaurantIndexCarousel from './restaurant_index_carousel';

const RestaurantIndexItem = ({ restaurant }) => (
  <li className='restaurant-index-item'>
    <div className='carousel-container' to={`/restaurants`}>
        <RestaurantIndexCarousel images={restaurant.image_urls}/>
    </div>
    <div className='restaurant-index-caption'>
      <p>{restaurant.name}</p>
      <p>{restaurant.category}</p>
      <p>{restaurant.price}</p>
    </div>
  </li>
);

export default RestaurantIndexItem;
