// console.log("Hello Everyone Again Part 2!");
var computerSelection;
var words;
let computerScore = 0;
let playerScore = 0;
function getComputerChoice ()  {
    words = ['rock', 'paper', 'scissors'];
    computerSelection = words[Math.floor(Math.random()*words.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    //console.log(getComputerChoice());
    //computerSelection = getComputerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = prompt("What do you choose?", "Enter Rock, Paper, or Scissors" );
    console.log(playerSelection);
    if (computerSelection == playerSelection) {
        alert("It's a tie!");
    } else if (
        (computerSelection == "rock") && (playerSelection =="scissors") ||
        (computerSelection == "scissors") && (playerSelection == "paper")||
        (computerSelection == "paper") && (playerSelection == "rock")) {
        alert("You lose! Try again!");
        computerScore = ++computerScore;
        console.log(computerScore);

        ;
    } else if (
        (computerSelection == "scissors" && playerSelection =="rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")) {
        alert("You win! Good job!");
        playerScore = ++playerScore;
        console.log(playerScore);
        } else 
        alert("Not able to process choice");
        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
        function declareWinner() {
            if (playerScore > computerScore) {
                console.log("You beat the computer in 5 rounds!");
            }
                else {
                    console.log("You lost! The computer has won 5 rounds!")
                }
            }
         }


// 1.  have computer randomly select rock, paper, or scissors
// 2. allow player to choose rock, paper, or scissors
// 3. compare choices
// 3a. log who wins
// 3b. when 5 wins happens, display a message
// 4. declare who wins