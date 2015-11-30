// Alex -- We are now importing all of the scorecard functions from a seperate script

var c;
var ctx;

var allDice = [];
var diceImg;

var rollCounter = 0;

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
    loc['endX'] = loc['startX'] + this.dimen;
    loc['endY'] = loc['startY'] + this.dimen;

    return loc;
}

// Draws a dice at the correct location with the correct image
Dice.prototype.draw = function() {
    var imgDiceDimen = 128;
    loc = this.loc();

    ctx.drawImage(
        diceImg, 
        (this.diceVal - 1) * imgDiceDimen, 
        0, 
        imgDiceDimen, 
        imgDiceDimen, 
        loc['startX'], 
        loc['startY'], 
        this.dimen, 
        this.dimen
    );
}

Dice.prototype.toggle = function() {
    this.isActive = (this.isActive) ? false : true;
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

    $('#yahtzee').click(function(e) {
        // Get X,Y coordinates of click relative to the canvas
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        console.log("(X,Y) (" + x + ", " + y + ")");
        checkDiceClick(x, y);
    });
});

var checkDiceClick = function(x, y) {
    for (var i = 0; i < allDice.length; ++i) {
        var die = allDice[i];
        loc = die.loc();
        if ( x >= loc['startX']
            && x <= loc['endX']
            && y >= loc['startY']
            && y <= loc['endY']) {
            die.toggle();

            clearScreen();
            drawDice();
            break;
        }
    }
}

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
    clearScreen();
    var scoreText;
    if (selText === "Aces") {
        scoreText = OneToSix_Sum(1,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Aces is " + scoreText, 30, 150);
        $('#aces').addClass('disabled', true);
	    $("#ace_score").text(scoreText);
    }
    else if(selText === "Twos"){
        scoreText = OneToSix_Sum(2,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Twos is " + scoreText, 30, 150);  
        $('#twos').addClass('disabled', true);  
	   $("#2_score").text(scoreText);
    }
    else if(selText === "Threes"){
        scoreText = OneToSix_Sum(3,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Threes is " + scoreText, 30, 150);
        $('#threes').addClass('disabled', true);
	   $("#3_score").text(scoreText);
    }
    else if(selText === "Fours"){
        scoreText = OneToSix_Sum(4,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Fours is " + scoreText, 30, 150);
        $('#fours').addClass('disabled', true);
	   $("#4_score").text(scoreText);
    }
    else if(selText === "Fives"){
        scoreText = OneToSix_Sum(5,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Fives is " + scoreText, 30, 150);
        $('#fives').addClass('disabled', true);
	   $("#5_score").text(scoreText);
    }
    else if(selText === "Sixes"){
        scoreText = OneToSix_Sum(6,allDice);
        console.log(scoreText);
        ctx.fillText("Score for Sixes is " + scoreText, 30, 150);
        $('#sixes').addClass('disabled', true);
	   $("#6_score").text(scoreText);
    }
    else if(selText === "3 of a Kind"){
        scoreText = Three_OAK(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Three of a kind is " + scoreText, 30, 150);
        $('#3ofkind').addClass('disabled', true);
	   $("#3_kind_score").text(scoreText);
    }
    else if(selText === "4 of a Kind"){
        scoreText = Four_OAK(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Four of a kind is " + scoreText, 30, 150);
        $('#4ofkind').addClass('disabled', true);
	   $("#4_kind_score").text(scoreText);
    }
    else if(selText === "Full House"){
        scoreText = Full_House(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Full House is " + scoreText, 30, 150);
        $('#fullHouse').addClass('disabled', true);
	   $("#full_house_score").text(scoreText);
    }
    else if(selText === "Small Straight"){
        scoreText = Small_Straight(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Small Straight is " + scoreText, 30, 150);
        $('#smallStraight').addClass('disabled', true);
	   $("#sm_straight_score").text(scoreText);
    }
    else if(selText === "Large Straight"){
        scoreText = Large_Straight(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Large Straight is " + scoreText, 30, 150);
        $('#largeStraight').addClass('disabled', true);
	   $("#lg_straight_score").text(scoreText);
    }
    else if(selText === "Yahtzee!"){
        scoreText = Five_OAK(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Yahtzee! is " + scoreText, 30, 150);
        $('#yahtzeeScore').addClass('disabled', true);
	   $("#yahtzee_score").text(scoreText);
    }
    else if(selText === "Chance"){
        scoreText = Chance(allDice);
        console.log(scoreText);
        ctx.fillText("Score for Chance is " + scoreText, 30, 150);
        $('#chanceScore').addClass('disabled', true);
	   $("#chance_bonus_score").text(scoreText);
    }
}

var playGame = function(){
    if(rollCounter < 3){
        clearScreen();

        // Setting the dice
        rollActiveDice();

        //Disply the rolled dice to the screen
        drawDice();

        rollCounter++;
    }
    else{
        ctx.fillText("Please make a score selection", 30, 150);
        for(i = 0; i < 5; i++)
        {
            allDice[i].isActive = true;
        }
        rollCounter = 0;
    }

}
