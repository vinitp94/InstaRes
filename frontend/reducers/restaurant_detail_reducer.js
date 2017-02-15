import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_RESERVATION } from '../actions/reservation_actions';
import { merge } from 'lodash';

const RestaurantDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, action.restaurant);
    case RECEIVE_REVIEW:
      let restCopy = merge({}, state);
      restCopy.ave_rating = action.review.ave_rating;
      restCopy.num_reviews = action.review.num_reviews;
      let newReviews = merge({}, state.reviews, { [action.review.id]: {
        id: action.review.id,
        rating: action.review.rating,
        body: action.review.body,
        created_at: action.review.created_at }});
      restCopy.reviews = newReviews;
      return restCopy;
    case RECEIVE_RESERVATION:
      let newReserve = merge({}, state.reservations, { [action.reservation.id]: {
        id: action.reservation.id,
        party_size: action.reservation.party_size,
        slot: action.reservation.slot }});
      return merge({}, state, { reservations: newReserve });
    default:
      return state;
  }
};

export default RestaurantDetailReducer;
