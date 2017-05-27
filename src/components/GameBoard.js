import React from 'react';

export default class GameBoard extends React.Component {
  constructor(props){
    super(props);
    this.drawBoard = this.drawBoard.bind(this);
  }
  componentDidMount(){
    this.drawBoard();
  }

  drawBoard (){
    /*show game board*/
    var c = document.getElementById("myCanvas");
    var canvas = c.getContext("2d");
    canvas.lineWidth = 1;
    canvas.strokeStyle = "#fff";
    //vertical lines
    canvas.beginPath();
    canvas.moveTo(100, 0);
    canvas.lineTo(100, 146.5);
    canvas.closePath();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(200, 0);
    canvas.lineTo(200, 146.5);
    canvas.closePath();
    canvas.stroke();

    // horizontal lines
    canvas.lineWidth = 0.5;

    canvas.beginPath();
    canvas.moveTo(4, 48.5);
    canvas.lineTo(296, 48.5);
    canvas.closePath();
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(4, 98.5);
    canvas.lineTo(296, 98.5);
    canvas.closePath();
    canvas.stroke();
  }

  render(){
    return (
          <div className="board-container">
            <div className="game-board">
              <canvas id="myCanvas"></canvas>
              <div className="boxes"></div>
            </div>
          </div>

    );
  }
}


