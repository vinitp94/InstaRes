import { receiveSessionErrors } from './session_actions';
import { receiveRestaurantErrors } from './restaurant_actions';

export const clearErrors = (dispatch) => {
  debugger
  dispatch(receiveSessionErrors());
  dispatch(receiveRestaurantErrors());
};
