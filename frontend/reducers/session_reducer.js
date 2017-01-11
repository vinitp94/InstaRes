import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullState = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullState, { currentUser: action.currentUser });
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _nullState, { errors: action.errors });
    default:
      return state;
  }
};

export default SessionReducer;
