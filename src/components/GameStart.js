import React from 'react';

const GameStart = () =>{

  return (
    <div className="center-container">
    <div className="outer-container">
      <div className="board-container">
        <div className="game-starter">
          <p>Would you like to be X or O?</p>
          <div className="role-control">
            <button>X</button>
            <button>O</button>
          </div>
          <button className="back-button"><i className="fa fa-arrow-left"></i> Back</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GameStart;