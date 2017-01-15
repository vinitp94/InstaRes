import { receiveSessionErrors } from './session_actions';
import { receiveRestaurantErrors } from './restaurant_actions';

export const clearErrors = (dispatch) => {
  dispatch(receiveSessionErrors());
  dispatch(receiveRestaurantErrors());
};
