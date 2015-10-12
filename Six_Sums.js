var ace_score = function(d1,d2,d3,d4,d5)
{
	var total_score;
	if (d1 === 6)
	{
		total_score = total_score + 6;
	}
	if (d2 === 6)
	{
		total_score = total_score + 6;
	}
	if (d3 === 6)
	{
		total_score = total_score + 6;
	}
	if (d4 === 6)
	{
		total_score = total_score + 6;
	}
	if (d5 === 6)
	{
		total_score = total_score + 6;
	}
	return total_score;
}