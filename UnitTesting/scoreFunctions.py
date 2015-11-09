#This is the Python equivalent of our Javascript code

def OneToSix_Sum(c, Dice):
    total_score = 0

    for i in range(0, 5):
        if(Dice[i] == c):
            total_score += c
        
    return total_score


def Small_Straight(Dice):
    total_score = 0
    numbers = [0, 0, 0, 0, 0, 0]

    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

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


def Large_Straight(Dice):
    total_score = 0
    numbers = [0, 0, 0, 0, 0, 0]

    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1
    
    if (numbers[0] == 1 and numbers[1] == 1 and numbers[2] == 1 and numbers[3] == 1 and numbers[4] == 1):
        total_score = 40
        return total_score
    elif (numbers[1] == 1 and numbers[2] == 1 and numbers[3] == 1 and numbers[4] == 1 and numbers[5] == 1):
        total_score = 40
        return total_score
    
    return total_score


def Full_House(Dice):
    total_score = 0
    numbers = [0, 0, 0, 0, 0, 0]
    full = False

    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    for i in range(0, 6):
        if (numbers[i] == 3):
            full = True
            break
    
    if (full):
        for i in range(0, 6):
            if (numbers[i] == 2):
                total_score = 25
                return total_score

    return total_score


def Three_OAK(Dice):
    total_score = 0
    numbers = [0, 0, 0, 0, 0, 0]

    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1
    
    for i in range(0, 6):
        if(numbers[i] >= 3):
            total_score = Dice[0] + Dice[1] + Dice[2] + Dice[3] + Dice[4]
            return total_score
    
    return total_score


def Four_OAK(Dice):
    total_score = 0
    numbers = [0, 0, 0, 0, 0, 0]

    for i in range(0, 5):
        numbers[Dice[i] - 1] += 1

    for i in range(0, 6):
        if(numbers[i] >= 4):
            total_score = Dice[0] + Dice[1] + Dice[2] + Dice[3] + Dice[4]
            return total_score

    return total_score


def Five_OAK(Dice):
    total_score = 0

    if(Dice[0] == Dice[1] and Dice[0] == Dice[2] and Dice[0] == Dice[3] and Dice[0] == Dice[4]):
        total_score = 50
        return total_score

    return total_score 
