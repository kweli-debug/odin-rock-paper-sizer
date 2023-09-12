// create a function to represent the computer playing 
// the computer randomoly selects either rock, paper or sicssors
const prompt = require('prompt-sync')({ signet: true });
function getComputerChoice() {
    let randomPick = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * randomPick.length);
    let randomElement = randomPick[randomIndex];
    return randomElement;
}
// creat a player selection function
// player must input either rock paper or ssccios
// make sure user input is case in-sensitive 
function getPlayerSelection() {
    while (true) {
        let userPick = prompt('Enter Rock, Paper, or Scissors: ')
        let realUserPick = userPick.toLowerCase();

        if (realUserPick === "rock" || realUserPick === "paper" || realUserPick === "scissors"){
            return realUserPick;
        } else {
            console.log("try again");
        }
    }
    
}

// create a function that plays a single round of the game
// the function takes in 2 parameters the player selection then the computer 
// determins if either computer or user wins 
// determine if paper beats rock, if sicissor beats paper, if rock beats sicissors 
// then return the winner of the round saying somthing like u win or u lose (paper beats rock) ect. 
 function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("you win this Round! rock beats sicissors.")
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("you Tied this round")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You lose this round! rock beats sicissors.")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("you win this Round! scissors beats paper")
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log("You tie this Round!")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You lose this Round! scissors beats paper.")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You win this Round! paper beats rock.")
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("You tie this Round")
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You lose this Round! paper beats rock.")
    } 
    
 }
 const playerSelection = getPlayerSelection()
 const computerSelection = getComputerChoice()
const oneRound = playRound(playerSelection, computerSelection)

 // creat a game function that plays 5 rounds 
 // keeps track of a score for the user and the Player 
 // returns a winner at the end with the highest score 
 function game() {
    if (oneRound)

 }

 