console.log("Hello Everyone Again Part 2!");
function getComputerChoice ()  {
    var words = ['Rock', 'Paper', 'Scissors'];
    var computerSelection = words[Math.floor(Math.random()*words.length)];
    return computerSelection;
}

console.log(getComputerChoice());
let playerSelection = prompt("What do you choose?", "Enter Rock, Paper, or Scissors" )
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowercase();
    if (computerSelection == playerSelection) {
        alert("It's a tie!");
    } else if (
        (computerSelection == "rock" && playerSelection =="scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")) {
        alert("You lose! Try again!");
    } else if (
        (computerSelection == "scissors" && playerSelection =="rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")) {
        alert("You win! Good job!");
        }
    
}
console.log(playRound());
// 1.  have computer randomly select rock, paper, or scissors
// 2. allow player to choose rock, paper, or scissors
// 3. compare choices
// 4. declare who wins