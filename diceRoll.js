
//Returns a random number between 1-6
var diceRoll = function()
{
	var roll = Math.random();
	if (roll < 0.1666)
	{
		return 1;
	}
	else if(roll < 0.3333)
	{
		return 2;
	}
	else if(roll < 0.50)
	{
		return 3;
	}
	else if(roll < 0.6666)
	{
		return 4;
	}
	else if(roll < 0.8333)
	{
		return 5;
	}
	else
	{
		return 6;
	}
}
 