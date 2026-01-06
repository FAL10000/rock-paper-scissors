const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

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

signButton.addEventListener("click", () => {
	const gameSummary = playGame();
	if (gameSummary === null) return; // if user cancelled during the game
	log.textContent = gameSummary;
});

function playGame() {
	humanScore = 0;
	computerScore = 0;

	let output = "";

	for (let i = 0; i < 5; i++) {
		const humanChoice = getHumanChoice();
		if (humanChoice === null) return null; // cancel ends the game

		const computerChoice = getComputerChoice();

		const roundMessage = playRound(humanChoice, computerChoice);

		output += `Round ${i + 1}: ${computerChoice} VS ${toProperCase(humanChoice)}\n`;
		output += `${roundMessage}\n`;
		output += `Score: You ${humanScore} - ${computerScore} Computer\n\n`;
	}

	if (humanScore > computerScore) {
		output += "Final: You win the game!";
	} else if (computerScore > humanScore) {
		output += "Final: Computer wins the game!";
	} else {
		output += "Final: It's a tie!";
	}

	return output;
}

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