function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const container = document.querySelector('.container');
const currentScore = document.createElement('div');
container.prepend(currentScore);

function playRound(human, getComputerChoice) {
    const result = document.createElement('div');
    result.classList.add('result');
    let computer = getComputerChoice();

    if (human === 'rock' && computer === 'scissors' || 
        human === 'paper' && computer === 'rock' || 
        human === 'scissors' && computer === 'paper') {
            result.textContent =`You Win! ${human} beats ${computer}`;
            humanScore++;

    } else if (human === 'scissors' && computer === 'rock' || 
        human === 'rock' && computer === 'paper' || 
        human === 'paper' && computer === 'sciossors') {
            result.textContent = `You Lose! ${human} loses against ${computer}`;
            computerScore++;
        
        } else {
            result.textContent = `Draw ${human} ${computer}`;
            humanScore++
            computerScore++        
        }
        container.appendChild(result);
        currentScore.textContent = `Score Player: ${humanScore} vs Computer: ${computerScore}`;
        roundsPlayed++;

        if (roundsPlayed === 5) {
            currentScore.textContent = (humanScore > computerScore) ? `Player won: ${humanScore} vs ${computerScore}` 
            : (humanScore < computerScore) ? `Player lost: ${humanScore} vs ${computerScore}`
            : `Draw! No winner: ${humanScore} vs ${computerScore}`;
            roundsPlayed = 0;
            humanScore = 0;
            computerScore = 0;
        }
}

container.addEventListener('click', (e) => {
    const target = e.target;
    switch (target.id) {
        case 'rock':
            playRound('rock', getComputerChoice);
            break;
        case 'paper':
            playRound('paper', getComputerChoice);
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice);
            break;
        case 'delete': 
            const result = document.querySelectorAll('.result');
            result.forEach((element) => {
                element.remove();
            })
            break;
    }
})