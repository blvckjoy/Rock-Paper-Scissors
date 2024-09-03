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

// console.log(getComputerChoice());

// user's prompt to get the input of either rock, paper or scissors
function getHumanChoice() {
  return prompt("Pick either rock, paper or scissors").toLowerCase();
}

// declaring variables
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

function playGame(round) {
  if (round > 0) {
    console.log(`Round ${currentRound}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    console.log(`------------------------`);
    return playGame(round - 1);
  } else if (humanScore > computerScore) {
    return console.log(`CONGRATSS! YOU WIN!`);
  } else if (humanScore < computerScore) {
    return console.log(`GAME OVER. YOU LOSE!`);
  }
  return console.log(`IT'S A TIE!`);
}

function playRound(humanChoice, computerChoice) {
  currentRound++;

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return console.log(
      `You win! You chose ${humanChoice}, Computer chose ${computerChoice}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    return console.log(
      `You lose! You chose ${humanChoice}, Computer chose ${computerChoice}`
    );
  }
  return console.log(
    `It's a tie! You chose ${humanChoice}, Computer chose ${computerChoice}`
  );
}

playGame(5);
