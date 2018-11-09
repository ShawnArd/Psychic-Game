// $(document).ready(function() {

// $("#pbj").on("click", function() {

//     alert("Mmm... Peanut Butter Jelly Time.");
//     pbjCounter++;
//     alert("You've eaten " + pbjCounter + " PB&J sandwiches");

//   });

// });

let guessLeft = 9;
let wins = 0;
let losses = 0;
let userGuesses = ""


   choice = "" ;
function compChoice() {
    // let possible = "abcdefghijklmnopqrstuvwxyz";
    let compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
     choice= compChoices[(Math.floor(Math.random() * compChoices.length))];
     return choice;
}
compChoice()
console.log(compChoice());
console.log(choice)

// function playerChoice() {
    document.onkeyup = function(event) {
        
        
        var userInput = event.key.toLowerCase();
        if (userInput == choice) { 
            wins +=1
            guessLeft = 9
            userGuesses = ""
            alert("You've won! press a letter to play again")
            compChoice()
            
        } else if (guessLeft < 2 ){
            losses +=1
            guessLeft = 9
            userGuesses = ""
            alert("I actually picked " + choice +"! Try again next round" )
            compChoice()
            
        }
        else {
            // for( let i = 0; i < userGuesses.length; ++i ) {}

            alert("try again")
            guessLeft -= 1
            userGuesses += userInput + " "
        }
        document.querySelector("#wins").textContent = "Wins: " + wins;
        document.querySelector("#losses").textContent = "Losses: " + losses;
        document.querySelector("#guesses").textContent = "Guesses: " + userGuesses;
        console.log("wins:" + wins)
        console.log("losses:" + losses)
        console.log(userGuesses)
        console.log(guessLeft)
        console.log(choice)



}