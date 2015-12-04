//Choose the least probable scoring whenever you have the chance to
//Eliminate the scorings that you have already picked

//Scoring probabilities
//Small Straight: 0.123
//Large Straight: 0.0308
//Full House: 0.03858
//Three of a Kind: 0.154
//Four of a Kind: 0.01929
//Yahtzee: 0.000772


//Pick Order:
//1. Yahtzee
//2. Four of a Kind
//3. Large Straight
//4. Full House
//5. Small Straight
//6. Three of a Kind
//7. Check which of the remaining 7 choices gives the largest score and choose that one, repeat for remaining turns


array scores = [yahtzee, fourOAK, ls, fh, ss, threeOAK]







