import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const _nullState = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullState, { currentUser: action.currentUser });
    case RECEIVE_RESTAURANT:
      let newRestaurants = merge({}, state.currentUser.restaurants, { [action.restaurant.id]: {
        id: action.restaurant.id,
        category: action.restaurant.category,
        name: action.restaurant.name,
        price: action.restaurant.price,
        image_urls: action.restaurant.image_urls,
        city: action.restaurant.city }});
      return { currentUser: merge({}, state.currentUser, { restaurants: newRestaurants }) };
    default:
      return state;
  }
};

export default SessionReducer;
