var fours = function(d1,d2,d3,d4,d5)
{
	var total_score = 0

	//1,2,3,4
	if(d1 === d2 && d1 == d3 && d1 === d4)
	{
		total_score = d1 + d2 + d3 + d4;
	}
	//1,2,3,5
	else if(d1 === d2 && d1 === d3 && d1 === d5)
	{
		total_score = d1 + d2 + d3 + d5;
	}
	//1,3,4,5
	else if(d1 === d3 && d1 === d4 && d1 === d5)
	{
		total_score = d1 + d3 + d4 + d5;
	}
	//2,3,4,5
	else if(d2 === d3 && d2 === d4 && d2 === d5)
	{
		total_score = d2 + d3 + d4 + d5;
	}

	else
	{
		total_score = 0;
	}

	return total_score;
}