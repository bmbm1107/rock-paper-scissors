
(function () {
    var btnStart = document.querySelector('#inp-start');
    var btn
    btnStart.addEventListener("click", game)
    let userScore = 0;
    let computerScore = 0;
    document.querySelector('#user-score').textContent = userScore
    document.querySelector('#computer-score').textContent = computerScore
    let roundResult = []
    let btnIngame = Array.from(document.querySelectorAll('.ingame'))

    function game() {


        btnStart.classList.add('hide')



        resetScores();
        printScores();


        let playerChoice 


        for (i of btnIngame) {

            i.classList.remove('hide')
            i.addEventListener('click', (event) => {
            i = event.target.textContent
            playRound(i)

        } )
        }


    }   




    function getComputerChoice() {

        // get rock, paper or scissors value, based on random numbers

        let getRandomInt = () => Math.floor(Math.random() * 3);

        return (getRandomInt() === 0) ? 'Rock' : (getRandomInt() === 1) ? 'Paper' : 'Scissors';
    }



    function evaluation(player, computer) {

        let roundResult = []


        // Check if its a tie, otherwise check the possible scenarios from the perspective of player

        if (player === computer) {

            roundResult.push(undefined, 'It\s a tie!')
        } else {

            switch (player) {

                case 'Rock':
                    (computer === 'Scissors') ? roundResult.push(true, 'You won, scissors destroyed by your rock') : roundResult.push(false, 'You loose, paper wrapped your rock');
                    break;
                case 'Paper':
                    (computer === 'Rock') ? roundResult.push(true, 'You won, you wrapped the enemy rock') : roundResult.push(false, 'You loose, scissors cut you in half');
                    break;
                case 'Scissors':
                    (computer === 'Paper') ? roundResult.push(true, 'You won, the enemy paper is in pieces') : roundResult.push(false, 'You loose, the enemy rock destroyed your scissor');

                    break;


            }



        }
        return roundResult;
    }


    function resetScores() {
        userScore = 0;
        computerScore = 0;


    }


    function printScores() {
        document.querySelector('#user-score').textContent = userScore
        document.querySelector('#computer-score').textContent = computerScore
    }


    function playRound(choice) {
        let playerChoice = choice
        let computerChoice = getComputerChoice()


        roundResult = evaluation(playerChoice, computerChoice)

        if (roundResult[0] === true) {
            ++userScore
        }
        else if (roundResult[0] === false) {
            ++computerScore
        };




        printScores();

        evaluateGame()




    }

    function evaluateGame() {
        if ((computerScore === 5) || (userScore === 5)) {



            btnStart.classList.remove('hide')
            for (i of btnIngame) {
                i.classList.add('hide')

            }

            let endGameMessage = () => {

                return (userScore === 5) ? "You won this party!" : "The Computer won this party!"
            }
            document.querySelector('#message').textContent = endGameMessage()



        } else {


            document.querySelector('#message').textContent = roundResult[1]

        }

    }



})();