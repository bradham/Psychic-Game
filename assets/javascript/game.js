
//Get element to write win total.
var winCount = document.getElementById("winCount");
var lossCount = document.getElementById("lossCount");
var guessCount = document.getElementById("guessCount");
var charGuess = document.getElementById("charGuess");

//Initialize the game numbers and output
var wins = 0;
var losses = 0;
var guesses = 9;
winCount.innerHTML = wins;
lossCount.innerHTML = losses;
guessCount.innerHTML = guesses;

//Computer picks a random letter
var comLetter = randomLetter();
//For debugging: console.log("comLetter is: " + comLetter);

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var userLetter = event.key.toLowerCase();
    //For debugging: console.log("userLetter is: " + userLetter);

    //If the user's letter typed is not a-z then don't do anything.
    if (!isLetter(userLetter)) { }
    // If the letter matches the random letter then add 1 win, write it in the winCount div, and reset
    else if (userLetter === comLetter) {
        wins++;
        winCount.innerHTML = wins;
        resetGame();
    }
    else {
        //If guess is wrong then update guesses
        guesses--;
        guessCount.innerHTML = guesses;

        //show the user their guesses
        charGuess.innerHTML += (userLetter + ", ");

        //when guesses are done record a loss and reset game
        if (guesses == 0) {
            losses++;
            lossCount.innerHTML = losses;
            resetGame();
        };
    };
};

//Reset game without erasing wins and losses.
function resetGame() {
    guesses = 9;
    guessCount.innerHTML = guesses;
    charGuess.innerHTML = " ";
    comLetter = randomLetter();
    //For debugging: console.log(comLetter);
}

//Returns a single random letter
function randomLetter() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

//Returns true if the string is a single, lowercase letter a through z.
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}