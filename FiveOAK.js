var five_of_a_kind = function(d1,d2,d3,d4,d5)
{
	var total_score = 0;

	if(d1 === d2 && d1 === d3 && d1 === d4 && d1 === d5)
	{
		total_score = d1 + d2 + d3 + d4 + d5;
	}
	else
	{
		total_score = 0;
	}
	return total_score;
}
