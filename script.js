function getComputerChoice() {
  const result = ["rock", "paper", "scissor"];
  return result[Math.floor(Math.random() * result.length)];
}
// console.log(getComputerChoice());
// ---------------------------

computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "Tie Breaker";
  if (
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return `You lose! ${playerSelection} beats ${computerSelection}`;
  }
  return `You Win! ${playerSelection} beats ${computerSelection}`;
}

// ----------------------------

const userInput = () => {
  playerSelection = prompt("Enter Rock, Paper or Scissor");
  if (
    playerSelection.toLowerCase() === "rock" ||
    playerSelection.toLowerCase() === "paper" ||
    playerSelection.toLowerCase() === "scissor"
  ) {
    console.log(playRound(playerSelection, computerSelection));
  } else {
    alert("Invalid choice");
    userInput();
  }
};

// ----------------------------

function game() {
  for (let i = 0; i < 5; ++i) {
    userInput();
  }
}

game();
