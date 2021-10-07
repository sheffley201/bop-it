const bopButton = $('.bop-it');
const twistButton = $('.twist-it');
const pullButton = $('.pull-it');
let instructionText = $('.instruction');
let started = false;
let score = 0;
let bop = false;
let twist = false;
let pull = false;

const giveCommand = () => {
  if (score == 0) {
    bopIt();
  } else if (score == 1) {
    twistIt();
  } else if (score == 2) {
    pullIt();
  } else {
    let command = randomCommand();
    console.log(command);
    if (command == 1) {
      bopIt();
    } else if (command == 2) {
      twistIt();
    } else if (command == 3) {
      pullIt();
    }
  }
}

const randomCommand = () => {
  return Math.floor(Math.random() * (4 - 1) + 1);
}

const bopIt = () => {
  bop = true;
  twist = false;
  pull = false;
  instructionText.text('Bop it!');
}

const twistIt = () => {
  bop = false;
  twist = true;
  pull = false;
  instructionText.text('Twist it!');
}

const pullIt = () => {
  bop = false;
  twist = false;
  pull = true;
  instructionText.text('Pull it!');
}

const gameLose = () => {
  instructionText.text('Game Over!');
}

bopButton.on("click", function() {
  if (!started) {
    started = true;
    giveCommand();
  } else if (bop) {
    score++;
    giveCommand();
  } else {
    gameLose();
  }
});

twistButton.on("click", function() {
  if (twist) {
    score++;
    giveCommand();
  } else {
    gameLose();
  }
});

pullButton.on("click", function() {
  if (pull) {
    score++;
    giveCommand();
  } else {
    gameLose();
  }
});
