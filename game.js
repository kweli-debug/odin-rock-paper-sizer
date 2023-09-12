// create a function to represent the computer playing 
// the computer randomoly selects either rock, paper or sicssors

function getComputerChoice() {
    let randomPick = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * randomPick.length);
    let randomElement = randomPick[randomIndex];
    return randomElement;
}
// creat a player selection function
// player must input either rock paper or ssccios 
const prompt = require('prompt-sync')({signet:true});

function playerSelection() {
    while (true){
        let userPick = prompt('Enter Rock, Paper, or Sicissors: ')
         let realUserPick = userPick.toLowerCase();

         if (realUserPick === "rock" || realUserPick === "paper" || realUserPick === "sicissors") {
            return realUserPick;
         } else {
            console.log("try again");
         }
    }
         
}
console.log(playerSelection());
// create a function that plays a single round of the game 
// the function takes in 2 parameters the player selection then the computer 
// determins if either computer or user wins 
// then return the winner of the round saying somthing like u win or u lose (paper beats rock) ect. 
// make sure user input is case in-sensitive 
