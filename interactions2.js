const MYAPP = {
  hasSecondPlayer: null,
  playerOneSymbol: null,
  playerTwoSymbol: null,
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
};

MYAPP.game = {
  chooseGame: function(playerSelected) {
    return $(playerSelected).text() === "Two Player";
  },
  startGame: function(playerOneSymbol) {
    MYAPP.playerOneSymbol = $(playerOneSymbol).text();
    console.log('playerOne', MYAPP.playerOneSymbol);
  },
};



$(document).ready(function() {
  MYAPP.initializeGame();
});