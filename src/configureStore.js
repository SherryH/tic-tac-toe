import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

//this configures the store that saves states

const configureStore = () =>{
  //it takes in the reducer to subscribe to the dispatched action
  //it can also take in middlewares like redux logger for debuggiing

  //logs will be on even in production environment
  return createStore(reducer, applyMiddleware(createLogger));

};

export default configureStore;