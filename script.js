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

console.log(getComputerChoice())