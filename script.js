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
        return "rock";
    } else if (Math.floor(Math.random() * 3) === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let user = (window.prompt("Rock, Paper, or Scissors?"))

    if (user.toLowerCase() === "rock") {
        return "rock";
    } else if (user.toLowerCase() === "paper") {
        return "paper";
    } else if (user.toLowerCase() === "scissors"){
        return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function scoreBoard(){
        return `Current score: You - ${humanScore} | Computer - ${computerScore}`;
    }

    function playRound(humanChoice,computerChoice) {

        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You chose rock. Computer chose scissors. You win!");
            humanScore++;
            console.log(scoreBoard());
            return;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You chose rock. Computer chose paper. You lose!");
            computerScore++;
            console.log(scoreBoard());
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You chose paper. Computer chose rock. You win!");
            humanScore++;
            console.log(scoreBoard());
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You chose paper. Computer chose scissors. You lose!");
            computerScore++;
            console.log(scoreBoard());
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You chose scissors. Computer chose paper. You win!");
            humanScore++;
            console.log(scoreBoard());
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You chose scissors. Computer chose rock. You lose!");
            computerScore++;
            console.log(scoreBoard());
        } else if (humanChoice === computerChoice) {
            console.log(`You both chose ${humanChoice}. It's a tie!`);
            console.log(scoreBoard());
        }
    }

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`Final score: You - ${humanScore} | Computer - ${computerScore} | You won the game!`);
    } else if (humanScore < computerScore) {
        console.log(`Final score: You - ${humanScore} | Computer - ${computerScore} | Computer won the game!`);
    } else if (humanScore === computerScore) {
        console.log(`Final score: You - ${humanScore} | Computer - ${computerScore} | The game is a tie!`)
    }
}

playGame()
// Note to self: humanSelection and computerSelection are variables being used as ARGUMENTS in the playRound function CALL for the PARAMETERS, humanChoice and computerChoice, in the playRound function DECLARATION //

// FIX: storing scoreboard in variable scoreBoard and then console logging the variable (console.log(scoreBoard)) doesn't show incremented score. //
// FIXED: made scoreBoard a function to call on. Problem was that console logging a variable declared before the increment doesn't update the value of the variable. //