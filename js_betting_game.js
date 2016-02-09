/*
- player starts off $100
- prompt player to place bet between $5 - $10
- prompt player to guess num between 1-10
- number is generated randomely by computer
- if player guesses exact number
  - then bankroll += bet 
  - alert player of what happened w congratulations
- else if guess is +1 or -1 computer answer
  - then bankroll doesn't change
  - alert answer within 1
- else
  - then bankroll -= bet
  - alert player of what happened w sorry
- end
*/

function bettingGame () {
  var bankroll = 100;

    var start = alert('You are starting with $100. Let\'s pay a guessing game!')

  while (bankroll > 0) {
    var compGuess = Math.floor(Math.random() * 10) + 1;

    q = prompt('Place a bet between $5 - $10.');
    q = parseInt(q, 10);
    playerGuess = prompt('Guess a number between 1 - 10');
    playerGuess = parseInt(playerGuess, 10);

    if (playerGuess === compGuess) {
      alert('Congratulations, you got the right answer! ' + q + ' has been added to your bank.');
      bankroll += q;
    }

    else if (((playerGuess +1) === compGuess)  || ((playerGuess -1) === compGuess)) {
      alert('Off by one! No money is taken from your bank.');
    }

    else {
      alert('Sorry, you got the wrong answer. ' + q + ' has been subtracted from your bank.');
      bankroll -= q;
    }
    // console.log('money left in bank ' + bankroll);
    // console.log('my guess ' + playerGuess);
    // console.log('computer guess ' + compGuess);
  }
}

