import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const RestaurantIndexReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return merge({}, action.restaurants);
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: {
        id: action.restaurant.id,
        category: action.restaurant.category,
        name: action.restaurant.name,
        price: action.restaurant.price,
        image_urls: action.restaurant.image_urls,
        city: action.restaurant.city }});
    case REMOVE_RESTAURANT:
      let newState = merge({}, state);
      delete newState[action.restaurant.id];
      return newState;
    default:
      return state;
  }
};

export default RestaurantIndexReducer;
