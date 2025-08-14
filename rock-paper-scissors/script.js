// This file contains the JavaScript code that implements the game logic for Rock Paper Scissors.

let userScore = 0;
let compScore = 0;

const userScoreDisplay = document.getElementById("user-score");
const compScoreDisplay = document.getElementById("comp-score");
const messageDisplay = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const compChoice = getComputerChoice();
    const result = determineWinner(userChoice, compChoice);
    updateScores(result);
    displayMessage(userChoice, compChoice, result);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    return "user";
  } else {
    return "comp";
  }
}

function updateScores(result) {
  if (result === "user") {
    userScore++;
  } else if (result === "comp") {
    compScore++;
  }
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}

function displayMessage(userChoice, compChoice, result) {
  if (result === "draw") {
    messageDisplay.textContent = `It's a draw! You both chose ${userChoice}.`;
  } else if (result === "user") {
    messageDisplay.textContent = `You win! ${userChoice} beats ${compChoice}.`;
  } else {
    messageDisplay.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
  }
}