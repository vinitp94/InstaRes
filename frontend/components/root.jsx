import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

const Root = ({store}) => {

  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (currentUser) {
  //     replace('/');
  //   }
  // };
  // <Route path='/login' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
  // <Route path='/signup' component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
