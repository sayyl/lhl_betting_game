$(document).ready(function() {
  var amount = 100;

  $('.start-game').on('click', function() {
    var test = $('div.game').children('p.bankroll');
    if(test.length === 0) {
      var bank = $('<p>')
      .text('You have $'+amount+' in the bank.')
      .addClass('bankroll')
      .insertBefore($('.playing'));
    }
    $(this).closest('.game').find('.playing').show();
  });

  $('.guess').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var compNumber = Math.floor(Math.random() * 10) + 1;
    var playerBet = $('.player-bet').val();
    playerBet = parseInt(playerBet, 10);
    var playerGuess = $('.player-guess').val();
    playerGuess = parseInt(playerGuess, 10);

    if(playerGuess === compNumber) {
      amount += playerBet;
      $(this).closest('.game').find('.correct-guess').show()
      .fadeOut(1000);
    }
    else if (((playerGuess +1) === compNumber)  || ((playerGuess -1) === compNumber)) {
      $(this).closest('.game').find('.off-by-one').show()
      .fadeOut(1000);
    }
    else {
      amount -= playerBet;
      $(this).closest('.game').find('.wrong-guess').show()
      .fadeOut(1000);
    }

    $('.bankroll').remove();
    var newBank = $('<p>')
    .text('Your current bank amount is at $'+amount+'.')
    .addClass('bankroll')
    .insertBefore($('.playing'));

    if(amount === 0) {
      $(this).closest('.game').find('.restart').show();
      $('.restart').on('click', function() {
        amount = 100;
        $('.bankroll').remove();
        var newBank = $('<p>')
        .text('Your current bank amount is at $'+amount+'.')
        .addClass('bankroll')
        .insertBefore($('.playing'))
        $(this).remove();
      });
    }
    
  });
});