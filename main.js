// Global Variables
const options = ['rock','paper','scissors'];
let playerPlay = '';
let computerPlay = '';
let playerScore = 0;
let computerScore = 0;
let scores = [0,0];
let winner;

//DOM Manipulation
const buttons = document.querySelectorAll('.selectionButtons');
const winnerPar = document.querySelector('#results');
const resultsDiv = document.querySelector('#showResults');
const resultPar = document.createElement('p');
const choicesDiv = document.querySelector('#choicesDiv');
const choicesPar = document.createElement('p');
choicesDiv.appendChild(choicesPar);
resultsDiv.insertBefore(resultPar,results);
const repeatDiv = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(repeatDiv);


//Game Functions

//Computer's choice using math.random
function computer(){
    let i = Math.floor(Math.random() * Math.floor(3));
    return options[i];
}
 
//One round play and score count
function play(playerPlay, computerPlay){
    if (playerPlay == computerPlay) {
            resultPar.textContent = 'Draw!';
            winner = 'no one';
        }
    else if (playerPlay == 'rock'){
            if (computerPlay == 'paper'){
                resultPar.textContent = `Fail!`;
                winner = 'computer';
                computerScore += 1;
            }
            else if (computerPlay == 'scissors'){
                resultPar.textContent = `Win!`;
                winner = 'player';
                playerScore += 1;
            }
    }
    else if (playerPlay == 'paper'){
            if (computerPlay == 'scissors'){
                resultPar.textContent = `Fail!`;
                winner = 'computer'; 
                computerScore += 1;
            }
            else if (computerPlay == 'rock'){
                resultPar.textContent = `Win!`;
                winner = 'player';
                playerScore += 1;
            }
    }
    else if (playerPlay == 'scissors'){
            if (computerPlay == 'rock'){
                resultPar.textContent = `Fail!`;
                winner = 'computer';
                computerScore += 1;
            }
            else if (computerPlay == 'paper'){
                resultPar.textContent = `Win!`;
                winner = 'player';
                playerScore += 1;
            }
    }
    choicesPar.textContent = `Your choice: ${playerPlay} \xa0\xa0\xa0 Computer\'s choice: ${computerPlay}`;
    scores = [playerScore, computerScore];
    winnerPar.textContent = `Player: ${playerScore},\xa0 Computer: ${computerScore}`;
    return scores;
}

//Restarting function
function confirmRestart(){
    let answear = confirm('Do you want to restart?');
    if (answear == true){
            playerPlay = '';
            computerPlay = '';
            playerScore = 0;
            computerScore = 0;
            scores = [0,0];
            choicesPar.textContent = ``;
            winnerPar.textContent = ``;
            resultPar.textContent = ``;
    }
    else {
        choicesPar.textContent = `Well then, thanks for playing! If you change your mind, click one of the option buttons!`;
        buttons.forEach((button) => {
            button.removeEventListener('click', () => {
                playerPlay = button.value;
                game(playerPlay);
          });
        });
    }
}


//Actual game function
function game(playerPlay){
        computerPlay = computer();
        scores = play(playerPlay,computerPlay);
        playerScore = scores[0];
        computerScore = scores[1];
    if (playerScore == 5 || computerScore == 5){
        confirmRestart();
    }
}

//On click play
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerPlay = button.value;
        game(playerPlay);
  });
});
