// Idea for the game loop is to use a boolean value that changes when the button "roll dice"
// Is clicked. This would mean that the turn starts, the dice are rolled and displayed
// The player is asked to then choose which dice they would like to keep, then the o

//Variable to determine if the roll dice button has been clicked
var rollBool = false;
//Variable to determine if a score selection has been made
var scoreBool = false;
//Variable to count what turn you are on, there are 13 turns per player per game
var turnCount = 0;
//Times the dice have been rolled in a given turn
var diceRolls = 0;
//Variable to do stuff with for random waiting
var waiting = 0;


//Function that will be used when the roll dice button has been clicked
//Returns true
var diceRoller = function(){
    ctx.fillText("Please select the dice you would like to keep and then roll again",30,150);
    rollBool = true;
    return rollBool;
}

//Function that will be used when the score selection has been clicked
//Returns true
var scoreSelector = function(message){
    ctx.fillText(message + "is now scored",30,150);
    scoreBool = true;
    return score scoreBool;
}


//MAIN GAME FUNCTION
var playGame = function(){
//Outer game loop that breaks when the turns are over
for(turnCount < 13){

    //The turn starts clear the screen
    clearScreen();

    //inner game loop that breaks when a turn finishes *IE dice has been rolled 3 times
    for(diceRolls < 3){

        //Turn starts, roll the dice
        rollActiveDice();
        drawDice();

        //Dice have been rolled increment the dice counter
        diceRolls++;

        //Waits for the roll button to be clicked
        //NOTE THIS STILL NEEDS TO BE IMPLEMENTED IN THE SCRIPT.JS FOR WHEN THE BUTTON IS CLICKED
        while(rollBool === false){
            waiting = 0;
            }

        //Sets the rollbool back to false so the waiting loop can be triggered again
        rollBool = false;
        }

    //We exit the inner loop and at this point the dice have been rolled 3 times, 
    //What we are left with is the dice the player will use for scoring

    //Ask the player to make a score selection
    ctx.fillText("Please make a score selection for these dice", 30, 150);
    
    //Loop to see if a score has been selected
    //NOTE THIS STILL NEEDS TO BE IMPLEMENTED IN THE SCRIPT.JS FOR WHEN A SCORE IS CHOSEN
    while(scoreBool === false){
        waiting = 0;
    }

    //A score selection has been chosen and the turn can now end
    //Increment the turn counter
    turnCount++;

}

//Clear the screen and print game over
clearScreen();
ctx.fillText("GAME OVER", 30, 150);
}