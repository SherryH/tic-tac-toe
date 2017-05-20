import React from 'react';
import {render} from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import App from './App';


render(
  <Router history={hashHistory}>
    <Route path="/" component = {App}>
      <IndexRoute component={GameChoice}>
      <Route path="gamestart" component={GameStart}/>
    </Route>
  </Router>
  <App />,
  document.getElementById('app')
);