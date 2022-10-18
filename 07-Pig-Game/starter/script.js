'use strict';

// asign value
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const diceValue = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
let scoreP1 = document.querySelector('#score--0');
let scoreP2 = document.querySelector('#score--1');

let scores, activePlayer, currentScore, playing;

//assign values
const resetGame = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  diceValue.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};
resetGame();

// Swith player
const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//Reset game
const resetGames = function () {
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner,player--active');
  player1.classList.add('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    // genrate dice number
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //display dice 1
    diceValue.classList.remove('hidden');
    diceValue.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //currentScore1.textContent = currentValue;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceValue.classList.add('hidden');
    } else {
      switchPlayer();
    }
    let checkPlayer =
      scores[0] >= 10 || scores[1] >= 10 ? `Player one won` : `Player 2nd won`;
    console.log(checkPlayer);
    console.table(scores);
  }
});

btnNewGame.addEventListener('click', resetGame);
