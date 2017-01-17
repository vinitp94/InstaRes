import { receiveSessionErrors } from './session_actions';
import { receiveRestaurantErrors } from './restaurant_actions';
import { receiveReviewErrors } from './review_actions';

export const clearErrors = (dispatch) => {
  dispatch(receiveSessionErrors());
  dispatch(receiveRestaurantErrors());
  dispatch(receiveReviewErrors());
};
