// create variable to keep track of how many times player won
let playerWins = 0

// create variable to keep track of how many times computer won
let computerWins = 0

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
        return "rock"
    } else if (rand === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

//console.log(getComputerChoice())

// plays a single round
// use toLowerCase() to make case-insensitive
function playRound(playerSelection, computerSelection) {
    // if player equals the computer, the return "it's a tie!"
    if (playerSelection.toLowerCase() === computerSelection) {
        return `Player chose ${playerSelection} and Computer chose ${computerSelection}. It's a Tie!`
    } else if (playerSelection.toLowerCase() === "rock") {  // else if player equals rock
        // if computer equals paper, return "Player Lost! Paper beats Rock"
        if (computerSelection === "paper") {
            computerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Paper covers Rock`
        } else { // otherwise return "Player Won! Rock beats Scissors"
            playerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Rock beats Scissors`
        }
    } else if (playerSelection.toLowerCase() === "paper") { // same as before
        if (computerSelection === "rock") {
            playerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Paper covers Rock`
        } else {
            computerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Scissors cuts Paper`
        }
    } else if (playerSelection.toLowerCase() === "scissors") { // same as before
        if (computerSelection === "rock") {
            computerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Lost! Rock beats Scissors`
        } else {
            playerWins++
            return `Player chose ${playerSelection} and Computer chose ${computerSelection}. Player Won! Scissors cuts Paper`
        }
    }
}

// const playerSelection = "rock"
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

// whoever is first to 5 points wins the game
function game() {
    while(playerWins !== 5 && computerWins !== 5) {
        let user = prompt("Chose Rock, Paper, or Scissors")
        
        if (user === null) {
            console.log(`Canceling Game!`)
            return
        }

        // call the playRound function
        console.log(playRound(user, getComputerChoice()))
    }

    console.log(`Player Score: ${playerWins} \t Computer Score: ${computerWins}`)

    if (playerWins === 5) {
        console.log(`Player Wins!`)
    } else if (computerWins === 5) {
        console.log(`Computer Wins!`)
    } else {
        console.log(`No One Wins! It's a Tie!`)
    }
}

game()