let playerScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

function getComputerChoice() {
  const result = ["rock", "paper", "scissor"];
  return result[Math.floor(Math.random() * result.length)];
}

computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) result.textContent = "Tie Breaker";
  else if (
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    gameUpdate();
    gameEnd();
  } else {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection} `;
    playerScore++;
    gameUpdate();
    gameEnd();
  }
}

function gameUpdate() {
  score.textContent = `You : ${playerScore} - ${computerScore}`;
}

function gameEnd() {
  if (playerScore === 5) {
    winner.textContent = "You Win, Champion";
  } else if (computerScore === 5) {
    winner.textContent = "You Lost, Kudos";
  }
}
