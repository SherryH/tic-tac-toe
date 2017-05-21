import React from 'react';

const GameChoice = () =>{

  return (
    <div className="outer-container">
      <div className="board-container">
        <div className="game-choice">
          <p>How do you want to play?</p>
          <div className="role-control">
            <button>One Player</button>
            <button>Two Players</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameChoice;