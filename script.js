// declare variables
let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;
const buttons = document.querySelectorAll("button");

// generates computer choice as either rock, paper, or scissors
function getComputerChoice() {
  let computer = Math.random();
  if (computer >= 0 && computer < 1 / 3) {
    return "rock";
  } else if (computer >= 1 / 3 && computer < 2 / 3) {
    return "paper";
  }
  return "scissors";
}

// determine a winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "TIE";
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Player";
  } else return "Computer";
}

// update score display
function updateScore() {
  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// update result for each round
function updateResult(msg) {
  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = msg;
}

// display final result after 5 rounds
function endGame() {
  const gameOverDiv = document.querySelector("#gameOver");
  if (playerScore > computerScore) {
    gameOverDiv.textContent =
      "Game over! Congratulations, you won the overall game. :)";
  } else if (computerScore > playerScore) {
    gameOverDiv.textContent =
      "Game over! Computer wins the overall game.. Try again!";
  } else {
    gameOverDiv.textContent = "Game over! The game is a TIE";
  }
}

// handles click event
buttons.forEach(button => {
  button.addEventListener("click", e => {
    const playerChoice = e.target.id;

    if (roundsPlayed >= totalRounds) {
      updateResult("Game Over! Pls refresh to play again");
    }

    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === "Player") {
      playerScore++;
      updateResult(
        `You chose ${playerChoice}, Computer chose ${computerChoice} - You win this round! `
      );
    } else if (winner === "Computer") {
      computerScore++;
      updateResult(
        `You chose ${playerChoice}, Computer chose ${computerChoice} - Computer wins this round!`
      );
    } else {
      updateResult(
        `You chose ${playerChoice}, Computer also chose ${computerChoice} -  This round is a draw!`
      );
    }

    roundsPlayed++;
    updateScore();

    if (roundsPlayed === totalRounds) {
      endGame();
    }
  });
});
