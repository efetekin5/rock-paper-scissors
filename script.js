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

function game() {
    let player = 0;
    let computer = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result == 'You won') {
            player += 1;
        } else if (result == 'You lost') {
            computer += 1;
        }
    }

    if (player > computer) {
        console.log('You won the game');
    } else {
        console.log('You lost the game');
    }
}

game();