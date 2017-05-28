import React from 'react';
import {Link} from 'react-router-dom';

const GameChoice = (props) =>{

  return (
        <div className="board-container">
        {console.log('choice',props, props.ownStates)}
          <div className="game-choice">
            <p>How do you want to play?</p>
            <div className="role-control">
              <button>One Player</button>
              <button><Link to="/gamestart">Two Players</Link></button>
            </div>
          </div>
        </div>

  );
};

export default GameChoice;