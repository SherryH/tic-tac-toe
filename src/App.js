import React from 'react';

//outer gamebox container
const App = () => {
  return (
    <div className="outer-container">
      <div className="board-container">
        <div className="game-choice">
          <p>How do you want to play?</p>
          <div className="role-control">
            <button>One Player</button>
            <button>Two Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
