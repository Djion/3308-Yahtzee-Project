
def threes(d1,d2,d3,d4,d5):
	total_score = 0

	
	# 1 2 3
	if(d1 == d2 and d1 == d3):
		total_score = d1 + d2 + d3
	
	# 1 2 4
	if(d1 == d2 and d1 == d4):
		total_score = d1 + d2 + d4

	# 1 2 5
	if(d1 == d2 and d1 == d5):
		total_score = d1 + d2 + d5
	
	# 1 3 4
	if(d1 == d3 and d1 == d4):
		total_score = d1 + d3 + d4
	
	# 1 3 5
	if(d1 == d3 and d1 == d5):
		total_score = d1 + d3 + d5
	
	# 1 4 5
	if(d1 == d4 and d1 == d5):
		total_score = d1 + d4 + d5
	
	# 2 3 4
	if(d2 == d3 and d2== d4):
		total_score = d2 + d3 + d4
	
	# 2 3 5
	if(d2 == d3 and d2 == d5):
		total_score = d2 + d3 + d5
	
	# 2 4 5
	if(d2 == d4 and d2 == d5):
		total_score = d2 + d4 + d5
	
	# 3 4 5
	if(d3 == d4 and d3 == d5):
		total_score = d3 + d4 + d5

	print total_score
