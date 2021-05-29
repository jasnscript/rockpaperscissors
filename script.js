// Computer randomly picks rock(0), paper(1), or scissors(2)
let computerSelection;
let playerSelection;
let result;
let computerScore = 0;
let playerScore = 0;


function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);    // Random number between 0 and 2, inclusive
    // Assign 0 to rock, 1 to paper, 2 to scissors
    switch (randomNum) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

// Get user input: rock, paper, or scissors
function getUserInput() {
    playerSelection = prompt("Rock, Paper, or Scissors").toString().toLowerCase();
    // playerSelection = playerSelection.toString().toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return playerSelection;   
    } else {
        alert("Please enter rock, paper, or scissors!");
        getUserInput();
    }
    return playerSelection;
}
// If user selects rock, wins if computer selected scissors, loses if paper, ties if rock
// If user selects paper, wins if computer selected rock, loses if scissor, ties if paper
// If user selects scissors, wins if computer selected paper, loses if rock, ties if scissors
function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "Tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = "Lose";
        } else {
            result = "Win";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "Win";
        } else {
            result = "Lose";
        }
    } else {
        if (computerSelection === "rock") {
            result = "Lose";
        } else {
            result = "Win";
        }
    }
    return result;
}

// Play five games, keeping track of score
function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        console.log(computerSelection);
        getUserInput();
        play(playerSelection, computerSelection);
        switch (result) {
            case "Win":
                alert(`Computer picked ${computerSelection}, you win!`);
                ++playerScore;
                break;
            case "Lose":
                alert(`Computer picked ${computerSelection}, you lose!`);
                ++computerScore;
                break;
            case "Tie":
                alert(`You both picked ${computerSelection}!`);
                break; 
        }

        /* Best out of 5 mode:
        if (playerScore >= 3) {
            alert("You win the game!");
            return;
        } else if (computerScore >= 3) {
            alert("You lose the game!");
            return;
        }
        */
        console.log(playerScore);
        console.log(computerScore);
    }
    
    if (playerScore > computerScore) {
        alert(`You win the game! Final score is You ${playerScore} : Computer ${computerScore}.`);
    } else if (playerScore < computerScore) {
        alert(`You lose the game. Final score is You ${playerScore} : Computer ${computerScore}.`);
    } else {
        alert(`It's a tie! Final score is You ${playerScore} : Computer ${computerScore}.`);
    }
}
// Report winner at end.