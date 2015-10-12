var OneToSix_Sum = function(c,d1,d2,d3,d4,d5)
{
    var total_score = 0;
    var diceArray = [d1,d2,d3,d4,d5];
    for(i = 0; i < 5; i++){
        if(diceArray[i] === c){
            total_score = total_score +c;
        }
    }
    return total_score;
}