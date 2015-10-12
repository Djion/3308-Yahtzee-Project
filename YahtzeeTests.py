import random


#This is not how the final code would work
#Just an example I did in 10 minutes as a demonstration of what I think we could accomplish
#Obviously we would have a GUI
#Any time the code reference "You" I am assuming the use would put in some kind of input


#Function to roll the 5 dice for yahtzee
def roll(): 
	dice1 = random.randint(1,6)
	dice2 = random.randint(1,6)
	dice3 = random.randint(1,6)
	dice4 = random.randint(1,6)
	dice5 = random.randint(1,6)

	print "Dice Roll 1"
	print (dice1, dice2, dice3, dice4, dice5)
	print "You chose to reroll dice 3 and 4"
	dice3 = random.randint(1,6)
	dice4 = random.randint(1,6)
	
	print
	print "Dice roll 2"
	print (dice1, dice2, dice3, dice4, dice5)
	print "You chose to reroll all the dice"
	dice1 = random.randint(1,6)
	dice2 = random.randint(1,6)
	dice3 = random.randint(1,6)
	dice4 = random.randint(1,6)
	dice5 = random.randint(1,6)
	
	print
	print "Dice roll 3"
	print (dice1, dice2, dice3, dice4, dice5)
	print
	print "You Chose to use this roll for your two's score"



	twoTotal = 0
	if dice1 == 2:
		twoTotal = twoTotal + 1
	if dice2 == 2:
		twoTotal = twoTotal + 1
	if dice3 == 2:
		twoTotal = twoTotal + 1
	if dice4 == 2:
		twoTotal = twoTotal + 1
	if dice5 == 2:
		twoTotal = twoTotal + 1
	scorecard[1] = twoTotal
	return

#Function to print the scorecard
def scorePRINT():
	print
	print
	print "SCORECARD"
	print "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
	print "Ones:", scorecard[0]
	print "Twos:", scorecard[1]
	print "Threes:", scorecard[2] 
	print "Fours:", scorecard[3]
	print "Fives:", scorecard[4]
	print "Sixes:", scorecard[5]
	print "3 of a kind:", scorecard[6]
	print "4 of a kind:", scorecard[7]
	print "Fulpyl House:", scorecard[8]
	print "Small Straight:", scorecard[9]
	print "Large Straight:", scorecard[10]
	print "Yahtzee!:", scorecard[11]
	print "Chance:", scorecard[12]
	print
	print	


scorecard = [0,0,0,0,0,0,0,0,0,0,0,0,0]
#scorcard ones,twos,threes,fours,fives, sixes, 3 of kind, 4 of kind, Full house, Small Straight, Large straight, yahtzee, chance


print "PLAYER 1 || TURN 1"
print "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="
print
roll()
scorePRINT()