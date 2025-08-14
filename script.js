let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePera = document.querySelector("#user-score");
const compScorePera = document.querySelector("#comp-score");
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const drawGame = () => {
  console.log("Game Was Draw :");
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePera.innerText = userScore;
    msg.innerText = `You win Yours ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePera.innerText = compScore;
    msg.innerText = `You loose ${compChoice} Beats Yours ${userChoice} `;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("User Choise = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
