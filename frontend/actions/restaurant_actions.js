import * as RestaurantAPIUtil from '../util/restaurant_api_util';

export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';

export const receiveAllRestaurants = (restaurants) => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = (restaurant) => ({
  type: REMOVE_RESTAURANT,
  restaurant
});

export const receiveRestaurantErrors = (errors) => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
});

export const fetchRestaurants = () => (dispatch) => (
  RestaurantAPIUtil.fetchRestaurants()
    .then(rests => dispatch(receiveAllRestaurants(rests)),
          err => dispatch(receiveRestaurantErrors(err.responseJSON)))
);

export const fetchRestaurant = (id) => (dispatch) => (
  RestaurantAPIUtil.fetchRestaurant(id)
    .then(rest => dispatch(receiveRestaurant(rest)),
          err => dispatch(receiveRestaurantErrors([err.statusText])))
);

export const createRestaurant = (rest) => (dispatch) => (
  RestaurantAPIUtil.createRestaurant(rest)
    .then(newrest => dispatch(receiveRestaurant(newrest)),
          err => dispatch(receiveRestaurantErrors(err.responseJSON)))
);

export const udpateRestaurant = (rest) => (dispatch) => (
  RestaurantAPIUtil.udpateRestaurant(rest)
    .then(uprest => dispatch(receiveRestaurant(uprest)),
          err => dispatch(receiveRestaurantErrors(err.responseJSON)))
);

export const deleteRestaurant = (id) => (dispatch) => (
  RestaurantAPIUtil.deleteRestaurant(id)
    .then(remrest => dispatch(removeRestaurant(remrest)),
          err => dispatch(receiveRestaurantErrors(err.responseJSON)))
);
