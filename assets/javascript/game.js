var wins = 0;
var losses = 0;
var guessLeft = 9;

var computerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var userGuessesText = document.getElementById("userGuesses-text");

var computerGuess="";
var wrongGuesses = [];

document.onkeyup = function(event) { 

    var userGuess = event.key;

    if(guessLeft==9){computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];
    }

     if (userGuess === computerGuess){
         wins++;
         guessLeft=9;
         wrongGuesses = []

     } else if (guessLeft>1){guessLeft--;   
        wrongGuesses.push(userGuess);
    }
     
     else{     
        losses++;
        guessLeft=9; 
        wrongGuesses = []
        }
 
       winsText.textContent = "Wins: "+wins;
       lossesText.textContent = "Losses: "+losses;
        guessLeftText.textContent = "Guesses Left: "+guessLeft;
       userGuessesText.textContent= "Your Guesses so far: "+ wrongGuesses.join(" ");
    
  
  
  
    }
