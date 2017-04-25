const MYAPP = {
  secondPlayer: null,
  playerOneSymbol: null,
  playerTwoSymbol: null,
  initializeGame: function() {
    $('.game-choice button').click(function(){
      MYAPP.secondPlayer = MYAPP.game.chooseGame(this);
      console.log('2nd player',MYAPP.secondPlayer);
      $.when(MYAPP.display.hideGameChoice())
      .done(MYAPP.display.showGameStarter);
    });

    $('.game-starter .role-control button').click(function() {
      MYAPP.game.startGame(this);
    });
  },
};

MYAPP.display = {
  hideGameChoice: function(callback) {
    return $('.game-choice').fadeOut(600); //needs to return for Promise to work in initialiseGame()
  },
  showGameStarter: function() {
    if (MYAPP.secondPlayer) {
      $('.game-starter').children('p').text('Player One: ' + $('.game-starter').children('p').text());
    }
    $('.game-starter').fadeIn(700);
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