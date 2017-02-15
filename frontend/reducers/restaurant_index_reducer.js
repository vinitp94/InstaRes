import { RECEIVE_ALL_RESTAURANTS } from '../actions/restaurant_actions';
import { merge } from 'lodash';

const RestaurantIndexReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return merge({}, action.restaurants);
    default:
      return state;
  }
};

export default RestaurantIndexReducer;
