//This file Contains all of the function related to the scorecard. 
//They will return a value for the chosen selection for scoring
//Such as 2's, three of a kind, or straight



//Function to return the scorecard options of 1 - 6
//Variables : c = integer 1-6
//			  Dice = an array of dice
var OneToSix_Sum = function(c,Dice)
{
    var total_score = 0;
    // Looks at the array of dice and compares it to the variable c
    for(i = 0; i < 5; i++){
        if(Dice[i].diceVal === c){
            total_score += c;
        }
    }
    return total_score;
}

//Function to return the scorecard option for Small Straight (A small straight is any 4 dice that are in numerical order)
//Variables : Dice = an array of dice
var Small_Straight = function(Dice)
{
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
	}

	//These three if statements check if there are 4 dice that are in ascending numerical order
	if (numbers[0] >= 1 && numbers[1] >= 1 && numbers[2] >= 1 && numbers[3] >= 1) {
		total_score = 10;
	}if (numbers[1] >= 1 && numbers[2] >= 1 && numbers[3] >= 1 && numbers[4] >= 1) {
		total_score = 14;
	}if (numbers[2] >= 1 && numbers[3] >= 1 && numbers[4] >= 1 && numbers[5] >= 1) {
		total_score = 18;
	}
	return total_score;
}

//Function to return the scorecard option for Large Straight (A large straight is any 5 dice that are in numberical order)
//Variables : Dice = an array of dice
var Large_Straight = function(Dice)
{
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i] - 1]++;
	}
	
	//These three if statements check if there are 5 dice that are in ascending numerical order
	if (numbers[0] == 1 && numbers[1] == 1 && numbers[2] == 1 && numbers[3] == 1 && numbers[4] == 1) {
		total_score = 15;
		return total_score;
	}else if (numbers[1] == 1 && numbers[2] == 1 && numbers[3] == 1 && numbers[4] == 1 && numbers[5] == 1) {
		total_score = 20
	}

	return total_score;
}

//Function to return the scorecard option for Full House (A full house is when you have three of one number and 2 of another number example : 2,2,3,3,3)
//Variables : Dice = an array of dice
var Full_House = function(Dice)
{
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];
	var full = false;

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i] - 1]++;
	}

	//Checks if there is a 3 of a kind
	for (var i = 0; i < 6; i++) {
		if (numbers[i] == 3) {
			full = true;
			break;
		}
	}

	//Checks if there is a 2 of a kind only if there is a 3 of a kind
	if (full) {
		for (var i = 0; i < 6; i++) {
			if (numbers[i] == 2) {
				total_score = Dice[0] + Dice[1] + Dice [2] + Dice[3] + Dice[4];
				return total_score;
			}
		}
	}
	return total_score;

}

//Function to return the scorecard option for Three of A kind
//Variables : Dice = an array of dice
var Three_OAK = function(Dice)
{
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i] - 1]++;
	}

	// Looks at the array of numbers for a 3 or more of a kind if it finds one sets the total score to 3 of that value
	for(i = 0; i < 6; i++)
	{
		if(numbers[i] >= 3){
			total_score = 3*(i+1);
			return total_score;
		}
	}

	return total_score;

}

//Function to return the scorecard option for Four of A Kind
//Variables : Dice = an array of dice
var Four_OAK = function(Dice)
{
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i] - 1]++;
	}

	// Looks at the array of numbers for a 4 or more of a kind if it finds one sets the total score to 4 of that value 
	for(i = 0; i < 6; i++)
	{
		if(numbers[i] >= 4){
			total_score = 4*(i+1);
			return total_score;
		}
	}

	return total_score;
}

//Function to return the scorecard option for Five of A Kind
// Variables : Dice = an array of dice
var Five_OAK = function(Dice)
{
	var total_score = 0;

	//Checks if 5 dice are equal
	if(Dice[0].diceval === Dice[1] && Dice[0] === Dice[2] && Dice[0]=== Dice[3] && Dice[0]=== Dice[4]){
		total_score = Dice[0] * 5;
		return total_score;
	}

	return total_score;	
}