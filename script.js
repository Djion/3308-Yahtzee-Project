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
    diceImg = new Image();
    diceImg.src = 'assets/dice.png'

    $("#rollButton").click(function() {
        playGame();
    });

    $(document.body).on('click', '.dropdown-menu li a', function (e) {
    var selText = $(this).text(); 
    scoreSelection(selText);
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
    var dice1 = diceRoll();
    var dice2 = diceRoll();
    var dice3 = diceRoll();
    var dice4 = diceRoll();
    var dice5 = diceRoll();

    var diceHeight = c.height * 0.1;

    //Disply the rolled dice to the screen
    drawDice(dice1, 64, diceHeight)
    drawDice(dice2, 64 * 2, diceHeight);
    drawDice(dice3, 64 * 3, diceHeight);
    drawDice(dice4, 64 * 4, diceHeight);
    drawDice(dice5, 64 * 5, diceHeight);
    console.log(dice1 + ", " + dice2 + ", " + dice3 + ", " + dice4 + ", " + dice5);
}

var scoreSelection = function(selText){
    console.log(selText);
    
}


