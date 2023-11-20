

function game() {

    let userScore = 0;
    let computerScore = 0;
    let result

    for (let i = 0; i < 5; ++i) {

    result = playRound(getComputerChoice(), getPlayerChoice());
// Log the results of the round
        console.log(result)

    }
// Calculating Score by the return string of playround() -- Not so nice solution...
    if (result.slice(0, 7) === 'You won') {

        ++userScore

    } else if (result.slice(0, 9) === 'You loose') {

        ++computerScore
    }

    getResult();
}


// Results of the game
function getResult () {

    return (userScore > computerScore) ? 'You won' : 'you loose';

}


function getComputerChoice() {

    // get rock, paper or scissors value, based on random numbers

    let getRandomInt = () => Math.floor(Math.random() * 3);

    return (getRandomInt() === 0) ? 'Rock' : (getRandomInt() === 1) ? 'Paper' : 'Scissors';
}

function getPlayerChoice() {

    // prompting user, to choose value

    let userInput

    userInput = prompt('Choose your weapon!', 'Rock // Paper // Scissors');

    userInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLocaleLowerCase();


    // check the input value. alert if its not rock, paper or scissors, then call the function again.  

    if (!(userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors')) {

        alert('You have to choose rock, paper or scissors')

        getPlayerChoice()
    } else {

        return userInput
    }

}

function playRound(player, computer) {

    let roundResult = []


    // Check if its a tie, otherwise check the possible scenarios from the perspective of player

    if (player === computer) {

        return 'It\'s a tie!'
    } else {

        switch (player) {

            case 'Rock':
                 (computer === 'Scissors') ? roundResult.push(true, 'You won, scissors destroyed by your rock' ) : roundResult.push(false, 'You loose, paper wrapped your rock'); 
                 break;
            case 'Paper':
                 (computer === 'Rock') ? roundResult.push(true, 'You won, you wrapped the enemy rock') : roundResult.push(false, 'You loose, scissors cut you in half');
                 break;
            case 'Scissors':
                 (computer === 'Paper') ? roundResult.push(true, 'You won, the enemy paper is in pieces') : roundResult.push(false, 'You loose, the enemy rock destroyed your scissor');

                 break; 


        }

    return roundResult;

    }

}


