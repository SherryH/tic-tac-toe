import React from 'react';
import {Link} from 'react-router-dom';
import {setPlayerNum} from '../actionCreator/action';

const GameChoice = (props) => {

  const is2Player = (event, num) => {
    setPlayerNum(num === 2);
  };

  return (
        <div className="board-container">
        {console.log('choice',props)}
          <div className="game-choice">
            <p>How do you want to play?</p>
            <div className="role-control">
              <button>One Player</button>
              <button data-player-num={2} onClick={(e)=>is2Player(e,2)}><Link to="/gamestart">Two Players</Link></button>
            </div>
          </div>
        </div>

  );
};

export default GameChoice;