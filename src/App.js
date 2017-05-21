import React from 'react';
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
      <div>
        {this.props.children}
      </div>
    );
  }

};

