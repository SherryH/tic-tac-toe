const MYAPP = {
  initializeGame: function() {
    $('.game-choice button').click(function(){

      $.when(MYAPP.display.hideGameChoice())
      .done(MYAPP.display.showGameStarter);

    });
  },
};

MYAPP.display = {
  hideGameChoice: function(callback) {
    return $('.game-choice').fadeOut(600);
  },
  showGameStarter: function() {
    $('.game-starter').fadeIn(700);
  }
};



$(document).ready(function() {
  MYAPP.initializeGame();
});