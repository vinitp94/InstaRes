import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Home from './home/home';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';
import RestaurantDetailContainer from './restaurant_detail/restaurant_detail_container';
import RestaurantForm from './restaurant_form/restaurant_form';
import UserProfileContainer from './user_profile/user_profile_container';

// TODO: REDIRECT FROM DETAIL PAGE UNLESS DETAIL PAGE EXISTS
// TODO: REDIRECT UNLESS LOGGED IN PERSON IS CURRENT USER

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/restaurants' component={RestaurantIndexContainer} />
          <Route path='/restaurants/new' component={RestaurantForm} />
          <Route path='/restaurants/:restaurantId' component={RestaurantDetailContainer} />
          <Route path='/profile' component={UserProfileContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
