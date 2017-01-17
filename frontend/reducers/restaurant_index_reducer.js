import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

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
        image_urls: action.restaurant.image_urls }});
    case REMOVE_RESTAURANT:
      let newState = merge({}, state);
      delete newState[action.restaurant.id];
      return newState;
    case RECEIVE_REVIEW:
      let rest = state[action.review.restaurant_id];
      rest.ave_rating = action.review.ave_rating;
      rest.num_reviews = action.review.num_reviews;
      debugger
      return merge({}, state, { [action.review.restaurant_id]: rest });
    case REMOVE_REVIEW:
      let copyRest = state[action.review.restaurant_id];
      rest.ave_rating = action.review.ave_rating;
      rest.num_reviews = action.review.num_reviews;
      return merge({}, state, { [action.review.restaurant_id]: copyRest });
    default:
      return state;
  }
};

export default RestaurantIndexReducer;
