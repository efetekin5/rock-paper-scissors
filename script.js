const array = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return array[Math.floor(Math.random() * 3)];
}

let player = 0;
let computer = 0;

let declaration = document.querySelector('div');
declaration.textContent = '';

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));


function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    declaration.textContent = '';

    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        player += 1;
        if (player === 5) {
            declaration.innerHTML += `You won the game<br>`;
            declaration.innerHTML += `Player: ${player}     Computer: ${computer}`;
            computer = 0;
            player = 0;
            return;
        }
        declaration.innerHTML += `You win! ${playerSelection} beats ${computerSelection}<br>`;
        declaration.innerHTML += `Player: ${player}     Computer: ${computer}`;
    } else if (playerSelection == computerSelection) {
        declaration.innerHTML += 'Tie<br>';
        declaration.innerHTML += `Player: ${player}     Computer: ${computer}`;
    }
    else {
        computer += 1;
        if (computer === 5) {
            declaration.innerHTML += 'You won the game<br>';
            declaration.innerHTML += `Player: ${player}     Computer: ${computer}`;
            computer = 0;
            player = 0;
            return;
        }
        declaration.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}<br>`;
        declaration.innerHTML += `Player: ${player}     Computer: ${computer}`;
    }
}