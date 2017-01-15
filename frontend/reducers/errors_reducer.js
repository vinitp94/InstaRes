import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_RESTAURANT_ERRORS } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const _defaultState = {
  sessionErrors: [],
  restaurantErrors: []
};

const ErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _defaultState, { sessionErrors: action.errors });
    case RECEIVE_RESTAURANT_ERRORS:
      return merge({}, _defaultState, { restaurantErrors: action.errors });
    default:
      return state;
  }
};

export default ErrorsReducer;
