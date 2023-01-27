function getComputerChoice ()  {
    words = ['rock', 'paper', 'scissors'];
    computerSelection = words[Math.floor(Math.random()*words.length)];
    return computerSelection;
}
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector('#container');
const plaScore = document.querySelector('#plaScore');
const comScore = document.querySelector('#comScore');
const res = document.querySelector('#res');
const winnerDec = document.querySelector('#winnerDec');
const winner = document.createElement('div');
const results = document.createElement('div');
const playScore = document.createElement('div');
const compScore = document.createElement('div');
const toFive = document.createElement('div');

var paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
playRound(playerSelection="paper", computerSelection = getComputerChoice);
});
var rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
playRound(playerSelection="rock", computerSelection = getComputerChoice);
 });
var scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
 playRound(playerSelection="scissors", computerSelection = getComputerChoice);
  });


function playRound(playerSelection, computerSelection) {
    //console.log(getComputerChoice());
    //computerSelection = getComputerChoice().toLowerCase();
    computerSelection = getComputerChoice();
    if (computerSelection == playerSelection) {
            results.textContent = "It's a tie!";
            res.appendChild(results);
            playScore.textContent = (playerScore);
            compScore.textContent = (computerScore);
        plaScore.appendChild(playScore);
        comScore.appendChild(compScore);
    } else if (
        (computerSelection == "rock") && (playerSelection =="scissors") ||
        (computerSelection == "scissors") && (playerSelection == "paper")||
        (computerSelection == "paper") && (playerSelection == "rock")) {
            
            results.textContent = 'You lose, try again!';
            res.appendChild(results);
        ++computerScore;
        playScore.textContent = (playerScore);
        compScore.textContent = (computerScore);
        plaScore.appendChild(playScore);
        comScore.appendChild(compScore);

    } else if (
        (computerSelection == "scissors" && playerSelection =="rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")) {
            
            results.textContent = 'You win! Congrats!';
            res.appendChild(results);
        ++playerScore;
        playScore.textContent = (playerScore);
        compScore.textContent = (computerScore);
        plaScore.appendChild(playScore);
        comScore.appendChild(compScore);
        } else {
            
        };

        if (playerScore == 5) {
            winner.textContent = 'Congrats, you won 5 rounds!';
            winnerDec.appendChild(winner);
        }
        else if (computerScore == 5) {
            winner.textContent = 'The computer has won 5 rounds!';
            winnerDec.appendChild(winner);
        }
        else {
            
        }
    }
