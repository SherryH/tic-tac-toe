import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GameChoice from './components/GameChoice';
import GameStart from './components/GameStart';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//outer gamebox container
//implement transition, then refactor the outer container to a separate app
//get these down in stateless components first with transition
//use redux to keep track of the states
export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  //put game-choice into a function, like how states are rendered
  //use transition to render the function

  render(){
    return (

          <Route render={({location, match})=>{
            return(
              <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={50}
              >
                <Switch key={location.key} location={location}>
                  {console.log('location',location)}
                  <Route exact path="/" component = {GameChoice} />
                  <Route path="/gamestart" component={GameStart} />
                </Switch>
              </CSSTransitionGroup>
            );

          }}/>


    );
  }

};

