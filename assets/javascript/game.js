 alert("Press OK to get started!")
 
 
 // Creat array for random words I want to appear in the game
 
 const words = ['barnicle', 'sponge', 'patrick']
 
 // Variables for random word generator, and score/letter trackers
 var randomNum = Math.floor(Math.random() * words.length);
 var chosenWord = words[randomNum];
 var rightWord =[];
 var wrongWord = [];
 var underScore = [];


var docUnderScore = document.getElementsByClassName('underScore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

 console.log(chosenWord);
 
 // Create underscores depending on the length of the word
 
 var generateunderScore = () => {
   for(var i = 0; i < chosenWord.length; i++) {
   underScore.push('_');
   }
   return underScore;
 }
 
 //Generate letter when key is pressed
    document.addEventListener('keypress', (event) => {
    var keyWord = String.fromCharCode(event.keyCode);


// if guess is correct
   if(chosenWord.indexOf(keyWord) > -1) { 

//add to correct bank
       rightWord.push(keyWord);
 
 // replace underscore with correct letter
       underScore[chosenWord.indexOf(keyWord)] = keyWord;
       docUnderScore[0].innerHTML = underScore.join('');
       
       
   //Checks if user word matches
     if(underScore.join('') == chosenWord) {
       alert('You Win'); 
     }
    }
    else {
        wrongWord.push(keyWord);
    
    }
 });

docWrongGuess[0].innerHTML = generateunderScore().join('');
if(underScore.join('') == wrongWord) {
    alert('You Lose'); 
}