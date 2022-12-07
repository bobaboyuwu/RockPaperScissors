console.log("Hello Everyone Again Part 2!");
var word = ['Rock', 'Paper', 'Scissors'];
var getComputerChoice = word[Math.floor(Math.random()*word.length)];
let playerSelection = prompt("What do you choose?", "Enter Rock, Paper, or Scissors" )
console.log(getComputerChoice);
let text;
switch(playerSelection) {
    case "Scissors"
    if (getComputerChoice = "Scissors") {
    alert ("You Win! Rock Beats Scissor!");
    } else if (getComputerChoice = "Paper") {
        alert ("You Lose! Paper Beats Rock!");
    } else {
        alert ("Draw! Rock Doesn't Beat Rock!");
    }
    }
}
console.log (playRound);