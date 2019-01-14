/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, isPlaying; // prevDices = []

init();


// Add event for roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (isPlaying) {

    // 1. Generate Random number
    var diceFirst = Math.floor(Math.random() * 6) + 1;
    var diceSec = Math.floor(Math.random() * 6) + 1;

    // 2. Show img with result
    // var diceDOM = document.querySelectorAll('.dice');
    // for (var i = 0; i < diceDOM.length; i++) {
    //   diceDOM[i].style.display = 'block';
    // }
    //diceDOM.style.display = 'block';
    // diceDOM.src = './img/dice-' + dice + '.png';
    styleDisplayAll('.dice', 'block');
    var diceDOM = document.querySelectorAll('.dice');
    diceDOM[0].src = './img/dice-' + diceFirst + '.png';
    diceDOM[1].src = './img/dice-' + diceSec + '.png';

    /*
    var dice = Math.floor(Math.random() * 6) + 1;
        if ((dice === 6 && prevDices[activePlayer] === 12) ||
          (diceSec === 6 && prevDices[activePlayer] === 12)||
           (diceSec === 6 && dice === 6 &&  prevDices[activePlayer] === 12)) {
             console.log('prevDices of ' + activePlayer + 'Player' +
           'Are ' + prevDices[activePlayer] );
           console.log('Dice=' + dice + 'Second dice=' + diceSec);
          scores[activePlayer] = 0;
          roundScore = 0;
          document.getElementById('current-' + activePlayer).textContent = '0';
          document.getElementById('score-' + activePlayer).textContent = '0';
          nextPlayer();
        } elseif ((dice !== 1) && (diceSec !== 1)) { // 3. Check if the rolled number is NOT 1
          // Add score

          roundScore += dice + diceSec;
          document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
          // Next player
          prevDices[activePlayer] = 0;
          nextPlayer();
          // document.querySelector('.player-'+ activePlayer +'-panel')
          // .classList.remove('active');
        }
        //prevDices[activePlayer] = dice+diceSec;
        */

    // 3. Check if the rolled number is NOT 1
    if (diceFirst !== 1 && diceSec !== 1) {
      // Add score
      roundScore += diceFirst + diceSec;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }

  }
});

// Add event for hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (isPlaying) {
    // Add current score to global scores
    //prevDices[activePlayer] = 0;
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Get input score
    var inputScore = document.getElementById('finish-game-score').value;
    var finalScore;

    if (inputScore) {
      finalScore = inputScore;
    } else {
      finalScore = 100;
    }
    // Check if player win the game
    if (scores[activePlayer] >= finalScore) {
      document.getElementById('name-' + activePlayer).textContent = 'Winner!';
      //document.querySelector('.dice').style.display = 'none';
      styleDisplayAll('.dice', 'none');
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      isPlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// Add event for new game button
document.querySelector('.btn-new').addEventListener('click', init);

// Initializate new game
function init() {
  scores = [0, 0];
  //prevDices = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  isPlaying = true;


  //document.querySelector('.dice').style.display = 'none';
  styleDisplayAll('.dice', 'none');

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {
  document.getElementById('current-' + activePlayer).textContent = '0';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //document.querySelector('.dice').style.display = 'none';
  styleDisplayAll('.dice', 'none');
}

function styleDisplayAll(classElem, displayType) {
  var diceDOM = document.querySelectorAll(classElem);
  for (var i = 0; i < diceDOM.length; i++) {
    diceDOM[i].style.display = displayType;
  }
}


// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
