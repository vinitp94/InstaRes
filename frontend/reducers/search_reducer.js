import { RECEIVE_SEARCH } from '../actions/search_actions';
import { merge } from 'lodash';

const _nullState = Object.freeze({
  address: null
});

const SearchReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH:
      return merge({}, { address: action.address });
    default:
      return state;
  }
};

export default SearchReducer;
