//React
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//Components
import Root from './components/root';
import configureStore from './store/store';

//Testing TODO: remove
import { login } from './util/session_api_util';
// import { fetchRestaurant } from './util/restaurant_api_util';
import { fetchRestaurant, createRestaurant, deleteRestaurant } from './actions/restaurant_actions';
// import { createReview, deleteReview } from './util/review_api_util';
import { createReview, deleteReview } from './actions/review_actions';
import { createReservation, deleteReservation } from './actions/reservation_actions';
import { merge, extend } from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.login = login;
  window.fetchRestaurant = fetchRestaurant;
  window.createRestaurant = createRestaurant;
  window.deleteRestaurant = deleteRestaurant;
  window.merge = merge;
  window.extend = extend;
  window.createReview = createReview;
  window.deleteReview = deleteReview;
  window.createReservation = createReservation;
  window.deleteReservation = deleteReservation;


  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});
