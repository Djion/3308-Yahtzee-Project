// General gameflow for a single player on a game of yahtzee
// This should look like
// --TURN BEGINS--
// 1. User rolls the dice for the first time
// 2. User selects the dice they would like to save and the dice they would like to reroll
// 3. User rolls the dice a second time
// 4. User selects the dice they would like to save and the dice they would like to reroll
// 5. User rolls the dice a final time
// 6. User selects a scorecard option and the game gives them a score for the dice choice they have made
// --TURN ENDS--

var buttonPressed = false;

var waitForIt = function(){
	if(!buttonPressed ){
		setTimeout(waitForIt,2500);
	}
	else{
		document.getElementById() //http://stackoverflow.com/questions/2221836/how-can-i-make-a-program-wait-for-a-button-press-in-javascript
	}
}

var playGame = function(){
	var RollCounter = 0;
    clearScreen();
    while(scoreCounter < 13){
        while(rollCounter < 3){
    	   rollActiveDice();
    	   drawDice();
    	    //DISPLAY TEXT ROLL 1 
            //WAIT FOR USER TO CLICK ROLL DICE
            //USER SELECTS WHAT DICE THEY WANT
            rollCounter++;
        }
    //FINAL DICE
    //ASK USER TO SELECT A SCORE OPTION
    //WAIT FOR SCORE OPTION
    scourCounter++;
    rollCounter = 0;
    } 

}