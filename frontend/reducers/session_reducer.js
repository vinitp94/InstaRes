import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { merge, extend } from 'lodash';

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
        city: action.restaurant.city,
        num_reviews: action.restaurant.num_reviews,
        ave_rating: action.restaurant.ave_rating }});
      return { currentUser: extend({}, state.currentUser, { restaurants: newRestaurants })};
    case REMOVE_RESTAURANT:
      let newRests = merge({}, state.currentUser.restaurants);
      delete newRests[action.restaurant.id];
      return { currentUser: extend({}, state.currentUser, { restaurants: newRests })};
    case RECEIVE_REVIEW:
      let newReviews = merge({}, state.currentUser.reviews, { [action.review.id]: {
        id: action.review.id,
        rating: action.review.rating,
        body: action.review.body,
        created_at: action.review.created_at }});
      debugger
      return { currentUser: extend({}, state.currentUser, { reviews: newReviews })};
    case REMOVE_REVIEW:
      let newRevs = merge({}, state.currentUser.reviews);
      delete newRevs[action.review.id];
      return { currentUser: extend({}, state.currentUser, { reviews: newRevs })};
    default:
      return state;
  }
};

export default SessionReducer;
