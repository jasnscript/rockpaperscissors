let computerSelection;
let playerSelection;
let result;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', game);
});

function computerPlay() {
    let randomNum = Math.floor(Math.random()*3);    // Random number between 0 and 2, inclusive
    // Assign 0 to rock, 1 to paper, 2 to scissors
    switch (randomNum) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    }
    return computerSelection;
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = 'Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Win';
        } else {
            result = 'Lose';
        }
    } else {
        if (computerSelection === 'rock') {
            result = 'Lose';
        } else {
            result = 'Win';
        }
    }
    return result;
}
function updateText(text) {
    const resultsText = document.querySelector('#results-text');
    resultsText.textContent = `You ${text}! The score is You: ${playerScore} vs Computer: ${computerScore}`;
}

function checkScore() {
    if (playerScore == 5) {
        updateText('beat the computer');
        resetScore();
    } else if (computerScore == 5) {
        updateText('were beat by the computer');
        resetScore();
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function updateImage() {
    const imgIdPlayer = document.querySelector('#playerChoiceImage');
    const imgIdComputer = document.querySelector('#computerChoiceImage');

    if (playerSelection == 'rock') {
        imgIdPlayer.src = '/images/hand-rock.png';
        imgIdPlayer.setAttribute('style', 'width: 70%; height: 70%');
    } else if (playerSelection == 'paper') {
        imgIdPlayer.src = '/images/hand-paper.png';
        imgIdPlayer.setAttribute('style', 'width: 100%', 'height: 100%');
    } else {
        imgIdPlayer.src = '/images/hand-scissors.png';
        imgIdPlayer.setAttribute('style', 'width: 100%', 'height: 100%');
    }

    if (computerSelection == 'rock') {
        imgIdComputer.src = '/images/hand-rock.png';
        imgIdComputer.setAttribute('style', 'width: 70%; height: 70%');
    } else if (computerSelection == 'paper') {
        imgIdComputer.src = '/images/hand-paper.png';
        imgIdComputer.setAttribute('style', 'width: 100%; height: 100%');
    } else {
        imgIdComputer.src = '/images/hand-scissors.png';
        imgIdComputer.setAttribute('style', 'width: 100%; height: 100%');
    }
}

// Play five games, keeping track of score
function game() {
        computerPlay();
        playerSelection = this.value;

        play(playerSelection, computerSelection);
        updateImage();

        switch (result) {
            case "Win":
                ++playerScore;
                updateText('Win');
                break;
            case "Lose":
                ++computerScore;
                updateText('Lose');
                break;
            case "Tie":
                updateText('Tied');
                break; 
        }
        checkScore();
}