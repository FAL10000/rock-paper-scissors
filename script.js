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

const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
    let humanChoice = getHumanChoice();
    log.textContent += getComputerChoice() + " VS " + humanChoice;
});