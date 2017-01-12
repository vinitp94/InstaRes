import React from 'react';
import { Link } from 'react-router';
import RestaurantIndexCarousel from './restaurant_index_carousel';

// TODO: Add 'add review' and 'book table' buttons

const RestaurantIndexItem = ({ restaurant }) => (
  <li className='restaurant_index_item'>
    <Link id='container' to={`/restaurants`}>
        <RestaurantIndexCarousel images={restaurant.image_urls}/>
    </Link>
    <div className='restaurant-index-caption'>
      <p>{restaurant.name}</p>
      <p>{restaurant.category}</p>
      <p>{restaurant.price}</p>
    </div>
  </li>
);

export default RestaurantIndexItem;
