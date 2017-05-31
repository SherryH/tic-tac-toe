import React from 'react';
import {Link} from 'react-router-dom';

//use react-router-redux to enable links and redirection

const GameStart = () =>{

  return (
        <div className="board-container">
          <div className="game-starter">
            <p>Would you like to be X or O?</p>
            <div className="role-control">
              <button><Link to="/gameboard">X</Link></button>
              <button><Link to="/gameboard">O</Link></button>
            </div>
            <button className="back-button"><Link to="/"> Back</Link></button>
          </div>
        </div>

  );
};

export default GameStart;