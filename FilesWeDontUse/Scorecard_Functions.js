//This file Contains all of the function related to the scorecard. 
//They will return a value for the chosen selection for scoring
//Such as 2's, three of a kind, or straight



//Function to return the scorecard options of 1 - 6
//Variables : c = integer 1-6
//			  Dice = an array of dice
var OneToSixSum = function(c,Dice)
{
    var total_score = 0;
    // Looks at the array of dice and compares it to the variable c
    for(i = 0; i < 5; i++){
        if(Dice[i].diceVal === c){
        	console.log(Dice[i].diceVal);
            total_score = total_score +c;
        }
    }
    return total_score;
}

//Function to return the scorecard option for Small Straight (A small straight is any 4 dice that are in numerical order)
//Variables : Dice = an array of dice
var Small_Straight = function(Dice)
{
	// Setting up a new array for ease of use
	var DiceValues = [];
	for(i = 0; i <5; i++){
		DiceValues[i] = Dice[i].diceVal;
	}

	// Sort the dice in numerical ascending order
	DiceValues.sort();
	var total_score = 0;

	// If the first four dice in the sorted array are less than one another you have a small straight, sum and return
	if(DiceValues[0] < DiceValues[1] < DiceValues[2] < DiceValues[3]){
		total_score = DiceValues[0]+DiceValues[1]+DiceValues[2]+DiceValues[3]+DiceValues[4]
		return total_score;
	}
	// If the last 4 dice in the sorted array are less than one another you have a small straight, sum and return
	else if(DiceValues[1] < DiceValues[2] < DiceValues[3] < DiceValues[4])
	{
		total_score = DiceValues[0]+DiceValues[1]+DiceValues[2]+DiceValues[3]+DiceValues[4]
		return total_score;
	}
	else{
		return 0;
	}
}

//Function to return the scorecard option for Large Straight (A large straight is any 5 dice that are in numberical order)
//Variables : Dice = an array of dice
var Large_Straight = function(Dice)
{
	// Setting up a new array for ease of use
	var DiceValues = [];
	for(i = 0; i <5; i++){
		DiceValues[i] = Dice[i].diceVal;
	}
	// Sort the dice in numberical order, ascending
	DiceValues.sort();
	console.log(DiceValues[0],DiceValues[1],DiceValues[2],DiceValues[3],DiceValues[4]);
	var total_score = 0;

	//If the dice are all less than one another in numerical ascending order then you have a straight, sum dice return
	var arrayOkay = true;
	for(i=0; i<5; i++){
		if(DiceValues[i]<DiceValues[i+1] && DiceValues[i]!==DiceValues[i+1]){
			console.log("Dice is less than and not equal")
		}
		else{
			arrayOkay = false;
		}
	}

	if(arrayOkay = true){
		total_score = DiceValues[0] + DiceValues[1] + DiceValues[2] + DiceValues[3] + DiceValues[4]
		return total_score;
	}
	else{
		return 0;
	}
}

//Function to return the scorecard option for Full House (A full house is when you have three of one number and 2 of another number example : 2,2,3,3,3)
//Variables : Dice = an array of dice
var Full_House = function(Dice)
{
	var full = 0;
	var total_score = 0;
	//This array is to store the number of dice that are the same. If the passed array is 1,1,2,2,4 the numbers array will read 2,2,0,1,0
	var numbers = [0,0,0,0,0];
	// Creates the values for the Numbers array explained above
	for(i = 0; i < 5; i++){
		for(k = 0; k < 5; k++){
			if(i+1 === Dice[k].diceVal){
				numbers[i] = numbers[i] + 1;
			}
		}
	}
	
	// Looks at the array of numbers for a 3 of a kind
	for(i = 0; i < 5; i++)
	{
		if(numbers[i] === 3){
			full++;
			break;
		}
	}

	//If there is a 3 of a kind check for a two of a kind
	if(full === 1){
		for(i = 0; i<5; i++){
			if(numbers[i] === 2){
				full++;
				break;
			}
		}
	}
	//If there is a 3 of a kind and a 2 of a kind you have a full house, sum the dice and return
	if(full ===2){
		total_score = dice[0]+dice[1]+dice[2]+dice[3]+dice[4];
	}
	else{
		return 0;
	}
}

//Function to return the scorecard option for Three of A kind
//Variables : Dice = an array of dice
var Three_OAK = function(Dice)
{
	var total_score = 0;
	//This array is to store the number of dice that are the same. If the passed array is 1,1,2,2,4 the numbers array will read 2,2,0,1,0
	var numbers = [0,0,0,0,0];
	// Creates the values for the Numbers array explained above
	for(i = 0; i < 5; i++){
		for(k = 0; k < 5; k++){
			if(i+1 === Dice[k].diceVal){
				numbers[i] = numbers[i] + 1;
			}
		}
	}
	// Looks at the array of numbers for a 3 of a kind if it finds one sets the total score to 3 of that value
	for(i = 0; i < 5; i++)
	{
		if(numbers[i] === 3){
			total_score = i+1 * 3;
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
	//This array is to store the number of dice that are the same. If the passed array is 1,1,2,2,4 the numbers array will read 2,2,0,1,0
	var numbers = [0,0,0,0,0];
	// Creates the values for the Numbers array explained above
	for(i = 0; i < 5; i++){
		for(k = 0; k < 5; k++){
			if(i+1 === Dice[k].diceVal){
				numbers[i] = numbers[i] + 1;
			}
		}
	}
	// Looks at the array of numbers for a 4 of a kind if it finds one sets the total score to 3 of that value
	for(i = 0; i < 5; i++)
	{
		if(numbers[i] === 4){
			total_score = i+1 * 4;
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
	console.log(Dice[0].diceVal)
	if(Dice[0].diceVal === Dice[1].diceVal === Dice[2].diceVal === Dice[3].diceVal === Dice[4].diceVal){
		total_score = Dice[0].diceVal * 5;
		return total_score;
	}
	else{
	return total_score;
	}
}

//Function to return the scorecard option for Chance (chance is all of the dice you have summed)
//Variables : Dice = an array of dice
var Chance = function(Dice)
{
	total_score = Dice[0].diceVal + Dice[1].diceVal + Dice[2].diceVal + Dice[3].diceVal + Dice[4].diceVal;
	console.log(total_score);
	return total_score;
}