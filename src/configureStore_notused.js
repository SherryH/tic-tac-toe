import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

//this configures the store that saves states

const configureStore = () =>{
  //it takes in the reducer to subscribe to the dispatched action
  //it can also take in middlewares like redux logger for debuggiing

  // Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory();

  // Build the middleware for intercepting and dispatching navigation actions
  const routerM = routerMiddleware(history);

  //logs will be on even in production environment
  return createStore(combineReducers({
    reducer,
    router: routerReducer,
  }), applyMiddleware(createLogger, routerM));

};

export default configureStore;