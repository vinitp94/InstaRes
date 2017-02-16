import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_FAVORITE, UPDATE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';
import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from '../actions/reservation_actions';
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
      if (state.currentUser && state.currentUser.id === action.restaurant.owner_id) {
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
      }
      return state;
    case REMOVE_RESTAURANT:
      let newRests = merge({}, state.currentUser.restaurants);
      delete newRests[action.restaurant.id];
      return { currentUser: extend({}, state.currentUser, { restaurants: newRests })};
    case RECEIVE_REVIEW:
      let newReviews = merge({}, state.currentUser.reviews, { [action.review.id]: {
        id: action.review.id,
        rating: action.review.rating,
        body: action.review.body,
        restaurant_name: action.review.restaurant_name,
        created_at: action.review.created_at }});
      return { currentUser: extend({}, state.currentUser, { reviews: newReviews })};
    case REMOVE_REVIEW:
      let newRevs = merge({}, state.currentUser.reviews);
      delete newRevs[action.review.id];
      return { currentUser: extend({}, state.currentUser, { reviews: newRevs })};
    case RECEIVE_FAVORITE:
      let newFavorites = merge({}, state.currentUser.favorites, { [action.favoriteRestaurant.id]: {
        id: action.favoriteRestaurant.id,
        name: action.favoriteRestaurant.name,
        city: action.favoriteRestaurant.city,
        state: action.favoriteRestaurant.state,
        category: action.favoriteRestaurant.category,
        price: action.favoriteRestaurant.price,
        image_urls: action.favoriteRestaurant.image_urls,
        favorite_id: action.favoriteRestaurant.favorite_id }});
      return { currentUser: extend({}, state.currentUser, { favorites: newFavorites })};
    case UPDATE_FAVORITE:
      if (Object.keys(state.currentUser.favorites).includes(`${action.favoriteRestaurant.id}`)) {
        let upFaves = merge({}, state.currentUser.favorites, { [action.favoriteRestaurant.id]: {
          id: action.favoriteRestaurant.id,
          name: action.favoriteRestaurant.name,
          city: action.favoriteRestaurant.city,
          state: action.favoriteRestaurant.state,
          category: action.favoriteRestaurant.category,
          price: action.favoriteRestaurant.price,
          image_urls: action.favoriteRestaurant.image_urls,
          favorite_id: state.currentUser.favorites[action.favoriteRestaurant.id].favorite_id }});
        return { currentUser: extend({}, state.currentUser, { favorites: upFaves })};
      }
      return state;
    case REMOVE_FAVORITE:
      let newFaves = merge({}, state.currentUser.favorites);
      delete newFaves[action.favoriteRestaurant.id];
      return { currentUser: extend({}, state.currentUser, { favorites: newFaves })};
    case RECEIVE_RESERVATION:
      let newReserve = merge({}, state.currentUser.reservations, { [action.reservation.id]: {
        id: action.reservation.id,
        slot: action.reservation.slot,
        party_size: action.reservation.party_size,
        restaurant_id: action.reservation.restaurant_id,
        image_urls: action.reservation.image_urls,
        name: action.reservation.name }});
      return { currentUser: extend({}, state.currentUser, { reservations: newReserve })};
    case REMOVE_RESERVATION:
      let newReservations = merge({}, state.currentUser.reservations);
      delete newReservations[action.reservation.id];
      return { currentUser: extend({}, state.currentUser, { reservations: newReservations })};
    default:
      return state;
  }
};

export default SessionReducer;
