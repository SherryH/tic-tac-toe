import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';



const ExampleApp = () =>(
  <div>Example app</div>
);

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);