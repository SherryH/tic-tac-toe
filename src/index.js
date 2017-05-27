import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';



const ExampleApp = () =>(
  <div>Example app</div>
);

//store contains all states, subscribes to the actions by taking in reducer
const store = createStore(reducer, applyMiddleware(createLogger());

render(
  <Router>
    <div className="center-container">
      <div className="outer-container">
          <App/>
      </div>
    </div>
  </Router>,
  document.getElementById('app')
);