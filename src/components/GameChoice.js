import React from 'react';
import {Link} from 'react-router-dom';

const GameChoice = () =>{

  return (
    <div className="center-container">
    <div className="outer-container">
      <div className="board-container">
        <div className="game-choice">
          <p>How do you want to play?</p>
          <div className="role-control">
            <button>One Player</button>
            <button><Link to="/gamestart">Two Players</Link></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GameChoice;