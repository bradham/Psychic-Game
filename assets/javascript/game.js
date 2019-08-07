
//Get element to write win total.
var winCount = document.getElementById("winCount");
console.log(winCount);
winCount.textContent = "overwrite";

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var userLetter = event.key.toLowerCase();

    // If the letter matches the random letter then run the following functions/methods.
    if (userLetter === comLetter) {
      //logic
    }
}
