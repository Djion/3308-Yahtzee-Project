// Alex -- We are now importing all of the scorecard functions from a seperate script

var c;
var ctx;

var allDice = [];
var diceImg;

// class Dice
var Dice = function(diceNum, isActive) {
    this.diceNum = diceNum;
    this.diceVal = Math.floor(Math.random() * 6) + 1;
    this.isActive = isActive;
    this.dimen = 48;
}

// Creates a function on all dice objects called diceRoll
Dice.prototype.diceRoll = function() {
    this.diceVal = Math.floor(Math.random() * 6) + 1;
}

// Will give the coordinate box of a dice on the canvas
Dice.prototype.loc = function() {
    var loc = {};
    loc['startX'] = 16 + 64 * (this.diceNum - 1);
    loc['startY'] = (this.isActive) ? 16 : 80;
    loc['endX'] = loc['startX'] + this.diceDimen;
    loc['endY'] = loc['startY'] + this.diceDimen;

    return loc;
}

// Draws a dice at the correct location with the correct image
Dice.prototype.draw = function() {
    var imgDiceDimen = 128;
    loc = this.loc();
    ctx.drawImage(diceImg, (this.diceVal - 1) * imgDiceDimen, 0, imgDiceDimen, imgDiceDimen, loc['startX'], loc['startY'], this.dimen, this.dimen);
}

// Setup the game
$(document).ready(function() {
    c = $("#yahtzee")[0];
    ctx = c.getContext("2d");
    ctx.font = "30px Arial";

    diceImg = new Image();
    diceImg.src = 'assets/dice.png';

    for (var i = 1; i <= 5; ++i)
        allDice.push(new Dice(i, true))

    $("#rollButton").click(function() {
        playGame();
    });

    $('.dropdown-menu li a').click(function() {
        var selText = $(this).text(); 
        scoreSelection(selText);
    });
});

// Clears the canvas for redrawing
var clearScreen = function() {
    ctx.clearRect(0, 0, c.width, c.height);
}

// Draws image associated with diceVal at location give by diceNum
var drawDice = function() {
    for (var i = 0; i < allDice.length; ++i)
        allDice[i].draw();
}


var rollActiveDice = function() {
    for (var i = 0; i < allDice.length; ++i)
        if (allDice[i].isActive)
            allDice[i].diceRoll();
}

var scoreSelection = function(selText){
    console.log(selText);
    var scoreText;
    if (selText === "Aces") {
        scoreText = OneToSixSum(1,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Aces is " + scoreText, 30, 150);
    }
    else if(selText === "Twos"){
        scoreText = OneToSixSum(2,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Twos is " + scoreText, 30, 150);
        
    }
    else if(selText === "Threes"){
        scoreText = OneToSixSum(3,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Threes is " + scoreText, 30, 150);
    }
    else if(selText === "Fours"){
        scoreText = OneToSixSum(4,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Fours is " + scoreText, 30, 150);
    }
    else if(selText === "Fives"){
        scoreText = OneToSixSum(5,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Fives is " + scoreText, 30, 150);
    }
    else if(selText === "Sixes"){
        scoreText = OneToSixSum(6,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Sixes is " + scoreText, 30, 150);
    }
    else if(selText === "3 of a Kind"){
        scoreText = 0;
    }
    else if(selText === "4 of a Kind"){
        scoreText = 0;
    }
    else if(selText === "Full Straight"){
        scoreText = 0;
    }
    else if(selText === "Large Straight"){
        scoreText = 0;
    }
    else if(selText === "Yahtzee!"){
        scoreText = 0;
    }
    else if(selText === "Chance"){
        scoreText = 0;
    }
}

var playGame = function(){
    clearScreen();

    // Setting the dice
    rollActiveDice();

    //Disply the rolled dice to the screen
    drawDice();
}