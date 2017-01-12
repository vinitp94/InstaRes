import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='/restaurants' component={RestaurantIndexContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
