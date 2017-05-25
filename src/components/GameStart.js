import React from 'react';
import {Link} from 'react-router-dom';

const GameStart = () =>{

  return (
        <div className="board-container">
          <div className="game-starter">
            <p>Would you like to be X or O?</p>
            <div className="role-control">
              <button>X</button>
              <button>O</button>
            </div>
            <button className="back-button"><Link to="/"> Back</Link></button>
          </div>
        </div>

  );
};

export default GameStart;