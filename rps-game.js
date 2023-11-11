

function game() {

    let userScore = 0;
    let computerScore = 0;
    let result = (userScore > computerScore) ? "You won!" : "You loose!";

    for (let i = 0; i < 5; ++i) {

        result = playRound(getComputerChoice(), getPlayerChoice());
        // Log the results of the round
        console.log(result)

        // Calculating Score by the return string of playround() -- Not so nice solution...
        if (result.slice(0, 7) === "You won") {

            ++userScore

        } else if (result.slice(0, 9) === "You loose") {

            ++computerScore
        } else {
            ++userScore
            ++computerScore
        }

    }

    alert(`${result}
    Your score: ${userScore}
    Computer's score: ${computerScore}`)

}


function getComputerChoice() {

    // get rock, paper or scissors value, based on random numbers

    let getRandomInt = () => Math.floor(Math.random() * 3);

    return (getRandomInt() === 0) ? "Rock" : (getRandomInt() === 1) ? "Paper" : "Scissors";
}

function getPlayerChoice() {

    // prompting user, to choose value

    let userInput

    userInput = prompt("Choose your weapon!", "Rock // Paper // Scissors");

    userInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLocaleLowerCase();


    // check the input value. alert if its not rock, paper or scissors, then call the function again.  

    if (!(userInput === "Rock" || userInput === "Paper" || userInput === "Scissors")) {

        alert("You have to choose rock, paper or scissors")

        getPlayerChoice()
    } else {

        return userInput
    }

}

function playRound(player, computer) {


    // Check if its a tie, otherwise check the possible scenarios from the perspective of player

    if (player === computer) {

        return "It's a tie!"
    } else {

        switch (player) {

            case "Rock":
                return (computer === "Scissors") ? "You won, scissors destroyed by your rock" : "You loose, paper wrapped your rock";
            case "Paper":
                return (computer === "Rock") ? "You won, you wrapped the enemy rock" : "You loose, scissors cut you in half";
            case "Scissors":
                return (computer === "Paper") ? "You won, the enemy paper is in pieces" : "You loose, the enemy rock destroyed your scissor";

                break;


        }

    }

}


