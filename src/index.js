import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer';
import reducer from './reducer/reducer';



const ExampleApp = () =>(
  <div>Example app</div>
);

//store contains all states, subscribes to the actions by taking in reducer
const store = createStore(reducer,applyMiddleware(logger));
console.log('index',store);

render(
  <Provider store={store}>
    <Router>
      <div className="center-container">
        <div className="outer-container">
            <AppContainer/>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);