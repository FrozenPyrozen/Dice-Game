# Dice-Game
 A simple Dice Game in browser.

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Anne, begins a turn with a roll of 5. Anne could hold and score 5 points, but chooses to roll again.
Anne rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Anne rolls a 1, and must end her turn without scoring. 
The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score.
When a player reaches a total of 100 or more points, the game ends and that player is the winner.
When a player has twice the number 6 in a row, his score is reseted and the turn is passed to the next player.

# Watch how it works!
You can try it here -> https://frozenpyrozen.github.io/Dice-Game/
