let minNum = 1,
    maxNum = 10,
    guessCounter = 3,
    randomNumber = random();

// UI variables
const UiMinNumber = document.querySelector('#min-number'),
      UiMaxNumber = document.querySelector('#max-number'),
      UiInputValue = document.querySelector('#guess-input'),
      UiSubmitBtn = document.querySelector('#guess-submit'),
      UiResultMsg = document.querySelector('#result');

//When the submit button is clicked, the following function is called
UiSubmitBtn.addEventListener("click", function(e){
    if(UiSubmitBtn.value === "Play Again?"){
    //If the UiSubmitBtn value is "Play Again?" the setInitialGameConditions will be run
    setInitialGameConditions();
    }else{
        //Otherwise, it means that the game is already running
        let guessedNumber = parseInt(UiInputValue.value); //Grab the typed number from the input
        if(isNaN(guessedNumber) || guessedNumber < minNum || guessedNumber > maxNum ){
            //If the input is not a number or is out of the range, then setMessage will be called
            setMessage(`Please, enter a number between ${minNum} and ${maxNum}`, 'red');
        }else{
            //Otherwise, the game will check if the typed number is equals to the randomNumber
            if(guessedNumber === randomNumber){
                //If the number are equals, then setMessage and playAgain will be called
                setMessage(`Congratulations, the unknown number was ${randomNumber}`, 'green');
                playAgain();
            }else{
                //If they aren't equals, then the will decrement the guessCounter variable and also call setMessage
                guessCounter--;
                setMessage(`Sorry, the number is not correct. You have ${guessCounter} remaining chances`, 'red' );
                if(guessCounter === 0){
                    //If guessCounter === 0 then playAgain will be called, meaning that the user couldn't guess the number
                    setMessage(`Sorry, the correct number was ${randomNumber}. Your chances are over!`);
                    playAgain();
                }
            }
        }
    }
    e.preventDefault();
});

function setMessage(msg, color){
    //This function will just display a message to the user. According to the message, its color will be different
    UiResultMsg.textContent = msg;
    UiResultMsg.style.color = color;
    UiInputValue.style.borderColor = color;
}

function playAgain(){
    //This function will just disable the input and change the value of the bitton to "Play Again?"
    UiInputValue.disabled = true;
    UiSubmitBtn.value = "Play Again?"
}

function setInitialGameConditions(){
    //This function will set all the initial conditions of the game.
    //When the user lose or win, if he or she wants to play again, the following code will be executed
    setMessage('', 'black');
    UiInputValue.value = '';
    UiInputValue.disabled = false;
    UiSubmitBtn.value = "Submit";
    guessCounter = 3;
    randomNumber = random();
}

function random(){
    //This function will just pick a random number between 1 and 10
    let number;
    number = Math.floor((Math.random() * 10) + 1);
    return number;
}
      