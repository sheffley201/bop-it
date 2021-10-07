bopButton = document.querySelector("bop-it");
twistButton = document.querySelector("twist-it");
pullButton = document.querySelector("pull-it");
instructionText = document.querySelector("instruction");
gameArea = document.querySelector("game-area");
let score = 0;

const startGame = () => {
  bopButton.removeEventListener("click", startGame);
  gameArea.addEventListener("click", bopIt);
  bopIt("bop");
};

const bopIt = (instruction) => {
  if (instruction == "bop") {
  }
};

bopButton.addEventListener("click", startGame);
