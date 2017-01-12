import React from 'react';
import { Link } from 'react-router';

const RestaurantIndexItem = ({ restaurant }) => (
  <li>

    <p>{restaurant.name}</p>
  </li>
);

export default RestaurantIndexItem;
