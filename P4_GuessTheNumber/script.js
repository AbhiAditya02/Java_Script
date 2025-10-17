let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const lastGuess = document.querySelector('.lastGuess');
const attemptRem = document.querySelector('.attempt');
const remarks = document.querySelector('.lowOrHi');
const result = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame  = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateInput(guess);
    })
}

function validateInput(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
        userInput.value = '';
    } else if(guess < 1 || guess > 100){
        alert('Please enter a number between 1 - 100');
        userInput.value = '';
    } else {
        prevGuess.push(guess);
    }

    if(numGuess >= 10){
        displayGuess(guess)
        displayMessage(`GameOver`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess == random){
        displayMessage("right")
        endGame();
    } else if (guess < random) {
        displayMessage("The Numbers is TOOO Low")
    } else if (guess > random) {
        displayMessage("The Number is TOOO High")
    }
}

function displayGuess(guess){
    userInput.value = '';
    lastGuess.innerHTML += `${guess} `;
    numGuess++;
    attemptRem.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    if(message == 'right'){
        remarks.innerHTML = `<h3>🎉Congratulation!!! Guessed Right🎉</h3><p>Random Number : ${random}</p>`;
    } else if(message == 'GameOver'){
        remarks.innerHTML = `<h3>😞Opps!!! Game Over😞</h3><p>Random Number : ${random}</p>`;
    } else{
        remarks.innerHTML = `<h3>${message}</h3>`;
    }
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame" style="color: blue; cursor: pointer">Start New Game</h3>`;
    result.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1
        lastGuess.innerHTML = '';
        remarks.innerHTML = ''
        attemptRem.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;
    })
}