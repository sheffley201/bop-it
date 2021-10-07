let started = false;
let score = 0;

const giveCommand = () => {
  if (score == 0) {
    bopIt();
  } else if (score == 1) {
    twistIt();
  } else if (score == 2) {
    pullIt();
  } else {
    let command = randomCommand();
    if (command == 0) {
      bopIt();
    } else if (command == 1) {
      twistIt();
    } else if (command == 2) {
      pullIt();
    }
  }
}

const randomCommand = () => {
  return Math.random() * (4 - 1) + 1;
}

const bopIt = () => {

}

const twistIt = () => {

}

const pullIt = () => {

}

$(document).ready(function() {
  const bop = $('.bop-it');
  const twist = $('.twist-it');
  const pull = $('.pull-it');
  let instructionText = $('.instruction');
  
  bop.on("click", function() {
    if (!started) {
      started = true;
      giveCommand();
    }
  });
})
