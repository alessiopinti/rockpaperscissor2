let playerSelection = prompt("rock, paper or scissors?");
computerSelection = getComputerChoice();

function getComputerChoice(){
  let selection = ["rock", "paper", "scissors"];
  let computerSelection = selection[Math.floor(Math.random()*selection.length)];
  return computerSelection
}

function playRound (playerSelection, computerSelection) {

  if (computerSelection === playerSelection ){
    console.log("It's a tie.");
  }
  
  if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper"){
    console.log("You lose.");
  }

  if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock"){
    console.log("You win.");
  }
}

playRound(playerSelection, computerSelection);