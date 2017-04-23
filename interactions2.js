const MYAPP = {
  initializeGame: function() {
    $('.game-choice button').click(function(){
      MYAPP.display.hideGameChoice(MYAPP.display.showGameStarter);
    });
  },
};

MYAPP.display = {
  hideGameChoice: function(callback) {
    $('.game-choice').fadeOut({
      duration: 600,
      done: callback,
    });
  },
  showGameStarter: function() {
    $('.game-starter').fadeIn(700);
  }
};



$(document).ready(function() {
  MYAPP.initializeGame();
});