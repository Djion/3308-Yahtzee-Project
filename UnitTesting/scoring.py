#This is the Python equivalent of our Javascript code

#Function to return the scorecard options of 1 - 6
#Variables : c = integer 1-6
#Dice = an array of dice
def OneToSix_Sum(c, Dice):
    total_score = 0
    
    #Looks at the array of dice and compares it to the variable c
    for i in range(0, 5):
        if(Dice[i] == c):
            total_score += c
        
    return total_score

#Function to return the scorecard option for Small Straight (A small straight is any 4 dice that are in numerical order)
#Variables : Dice = an array of dice
def Small_Straight(Dice):
    total_score = 0
    #The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
    numbers = [0, 0, 0, 0, 0, 0]
    
    #Increments the numbers array by one at the index of the die
    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    #These three if statements check if there are 4 dice that are in ascending numerical order
    if (numbers[0] >= 1 and numbers[1] >= 1 and numbers[2] >= 1 and numbers[3] >= 1):
        total_score = 30
        return total_score
    elif (numbers[1] >= 1 and numbers[2] >= 1 and numbers[3] >= 1 and numbers[4] >= 1):
        total_score = 30
        return total_score
    elif (numbers[2] >= 1 and numbers[3] >= 1 and numbers[4] >= 1 and numbers[5] >= 1):
        total_score = 30
        return total_score

    return total_score

#Function to return the scorecard option for Large Straight (A large straight is any 5 dice that are in numberical order)
#Variables : Dice = an array of dice
def Large_Straight(Dice):
    total_score = 0
    #The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
    numbers = [0, 0, 0, 0, 0, 0]

    #Increments the numbers array by one at the index of the die
    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    #These three if statements check if there are 5 dice that are in ascending numerical order
    if (numbers[0] == 1 and numbers[1] == 1 and numbers[2] == 1 and numbers[3] == 1 and numbers[4] == 1):
        total_score = 40
        return total_score
    elif (numbers[1] == 1 and numbers[2] == 1 and numbers[3] == 1 and numbers[4] == 1 and numbers[5] == 1):
        total_score = 40
        return total_score
    
    return total_score

#Function to return the scorecard option for Full House (A full house is when you have three of one number and 2 of another number example : 2,2,3,3,3)
#Variables : Dice = an array of dice
def Full_House(Dice):
    total_score = 0
    #The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
    numbers = [0, 0, 0, 0, 0, 0]
    full = False

    #Increments the numbers array by one at the index of the die
    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    #Checks if there is a 3 of a kind
    for i in range(0, 6):
        if (numbers[i] == 3):
            full = True
            break
    
    #Checks if there is a 2 of a kind only if there is a 3 of a kind
    if (full):
        for i in range(0, 6):
            if (numbers[i] == 2):
                total_score = 25
                return total_score

    return total_score

#Function to return the scorecard option for Three of A kind
#Variables : Dice = an array of dice
def Three_OAK(Dice):
    total_score = 0
    #The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
    numbers = [0, 0, 0, 0, 0, 0]

    #Increments the numbers array by one at the index of the die
    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1
    
    #Looks at the array of numbers for a 3 or more of a kind if it finds one sets the total score to 3 of that value
    for i in range(0, 6):
        if(numbers[i] >= 3):
            total_score = Dice[0] + Dice[1] + Dice[2] + Dice[3] + Dice[4]
            return total_score
    
    return total_score

#Function to return the scorecard option for Four of A Kind
#Variables : Dice = an array of dice
def Four_OAK(Dice):
    total_score = 0
    #The numbers variable stores the number of a certain die we have, for example if we had 2 1's it would look like [2,0,0,0,0,0]
    numbers = [0, 0, 0, 0, 0, 0]

    #Increments the numbers array by one at the index of the die
    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    #Looks at the array of numbers for a 4 or more of a kind if it finds one sets the total score to 4 of that value 
    for i in range(0, 6):
        if(numbers[i] >= 4):
            total_score = Dice[0] + Dice[1] + Dice[2] + Dice[3] + Dice[4]
            return total_score

    return total_score

#Function to return the scorecard option for Five of A Kind
#Variables : Dice = an array of dice
def Five_OAK(Dice):
    total_score = 0

    #Checks if 5 dice are equal
    if(Dice[0] == Dice[1] and Dice[0] == Dice[2] and Dice[0] == Dice[3] and Dice[0] == Dice[4]):
        total_score = 50
        return total_score

    return total_score