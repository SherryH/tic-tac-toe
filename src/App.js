import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//outer gamebox container
//implement transition, then refactor the outer container to a separate app
//get these down in stateless components first with transition
//use redux to keep track of the states
const App = () => {
  const enterGameStarter = () => {
    {console.log('clicked')}
    return (
      <CSSTransitionGroup
        transitionName="game-starter"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}>
        <div>Example Text testing fading</div>
      </CSSTransitionGroup>
    );
  };
  //put game-choice into a function, like how states are rendered
  //use transition to render the function
  const createGameChoice = () => {
    return (
      <CSSTransitionGroup
        transitionName="game-choice"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}>
        <div className="outer-container">
          <div className="board-container">
            <div className="game-choice">
              <p>How do you want to play?</p>
              <div className="role-control">
                <button>One Player</button>
                <button onClick={enterGameStarter}>Two Players</button>
              </div>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  };

  return (
    <div>
    {createGameChoice()}
    </div>
  );
};

export default App;
