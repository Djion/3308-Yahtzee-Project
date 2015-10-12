var c;
var ctx;
var diceImg;
var dice1;
var dice2;
var dice3;
var dice4;
var dice5;

//Setup the game
$(document).ready(function() {
    c = $("#yahtzee")[0];
    ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    diceImg = new Image();
    diceImg.src = 'assets/dice.png'

    $("#rollButton").click(function() {
        playGame();
    });
});

//Returns a number from 1-6
var diceRoll = function() {
    return Math.floor(Math.random() * 6 + 1);
}

// Clears the canvas for redrawing
var clearScreen = function() {
    ctx.clearRect(0, 0, c.width, c.height);
}

//Draws diceNum from the dice.png image to the screen at (posX, posY)
function drawDice(diceNum, posX, posY) {
    var diceHeightWidth = 128;

    var diceStartX = (diceNum - 1) * 128;
    var diceEndX = diceStartX + 128;

    ctx.drawImage(diceImg, diceStartX, 0, diceHeightWidth, diceHeightWidth, posX, posY, 48, 48);
}

var playGame = function(){
    clearScreen();

    //Setting the dice
    dice1 = diceRoll();
    dice2 = diceRoll();
    dice3 = diceRoll();
    dice4 = diceRoll();
    dice5 = diceRoll();

    var diceHeight = c.height * 0.1;

    //Disply the rolled dice to the screen
    drawDice(dice1, 64, diceHeight)
    drawDice(dice2, 64 * 2, diceHeight);
    drawDice(dice3, 64 * 3, diceHeight);
    drawDice(dice4, 64 * 4, diceHeight);
    drawDice(dice5, 64 * 5, diceHeight);
    console.log(dice1 + ", " + dice2 + ", " + dice3 + ", " + dice4 + ", " + dice5);

    $(document.body).on('click', '.dropdown-menu li a', function (e) {
    var selText = $(this).text(); 
    scoreSelection(selText,dice1,dice2,dice3,dice4,dice5);
    });
}

var scoreSelection = function(selText,d1,d2,d3,d4,d5){
    console.log(selText);
    if(selText === "Aces")
    {
        var scoreText = ace_score(d1,d2,d3,d4,d5);
        console.log(scoreText);
        ctx.fillText("Score for Aces is " + scoreText,30,150);

    }
}

var ace_score = function(d1,d2,d3,d4,d5)
{
    var total_score = 0;
    var diceArray = [d1,d2,d3,d4,d5];
    for(i = 0; i < 5; i++){
        if(diceArray[i] === 1){
            total_score = total_score +1;
        }
    }
    return total_score;
}

