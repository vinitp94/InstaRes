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
        image_urls: action.restaurant.image_urls,
        ave_rating: action.restaurant.ave_rating,
        num_reviews: action.restaurant.num_reviews }});
    case REMOVE_RESTAURANT:
      let newState = merge({}, state);
      delete newState[action.restaurant.id];
      return newState;
    case RECEIVE_REVIEW:
      if (Object.keys(state).includes(action.review.restaurant_id)) {
        let rest = state[action.review.restaurant_id];
        rest.ave_rating = action.review.ave_rating;
        rest.num_reviews = action.review.num_reviews;
        return merge({}, state, { [action.review.restaurant_id]: rest });
      }
      return state;
    case REMOVE_REVIEW:
      if (Object.keys(state).includes(action.review.restaurant_id)) {
        let copyRest = state[action.review.restaurant_id];
        copyRest.ave_rating = action.review.ave_rating;
        copyRest.num_reviews = action.review.num_reviews;
        return merge({}, state, { [action.review.restaurant_id]: copyRest });
      }
      return state;
    default:
      return state;
  }
};

export default RestaurantIndexReducer;
