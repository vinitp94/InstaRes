import { RECEIVE_RESTAURANT, REMOVE_RESTAURANT, RECEIVE_RESTAURANT_ERRORS } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const _defaultState = {
  restaurant: {},
  errors: []
};

const RestaurantDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, _defaultState, { restaurant: action.restaurant });
    case REMOVE_RESTAURANT:
      return {};
    case RECEIVE_RESTAURANT_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default RestaurantDetailReducer;
