import React from 'react';

const GameBoard = () =>{

  return (
        <div className="board-container">
          <div className="game-board">
            <canvas id="myCanvas"></canvas>
            <div className="boxes"></div>
          </div>
        </div>

  );
};

export default GameBoard;