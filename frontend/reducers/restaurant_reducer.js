import { RECEIVE_ALL_RESTAURANTS, REMOVE_RESTAURANT, RECEIVE_RESTAURANT_ERRORS } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const _defaultState = {
  restaurants: {},
  errors: []
};

const RestaurantReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return merge({}, { restaurants: action.restaurants });
    case REMOVE_RESTAURANT:
      let newState = merge({}, state);
      delete newState.restaurants[action.restaurant.id];
      return newState;
    case RECEIVE_RESTAURANT_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default RestaurantReducer;
