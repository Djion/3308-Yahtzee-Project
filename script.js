// Alex -- We are now importing all of the scorecard functions from a seperate script

var c;
var ctx;

var allDice = [];
var diceImg;

var rollCounter = 0;
var turnNumber = 0;
var grandTotal = 0;
var totalSingles = 0;
var totalUpper = 0;
var totalLower = 0;

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

    $('.dropdown-menu li').click(function() {
        scoreSelection($(this));
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
			if (rollCounter >= 3)
				ctx.fillText("Please make a score selection", 16, 166);

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


var totalScores = function() {
	var tds = ["1_score", "2_score", "3_score", "4_score", "5_score", "6_score",
		"3_kind_score", "4_kind_score", "full_house_score", "sm_straight_score", "lg_straight_score",
		"yahtzee_score", "chance_bonus_score"];

	var sum = 0;

	for (var i = 0; i < tds.length; ++i) {
		var num = parseInt($("#" + tds[i]).text());
		if (! isNaN(num))
			sum += num;

		if (i === 5) {
			totalSingles = sum;
			sum = 0;
		}
	}

	totalLower = sum;
	if (totalSingles != 0)
		$("#total_singles_score").text(totalSingles);
	
	if ( totalSingles >= 63 ) {
		$("#bonus_score").text = 35;
		totalUpper = totalSingles + 35;	
	} else {
		$("#bonus_score").text = 0;
		totalUpper = totalSingles;
	}
	
	if (totalUpper != 0) {
		$("#total_upper_score").text(totalUpper);
		$("#total_upper_score2").text(totalUpper);
	}

	if (totalLower != 0)
		$("#total_lower_score").text(totalLower);
	
	grandTotal = totalUpper + totalLower;
	$("#grand_total_score").text(grandTotal);
}

var scoreSelection = function(scoreElement){
	scoreElement.addClass("disabled", true);
    clearScreen();
	var scoreFuncNum = scoreElement.data("scoreFunc");

	var scoreData = [
		["#3_kind_score", function(){ return Three_OAK(allDice); }],
		["#4_kind_score", function() { return Four_OAK(allDice); }],
		["#full_house_error", function() { return Full_House(allDice); }],
		["#sm_straight_score", function() { return Small_Straight(allDice); }],
		["#lg_straight_score", function() { return Large_Straight(allDice); }],
		["#yahtzee_score", function() { return Five_OAK(allDice); }],
		["#chance_bonus_score", function() { return Chance(allDice); }]
	];

	if (scoreFuncNum > 0 && scoreFuncNum <= 6) {
		$("#" + scoreFuncNum + "_score").text(OneToSix_Sum(scoreFuncNum, allDice));
	} else {
		scoreFuncNum -= 7;

		var scoreTd = scoreData[scoreFuncNum][0];
		var score = scoreData[scoreFuncNum][1]();
		$(scoreTd).text(score);
	}

	rollCounter = 0;
	turnNumber++;
	totalScores();
	for (var i = 0; i < allDice.length; ++i)
		allDice[i].isActive = true;
	
	if (turnNumber === 13) {
		ctx.fillText("GAME OVER", 16, 36);
		ctx.fillText("TOTAL SCORE = " + grandTotal, 16, 96);
	}
}
	

var playGame = function(){
	clearScreen();
    if(rollCounter < 3){
        rollActiveDice();
        rollCounter++;
    }
    else{
        ctx.fillText("Please make a score selection", 16, 166);
    }
	drawDice();
}
