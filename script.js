const buttons = document.querySelectorAll("button")
const para1 = document.querySelector(".question")
const para2 = document.querySelector(".rules")
const player = document.querySelector(".player")
const computer = document.querySelector(".computer")
const mark1 = document.querySelector("#mark-1")
const mark2 = document.querySelector("#mark-2")

let playerWins = 0
let computerWins = 0

function getComputerChoice() {
    // generate a random number between 1-3 and assign Rock, Paper, Scissors to them
    let rand = Math.floor(Math.random() * 3) + 1
    
    /*
    if we get 1, return Rock
    else if we get 2, return Paper
    otherwise return Scissors
    */
    if (rand === 1) {
        // setting the emoji for the computer
        mark2.textContent = "✊"
        return "rock"
    } else if (rand === 2) {
        mark2.textContent = "🖐️"
        return "paper"
    } else {
        mark2.textContent = "✌️"
        return "scissors"
    }
}

// plays a single round
function playRound(playerSelection, computerSelection) {
    // if player equals the computer, the return "it's a tie!"
    if (playerSelection === computerSelection) {
        return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nIt's a Tie!`
    } else if (playerSelection === "rock") {  // else if player equals rock
        // if computer equals paper, return "Player Lost! Paper beats Rock"
        if (computerSelection === "paper") {
            computerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Lost! Paper covers Rock`
        } else { // otherwise return "Player Won! Rock beats Scissors"
            playerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Won! Rock beats Scissors`
        }
    } else if (playerSelection === "paper") { // same as before
        if (computerSelection === "rock") {
            playerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Won! Paper covers Rock`
        } else {
            computerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Lost! Scissors cuts Paper`
        }
    } else if (playerSelection === "scissors") { // same as before
        if (computerSelection === "rock") {
            computerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Lost! Rock beats Scissors`
        } else {
            playerWins++
            return `You chose ${playerSelection} and Computer chose ${computerSelection}. \nYou Won! Scissors cuts Paper`
        }
    }
}

buttons.forEach(button => {

    // loop through each button
    button.addEventListener("click", (e) => {
        //console.log(e.target.textContent)

        if (e.target.textContent === "✊") {
            e.target.value = "rock"
        } else if (e.target.textContent === "🖐️") {
            e.target.value = "paper"
        } else {
            e.target.value = "scissors"
        }
        //console.log(e.target.value)

        // call playRound function and split return value by newline character, returns array
        let round = playRound(e.target.value, getComputerChoice()).split("\n")
        //console.log(round)

        // loop through array and assign text content of the paragraphs
        for (let i = 0; i < round.length; i++) {
            para1.textContent = round[1]
            para2.textContent = round[0]
        }

        // setting the emoji for the player
        mark1.textContent = e.target.textContent

        // show the scores
        player.textContent = `Player Score: ${playerWins}`
        computer.textContent = `Computer Score: ${computerWins}`

        // check for the winner
        if (playerWins === 5) {
            para1.textContent = "You Beat the Computer!"
            para2.textContent = "Reload to Play Again!"

            // disables the buttons
            buttons[0].disabled = true
            buttons[1].disabled = true
            buttons[2].disabled = true
        } else if (computerWins === 5) {
            para1.textContent = "You Lost Against the Computer, Too Bad!"
            para2.textContent = "Reload to Play Again!"

            // disables the buttons
            buttons[0].disabled = true
            buttons[1].disabled = true
            buttons[2].disabled = true
        }
    })
})