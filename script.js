const array = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return array[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    if((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
      (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') ||
      (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock')
    ) {
        return 'You won';
    } else if (playerSelection == computerSelection) {
        return 'Tie';
    }
    else {
        return 'You lost';
    }
}

const playerSelection = prompt();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));