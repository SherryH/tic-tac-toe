const MYAPP = {
  hasSecondPlayer: null,
  playerOneSymbol: null,
  playerTwoSymbol: null,
  isPlayerOneTurn: true,
  winCombos: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
  ],
  currentBoard: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  },
  initializeGame: function() {
    /* Game choice page */
    $('.game-choice button').click(function(){
      MYAPP.hasSecondPlayer = MYAPP.game.chooseGame(this);
      console.log('2nd player',MYAPP.hasSecondPlayer);
      $.when(MYAPP.display.hideGameChoice())
      .done(MYAPP.display.showGameStarter);
    });
    /* Game starter page */
    $('.game-starter .role-control button').click(function() {
      MYAPP.game.startGame(this);

    });

    $('.back-button').click(function() {
      $.when(MYAPP.display.hideGameStarter())
      .done(MYAPP.display.showGameChoice);
    });

    $('.reset').click(function() {
      $.when(MYAPP.display.hideGameBoard())
      .done(MYAPP.display.showGameChoice);
    });

  },
};

MYAPP.display = {
  hideGameChoice: function() {
    return $('.game-choice').fadeOut(600); //needs to return for Promise to work in initialiseGame()
  },
  showGameChoice: function () {
    $('.game-choice').fadeIn(700);
  },
  showGameStarter: function() {
    var msg = 'Would you like to be X or O?';
    if (MYAPP.hasSecondPlayer) {
      msg = 'Player One:' + msg;
    }
    $('.game-starter').children('p').text(msg);
    $('.game-starter').fadeIn(600);
  },
  hideGameStarter: function() {
    return $('.game-starter').fadeOut(600);
  },
  showGameBoard: function() {
    $('.game-board').fadeIn(400);
    MYAPP.display.drawBoard();
    $('#myCanvas').fadeIn(400);
    $('.reset').fadeIn(400);
    $('.scores').fadeIn(400);

  },
  hideGameBoard: function() {
    $('.game-board').fadeOut(400);
    MYAPP.display.drawBoard();
    $('#myCanvas').fadeOut(400);
    $('.scores').fadeOut(400);
    return $('.reset').fadeOut(400);
  },
  drawBoard: function() {
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
  },
  setSquares: function() {
    $('.boxes').html('');
    for (var i = 1; i < 10; i ++) {
      var box = $('<span />').addClass('box').attr('id', i);
      $('.boxes').append(box);
    }
  },
  updateSquares: function(square, symbol) {
    $(square).text(symbol);
  },
};

MYAPP.game = {
  chooseGame: function(playerSelected) {
    return $(playerSelected).text() === "Two Player";
  },
  startGame: function(playerOneSymbol) {
    MYAPP.playerOneSymbol = $(playerOneSymbol).text();
    console.log('playerOne', MYAPP.playerOneSymbol);
    MYAPP.playerTwoSymbol = (MYAPP.playerOneSymbol==='X')? 'O': 'X';
    /* Game board page */
    // work on 2 player logic first
    // draw game baord
    // create player score card, reset button to game choice page, player turn tilt
    $.when(MYAPP.display.hideGameStarter())
    .done(MYAPP.display.showGameBoard);

    /* Game board logic */
    //lay out invisible board boxes according to canvas position
    //set event listener for click, assign symbol
    // box container created in html, no position conflict with canvas
    //http://gridbyexample.com/examples/example1/
    MYAPP.display.setSquares();


    /* Call Game play logic */
    MYAPP.game.play();

  },
  play: function() {
    /* Game Board Page */

    //this event listener must be attached after the squares are set
    $('.box').click(function() {
      var symbol = MYAPP.isPlayerOneTurn? MYAPP.playerOneSymbol: MYAPP.playerTwoSymbol;
      MYAPP.display.updateSquares(this, symbol);
      MYAPP.game.checkGame(this, symbol);
      // Change turn
      MYAPP.isPlayerOneTurn = ! MYAPP.isPlayerOneTurn;
    });

  },
  checkGame: function(square, symbol) {
    //get the id of the clicked square
    var id = $(square).attr('id');
    // mark the currentBoard with ID
    MYAPP.currentBoard[id] = symbol;
    console.log(MYAPP.currentBoard);
  },

};



$(document).ready(function() {
  MYAPP.initializeGame();
});