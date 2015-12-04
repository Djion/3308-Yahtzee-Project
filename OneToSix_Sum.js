/**
 * @file Score calculator for each scoring method
 * @author Alex Ring, David Zhuzhunashvili, Robert Allen
 */


/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.
 *@return total_score - The score calculated based on the function's description 
 */
var oneToSixSum = function(c, Dice) {
    var total_score = 0;
    // Looks at the array of dice and compares it to the variable c
    for(i = 0; i < 5; i++){
        if(Dice[i].diceVal === c){
            total_score += c;
        }
    }
    return total_score;
}

/**
 *@function Small_Straight
 *@description Returns 30 if there are 3 numbers in a row or 0 if .
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var smallStraight = function(Dice) {
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
	}

	//These three if statements check if there are 4 dice that are in ascending numerical order
	if (numbers[0] >= 1 && numbers[1] >= 1 && numbers[2] >= 1 && numbers[3] >= 1) {
		total_score = 30;
		return total_score;
	}else if (numbers[1] >= 1 && numbers[2] >= 1 && numbers[3] >= 1 && numbers[4] >= 1) {
		total_score = 30;
		return total_score;
	}else if (numbers[2] >= 1 && numbers[3] >= 1 && numbers[4] >= 1 && numbers[5] >= 1) {
		total_score = 30;
		return total_score;
	}
	return total_score;
}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var largeStraight = function(Dice) {
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
	}
	
	//These three if statements check if there are 5 dice that are in ascending numerical order
	if (numbers[0] == 1 && numbers[1] == 1 && numbers[2] == 1 && numbers[3] == 1 && numbers[4] == 1) {
		total_score = 40;
		return total_score;
	}else if (numbers[1] == 1 && numbers[2] == 1 && numbers[3] == 1 && numbers[4] == 1 && numbers[5] == 1) {
		total_score = 40;
		return total_score;
	}

	return total_score;
}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var fullHouse = function(Dice) {
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];
	var full = false;

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
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
				total_score = 25;
				return total_score;
			}
		}
	}
	return total_score;

}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var threeOAK = function(Dice) {
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
	}

	// Looks at the array of numbers for a 3 or more of a kind if it finds one sets the total score to 3 of that value
	for(i = 0; i < 6; i++)
	{
		if(numbers[i] >= 3){
			total_score = Dice[0].diceVal + Dice[1].diceVal + Dice[2].diceVal + Dice[3].diceVal + Dice[4].diceVal;
			return total_score;
		}
	}

	return total_score;

}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var fourOAK = function(Dice) {
	var total_score = 0;
	//The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
	var numbers = [0, 0, 0, 0, 0, 0];

	//Increments the numbers array by one at the index of the die
	for (var i = 0; i < 5; i++) {
		numbers[Dice[i].diceVal - 1]++;
	}

	// Looks at the array of numbers for a 4 or more of a kind if it finds one sets the total score to 4 of that value 
	for(i = 0; i < 6; i++)
	{
		if(numbers[i] >= 4){
			total_score = Dice[0].diceVal + Dice[1].diceVal + Dice[2].diceVal + Dice[3].diceVal + Dice[4].diceVal;
			return total_score;
		}
	}

	return total_score;
}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var fiveOAK = function(Dice) {
	var total_score = 0;

	//Checks if 5 dice are equal
	if((Dice[0].diceVal == Dice[1].diceVal) && (Dice[0].diceVal == Dice[2].diceVal) && (Dice[0].diceVal == Dice[3].diceVal) && (Dice[0].diceVal == Dice[4].diceVal)){
		total_score = 50;
		return total_score;
	}

	return total_score;	
}

/**
 *@function OneToSix_Sum
 *@description Returns the the sum of all the dice with the given value c.
 *@param c - An integer from 1 to 6.
 *@param Dice - An array of dice objects, each one having an integer value from 1 to 6.  
 */
var chance = function(Dice) {
	var total_score = 0;
	total_score = Dice[0].diceVal + Dice[1].diceVal + Dice[2].diceVal + Dice[3].diceVal + Dice[4].diceVal;
	return total_score;
}
