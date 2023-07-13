// make computer play
function getComputerChoice() {
    // generate a random number between 1-3 and assign Rock, Paper, Scissors to them
    let rand = Math.floor(Math.random() * 3) + 1
    
    /*
    if we get 1, return Rock
    else if we get 2, return Paper
    otherwise return Scissors
    */
    if (rand === 1) {
        return "Rock"
    } else if (rand === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// plays a single round
// use toLowerCase() to make case-insensitive
function playRound(playerSelection, computerSelection) {
    // if player equals the computer, the return "it's a tie!"
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}. It's a Tie!`
    } else if (playerSelection.toLowerCase() === "rock") {  // else if player equals rock
        // if computer equals paper, return "Player Lost! Paper beats Rock"
        if (computerSelection.toLowerCase() === "paper") {
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Paper covers Rock`
        } else if (computerSelection.toLowerCase() === "scissors") { // otherwise reutrn "Player Won! Rock beats Scissors"
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Rock beats Scissors`
        }
    } else if (playerSelection.toLowerCase() === "paper") { // same as before
        if (computerSelection.toLowerCase() === "rock") {
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Paper covers Rock`
        } else {
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Scissors cuts Paper`
        }
    } else if (playerSelection.toLowerCase() === "scissors") { // same as before
        if (computerSelection.toLowerCase() === "rock") {
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Rock beats Scissors`
        } else {
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Scissors cuts Paper`
        }
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))