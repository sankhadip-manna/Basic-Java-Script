let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const GuessesSlot = document.querySelector('.guesses');
const LastRemain = document.querySelector('.lastResult');
const LowerHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p');
let PrevGuess = [];
let numGuess = 1;

let PlayGame = true;

if (PlayGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Place enter a vaild numbar');
  } else if (guess < 1) {
    alert('Place enter a  number more than 1 ');
  } else if (guess > 100) {
    alert('Place enter a  number less than 100');
  } else {
    PrevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMassage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      chaeckGuess(guess);
    }
  }
}

function chaeckGuess(guess) {
  if (guess === randomNumber) {
    displayMassage(` You guessed is right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(` Number is Tooo low`);
  } else if (guess > randomNumber) {
    displayMassage(` Number is Tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = ``;
  GuessesSlot.innerHTML += `${guess},  `;
  numGuess++;
  LastRemain.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massages) {
  LowerHigh.innerHTML = `<h2>${massages}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  PlayGame = false;
  newGame();
}

function newGame() {
  const newButton = document.querySelector('#newGame');
  newButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    PrevGuess = [];
    numGuess = 1;
    GuessesSlot.innerHTML = '';
    LastRemain.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    PlayGame = true;
  });
}