//Game Function
$(document).ready(function() {

    $("#rollButton").click(function() {
        playGame();
    });

});

var playGame = function()
    {
        //Returns a number from 1-6
        var diceRoll = function()
        {
            return Math.floor(Math.random() * 6 + 1);
        }

        //Setting the dice
        var dice1 = diceRoll();
        var dice2 = diceRoll();
        var dice3 = diceRoll();
        var dice4 = diceRoll();
        var dice5 = diceRoll();
        //Button for clicking that displays the dice roll
        $("#rollOutput").text(dice1 + ", " + dice2 + ", " + dice3 + ", " + dice4 + ", " + dice5);
    }