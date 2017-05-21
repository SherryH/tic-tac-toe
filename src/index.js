import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import GameChoice from './components/GameChoice';
import GameStart from './components/GameStart';


render(
  <Router>
    <div>
      <Route exact path="/" component = {GameChoice} />
      <Route path="/gamestart" component={GameStart} />
    </div>
  </Router>,
  document.getElementById('app')
);