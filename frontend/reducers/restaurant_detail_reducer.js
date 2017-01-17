import { RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const RestaurantDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, action.restaurant);
    case REMOVE_RESTAURANT:
      return {};
    default:
      return state;
  }
};

export default RestaurantDetailReducer;
