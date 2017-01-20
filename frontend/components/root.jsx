import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/error_actions';
import { fetchRestaurant } from '../actions/restaurant_actions';
import App from './app';
import Home from './home/home';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';
import RestaurantDetailContainer from './restaurant_detail/restaurant_detail_container';
import RestaurantFormContainer from './restaurant_form/restaurant_form_container';
import UserProfileContainer from './user_profile/user_profile_container';

const Root = ({store}) => {
  const _requireLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  };

  const _clearErrors = () => {
    store.dispatch(clearErrors);
  };

  const _requireUser = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    } else {
      let userRestaurants = Object.keys(store.getState().session.currentUser.restaurants);
      if (!userRestaurants.includes(nextState.params.restaurantId)) {
        replace(`/restaurants/${nextState.params.restaurantId}`);
      }
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App }>
          <IndexRoute component={ Home } />
          <Route path='/restaurants/new' component={ RestaurantFormContainer } onEnter={_requireLogin} onLeave={_clearErrors} />
          <Route path='/restaurants/index/:city' component={ RestaurantIndexContainer } onLeave={_clearErrors} />
          <Route path='/restaurants/:restaurantId/edit' component={ RestaurantFormContainer } onEnter={_requireUser} onLeave={_clearErrors} />
          <Route path='/restaurants/:restaurantId' component={ RestaurantDetailContainer } onLeave={_clearErrors} />
          <Route path='/profile' component={ UserProfileContainer } onEnter={_requireLogin} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
