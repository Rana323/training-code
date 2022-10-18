'use strict';

let number = Math.trunc(Math.random() * 10);
let score = 20;
let highscore = 0;

const displayMessage = function (number) {
  document.querySelector('.message').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'pleas add number';
  } else if (guess === number) {
    //document.querySelector('.message').textContent = 'correct number';
    displayMessage(`Correct Number`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.check').style.backgroundColor = '#00000';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when type high and low number
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(score < number ? 'Too Hight' : 'Too Low');
      score--;
      document.querySelector('.scroe').textContent = score;
    }
  }

  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Higher number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Lower number';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  number = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.number').textContent = number;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.number').textContent = '?';
  displayMessage('?');
  document.querySelector('.score').textContent = score;
  //document.querySelector('.highscore').textContent = highscore;
});
