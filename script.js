function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function getHumanChoice() {
    return prompt('What is your choice?');
}

let humanScore = 0;
let computerScore = 0;

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  const humanChoice = getHumanChoice();
  if (humanChoice === null) return;

  const computerChoice = getComputerChoice();

  const resultMessage = playRound(humanChoice, computerChoice);

  log.textContent =
    `${computerChoice} VS ${toProperCase(humanChoice)}\n` +
    `${resultMessage}\n` +
    `Score: You ${humanScore} - ${computerScore} Computer`;
});

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.trim().toLowerCase();
  const computer = computerChoice.trim().toLowerCase();

  if (human.length === 0) {
    return "No input - please type Rock, Paper, or Scissors.";
  }
  if (human !== "rock" && human !== "paper" && human !== "scissors") {
    return `Invalid choice: "${humanChoice}". Please type Rock, Paper, or Scissors.`;
  }

  if (human === computer) {
    return `Tie! ${toProperCase(human)} ties ${toProperCase(computer)}.`;
  }

  const humanWins =
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper");

  if (humanWins) {
    humanScore += 1;
    return `You win! ${toProperCase(human)} beats ${toProperCase(computer)}.`;
  } else {
    computerScore += 1;
    return `You lose! ${toProperCase(computer)} beats ${toProperCase(human)}.`;
  }
}

function toProperCase(str) {
  if (str === null) return "";
  const cleaned = str.trim().toLowerCase();
  if (cleaned.length === 0) return "";
  return cleaned[0].toUpperCase() + cleaned.slice(1);
}