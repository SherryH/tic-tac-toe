import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import App from './App';
import GameChoice from './components/GameChoice';
import GameStart from './components/GameStart';


const ExampleApp = () =>(
  <div>Example app</div>
);

render(
  <Router>
    <div>
      <Route exact path="/" component = {GameChoice} />
      <Route path="/gamestart" component={GameStart} />
    </div>
  </Router>,
  document.getElementById('app')
);