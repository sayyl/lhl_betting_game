Part I - Logic
Write a single-player betting game that runs in the browser. The player starts off with a bankroll of $100 and bets money to guess a number randomly chosen by the game. If the player loses all their money, the game ends.

The game should ask the player to place a bet between $5 and $10, then to guess a number between 1 and 10.

If the player guesses the exact number chosen by the game, they win the bet and their bankroll increases by the amount they bet. For example, if the player has $50, bets $10 on number 7, and the game chose the number 7, then the player wins $10 and now has a bankroll of $60.

If the player guesses a number that is off by 1, that is, the player guesses either one number higher or one number lower than the computer's pick, they don't lose any money. For example, if the player has $50, bets $10 on number 7, and the game chose the number 8, then the player keeps their bet and still has a bankroll of $50.

If the player guesses any other number, they lose the bet and their bankroll decreases by the amount they bet. For example, if the player has $50, bets $10 on number 7, and the game chose the number 2, then the player loses $10 and now has a bankroll of $40.

Use prompt and alert to communicate with the user.


Part II - UI
Add jQuery to the page and change the game so that instead of using prompt and alert for I/O, it uses form fields and the DOM respectively.

You'll need to download jQuery first. You can find the latest versions on jQuery's website. Since you're likely not going to run your code in Internet Explorer 8 or older, the latest 2.x version is what you want. Whether you download the uncompressed development or the minified production version is up to you – the difference is that the minified version is smaller in size and therefore downloads faster, but will be unreadable if you'd like to take a look through jQuery's code to better understand its inner workings.

You will have to add a script tag inside your html <head> tag. Assuming you've saved a filed called jquery-2.1.4.min.js in the same directory as your betting game html file, that will look like the following.

<head>
  ...
  <script src="jquery-2.1.4.min.js"></script>
</head>
Use this opportunity to experiment and get more comfortable with layout, CSS and even UI/UX.

Part II - Enhancements (with UI changes)
Enhance the game in whichever way is interesting to you. Some ideas:

Ability to restart the game (restart button shows at the end).
Represent the player's money as inidividual DOM elements that fade away as the player loses money. When the player gets more money, additional elements appear in their bank account.
