
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

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var userLetter = event.key.toLowerCase();
    console.log(userLetter);

    //Find randomizer for letters. An array? or randomizer between 1 and 26?
    var comLetter = "q";

    // If the letter matches the random letter then run the following functions/methods.
    if (userLetter === comLetter) {
      //add 1 win and then write it in the winCount div
      wins++;
      winCount.innerHTML = wins;
      //decrement guesses in this round
      guesses--;
      guessCount.innerHTML = guesses;
    }
    else {
        //add losses
        losses++;
        lossCount.innerHTML = losses;
        guesses--;
        guessCount.innerHTML = guesses;
  
    };

    if (guesses == 0) {
        guesses = 9;
        guessCount.innerHTML = guesses;
    };

    //add total guesses
    charGuess.innerHTML += (userLetter + ", ");

}
