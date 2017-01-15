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
import { fetchRestaurant } from './actions/restaurant_actions';

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

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});
