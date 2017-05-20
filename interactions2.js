const MYAPP = {
  hasSecondPlayer: null,
  playerOneSymbol: null,
  playerTwoSymbol: null,
  isPlayerOneTurn: true,
  playerOneScore: 0,
  playerTwoScore: 0,
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
      MYAPP.playerOneScore = 0;
      MYAPP.playerTwoScore = 0;
      $('#player1-score').text('0');
      $('#player2-score').text('0');
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
      msg = 'Player One: ' + msg;
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
    if ($(square).text()==='') {
      $(square).text(symbol);
    }
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
    //show the playerOneFlag when the game starts
    $('.player1-turn').animate({'margin-top':'-80px'});

    //this event listener must be attached after the squares are set
    $('.box').click(function() {
      var symbol = MYAPP.isPlayerOneTurn? MYAPP.playerOneSymbol: MYAPP.playerTwoSymbol;
      MYAPP.game.switchPlayerTurnPromp();
      MYAPP.display.updateSquares(this, symbol);
      MYAPP.game.checkGame(this, symbol);
      //check win
      MYAPP.game.checkWin(symbol);
      //check draw
      if (MYAPP.game.checkDraw()) {
        console.log('this is a draw');
        MYAPP.game.restart();
      }

      // Change turn
      MYAPP.isPlayerOneTurn = ! MYAPP.isPlayerOneTurn;
    });
  },
  switchPlayerTurnPromp: function(){
    var playerTurnFlagClass = MYAPP.isPlayerOneTurn? '.player1-turn' : '.player2-turn';
    if (!MYAPP.isPlayerOneTurn) {
      $('.player1-turn').animate({'margin-top': '-80px'},700);
      $('.player2-turn').animate({'margin-top': '-20px'},700);
    } else {
      $('.player1-turn').animate({'margin-top': '-20px'},700);
      $('.player2-turn').animate({'margin-top': '-80px'},700);
    }
  },
  hidePlayerTurnPromp: function(){
    $('.player1-turn').animate({'margin-top': '-20px'},700);
    $('.player2-turn').animate({'margin-top': '-20px'},700);
  },
  checkGame: function(square, symbol) {
    //get the id of the clicked square
    var id = $(square).attr('id');
    // mark the currentBoard with ID
    MYAPP.currentBoard[id] = symbol;
    console.log(MYAPP.currentBoard);
  },
  checkWin: function(symbol) {
    //check currentBoard
    // 1. any symbol occupied winCombos
    // check if  currentPlayer has won
    var winCombo = MYAPP.winCombos.filter(function(combination){
      // check if the currentBoard has the index in combination
      return combination.every(function(winningId) {
        return (MYAPP.currentBoard[winningId] === symbol);
      });
    });
    //change style of winning square
    if (winCombo.length > 0) {
      for (var i = 0; i < winCombo[0].length; i++) {
        $('#'+ winCombo[0][i]).addClass('win');
      }
    }
    //return winCombo.length > 0;

    // if someone wins
    if (winCombo.length > 0) {
      //display message to winner
      var msg = MYAPP.isPlayerOneTurn? 'Player One': 'Player Two';
      msg = 'Congrats ' + msg + ' You have won! :D';
      $('.win-message').children('p').text(msg);
      $('.win-message').fadeIn(1600);
      $('.win-message').fadeOut(600);
      //increment winner's score

      //refactor the score into a separate function
      var scoreNode;
      var currentScore;
      if (MYAPP.isPlayerOneTurn) {
        scoreNode = '#player1-score';
        MYAPP.playerOneScore++;
        currentScore = MYAPP.playerOneScore;
      } else {
        scoreNode = '#player2-score';
        MYAPP.playerTwoScore++;
        currentScore = MYAPP.playerTwoScore;
      }
      $(scoreNode).text(currentScore);

      //restart the game round, keep the score
      //this restart function will run before win-message fades out so that the squares will disappear simulaneously
      MYAPP.game.restart();
      //Todo: make sure correct player is awarded score. player2 gets score everytime
      //Make the player flag disappear with reset
      //Draw is displayed
    }
  },
  restart: function(){
    //clear the records from board
    $.when($('.box').fadeOut(1000))
    .done(function(){
      $('.box').fadeIn();
      MYAPP.display.setSquares();
      for (var props in MYAPP.currentBoard){
        MYAPP.currentBoard[props] = '';
      }
      MYAPP.game.hidePlayerTurnPromp();
      MYAPP.game.play();

    });
  },
  checkDraw: function() {
    return Object.values(MYAPP.currentBoard).every(function(square){
      return square !== '';
    });
  },
};



$(document).ready(function() {
  MYAPP.initializeGame();
});