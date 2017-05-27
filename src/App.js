import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import GameChoice from './components/GameChoice';
import GameStart from './components/GameStart';
import GameBoard from './components/GameBoard';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render(){
    return (

          <Route render={({location, match})=>{
            return(
              <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={400}
              >
                <Switch key={location.key} location={location}>
                  <Route key={location.key} exact path="/" component = {GameChoice} />
                  <Route key={location.key} path="/gamestart" component={GameStart} />
                  <Route key={location.key} path="/gameboard" component={GameBoard} />
                </Switch>
              </CSSTransitionGroup>
            );

          }}/>


    );
  }

};

