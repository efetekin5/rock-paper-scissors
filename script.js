const array = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    console.log(array[Math.floor(Math.random() * 3)])
}

getComputerChoice();