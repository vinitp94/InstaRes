import { RECEIVE_RESTAURANT_DETAIL, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESTAURANT_DETAIL:
      return merge({}, action.restaurant);
    case REMOVE_RESTAURANT:
      return {};
    default:
      return state;
  }
};

export default RestaurantDetailReducer;
