function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function getHumanChoice() {
    let choice = prompt('Choose between rock, paper or scissors');
    if (choice === null) {
        return alert('Canceld');
    }
    choice = choice.toLowerCase();
    
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('Wrong selection! Choose again between rock, paper or scissors');
        if (choice === null) {
            return alert('Canceld');
        }
        choice = choice.toLowerCase()
    }

    return choice;
}

function playGame(gamesToPlay) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let human = humanChoice();
        let computer = computerChoice();
    
        if (human === 'rock' && computer === 'scissors' || 
            human === 'paper' && computer === 'rock' || 
            human === 'scissors' && computer === 'paper') {
                console.log(`You Win! ${human} beats ${computer}`);
                humanScore++;
    
        } else if (human === 'scissors' && computer === 'rock' || 
            human === 'rock' && computer === 'paper' || 
            human === 'paper' && computer === 'sciossors') {
                console.log(`You Lose! ${human} loses against ${computer}`);
                computerScore++;
            
            } else {
                console.log(`Draw ${human} ${computer}`);
                humanScore++
                computerScore++        
            }
    }

    for (let i = 0; i < gamesToPlay; i++) {
        playRound(getHumanChoice, getComputerChoice);
    }
    console.log(`Score Player: ${humanScore} vs Computer: ${computerScore}`);
}
