const MYAPP = {
  hasSecondPlayer: null,
  playerOneSymbol: null,
  playerTwoSymbol: null,
  timeOuts: [],
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
      .then(MYAPP.display.showGameChoice);
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
    if (MYAPP.hasSecondPlayer) {
      $('.game-starter').children('p').text('Player One: ' + $('.game-starter').children('p').text());
    }
    $('.game-starter').fadeIn(700);
  },
  hideGameStarter: function() {
    return $('.game-starter').fadeOut(600);
  },
  showGameBoard: function() {
    $('.game-board').fadeIn(400);
    MYAPP.display.drawBoard();
    $('#myCanvas').fadeIn(400);

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

};

MYAPP.game = {
  chooseGame: function(playerSelected) {
    return $(playerSelected).text() === "Two Player";
  },
  startGame: function(playerOneSymbol) {
    MYAPP.playerOneSymbol = $(playerOneSymbol).text();
    console.log('playerOne', MYAPP.playerOneSymbol);
    MYAPP.playerTwoSymbol = (MYAPP.playerOneSymbol==='X')? 'X': 'O';
    /* Game board page */
    // work on 2 player logic first
    // draw game baord
    // create player score card, reset button to game choice page, player turn tilt
    $.when(MYAPP.display.hideGameStarter())
    .done(MYAPP.display.showGameBoard);


  },
};



$(document).ready(function() {
  MYAPP.initializeGame();
});