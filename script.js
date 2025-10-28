/*
Get computer choice of rock, paper, or scissors.
Get user choice of rock, paper, or scissors.
Compare computer choice with use choice.
Set win and lose conditions.
Show user their choice and the computer's choice.
Show win or lose message.
*/

function getComputerChoice() {
    if (Math.floor(Math.random() * 3) === 0) {
        return computer = "rock";
    } else if (Math.floor(Math.random() * 3) === 1) {
        return computer = "paper";
    } else {
        return computer = "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let user = (window.prompt("Rock, Paper, or Scissors?"))

    if (user.toLowerCase() === "rock") {
        return "rock";
    } else if (user.toLowerCase() === "paper") {
        return "paper";
    } else if (user.toLowerCase() === "scissors"){
        return "scissors"
    } else {
        
    }
}

console.log(getHumanChoice());