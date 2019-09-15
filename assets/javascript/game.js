  // Words
	var gameWords = ["patrick", "spongebob", "plankton", "pineapple", "sandy", "barnicles" ];
	// Random word option to be guessed by the player.
	var theWord = "";
	// Placeholder for each letter per word
	var letterSpaces = [];
	// "_" per letter in each word 
	var notGuessed = 0;
	//Correct letters selections
	var rightLetters = [];
	//Wrong letter selections
	var wrongLetters = [];
	//Scores
	var wins = 0;
	var losses = 0;
	var turnsLeft = 15;

	//Function to start a new game
	function newGame () {
	//Generate a random word
	theWord = gameWords[Math.floor(Math.random() * gameWords.length)];
	//Split word into individual letters to be guessed
	letterSpaces = theWord.split("");
	//Number of spaces per word
	notGuessed = letterSpaces.length;
	//Reset per every 15 guesses 
	turnsLeft = 15;
	wrongLetters = [];
	rightLetters = [];

	//Generate spaces per word
	for (i = 0; i < notGuessed; i++) {
	rightLetters.push("_");}

	//HTML information
	document.getElementById("theWord").innerHTML = rightLetters.join(" ");
	document.getElementById("remGuesses").innerHTML = "Remaining Guesses Left: " + " " + turnsLeft;
	document.getElementById("wins").innerHTML = "WINS: " + " " + wins;
	document.getElementById("losses").innerHTML = "LOSSES: " + " " + losses;
}

	function checkLtrs(letter) {
	//Check if key pressed is A-Z
		if (event.keyCode >= 65 && event.keyCode <= 90) { 
		//Check if the letter pressed is in the word
		var correctLetter = false;
			for ( var i = 0; i < notGuessed; i++) {
				if(theWord[i] == letter) {
					correctLetter = true;
				}
			}
	//If selected letter is part of the word
		if(correctLetter) {
		for ( var i = 0; i < notGuessed; i++) {
			if(theWord[i] == letter) {
				rightLetters[i] = letter;}
						}
					}
	//If selected letter isn't part of the word
		else {
			wrongLetters.push(letter);
	// Number of turns decreases per selection
			turnsLeft--
			}
	      }
       }
	function roundComplete() {

	//Update turns left, right letters, wrong letters HTML
		document.getElementById("remGuesses").innerHTML = "Remaining Guesses Left: " + " " + turnsLeft;
		document.getElementById("theWord").innerHTML = rightLetters.join(" ");
		document.getElementById("wrongChoices").innerHTML = "Incorrect Letters:" + " " + wrongLetters.join(" ");


	//If word is revealed
		if (letterSpaces.toString() == rightLetters.toString()) {
			wins++;
			alert("You did it!");

	//Update wins score
		document.getElementById("wins").innerHTML = "WINS: " + " ";
	//Start a new round | clear previous guesses
		newGame();
		document.getElementById("wrongChoices").innerHTML = "Incorrect Letters:" + " ";

	//If turns are finished before revealing the word
		} else if (turnsLeft == 0) { 
			losses++;	alert("Tartar Sauce!")
	// Update losses score 
		document.getElementById("losses").innerHTML = "LOSSES: " + " ";

	//Start New Game
		newGame();
		document.getElementById("wrongChoices").innerHTML = "Incorrect Letters:" + " ";
}
	}

	//Start the game 
	newGame();

	document.onkeyup = function(event) {
		//Hold letters that have been guessed
		var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();

		//Run the check letters function
		checkLtrs(ltrsGuessed);
		roundComplete();

		}


