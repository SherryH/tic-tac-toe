import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import AppContainer from './AppContainer';
import reducer from './reducer/reducer';



const ExampleApp = () =>(
  <div>Example app</div>
);

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routerM = routerMiddleware(history);

//store contains all states, subscribes to the actions by taking in reducer
const store = createStore(combineReducers({
  reducer,
  router: routerReducer,
}),applyMiddleware(logger, routerM));

console.log('index',store);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="center-container">
        <div className="outer-container">
            <AppContainer/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);