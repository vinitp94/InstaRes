import { RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge } from 'lodash';

const RestaurantDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_RESTAURANT:
      return merge({}, action.restaurant);
    case REMOVE_RESTAURANT:
      return {};
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
      debugger
      return restCopy;
    case REMOVE_REVIEW:
      let copyRest = merge({}, state);
      copyRest.ave_rating = action.review.ave_rating;
      copyRest.num_reviews = action.review.num_reviews;
      delete copyRest.reviews[action.review.id];
      return copyRest;
    default:
      return state;
  }
};

export default RestaurantDetailReducer;
