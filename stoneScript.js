/*Allan Tenenbaum*/
function initialize(){
    turn = "player";
    firstPileRockCount = 3;
    secondPileRockCount = 3;
    thirdPileRockCount = 3;
    computerPileChoice = 0;
    unkComment ="Hello, it is your turn";
    randomNum = 0;
    rocksInFirstPile = document.getElementById("pile_one_count");           
    rocksInSecondPile = document.getElementById("pile_two_count");           
    rocksInThirdPile = document.getElementById("pile_three_count");
    newComment = document.getElementById("unk_comment");
    display();           
}
function rockRemoval(pile, removalAmount){
    if(turn == "player"){
        if (pile == 1){
            newfirstPileRockCount = firstPileRockCount - removalAmount;
            if (newfirstPileRockCount < 0){
                newfirstPileRockCount = firstPileRockCount;
            }
            else{
                firstPileRockCount = newfirstPileRockCount;
            }
        }
        else if (pile == 2){
            newSecondPileRockCount = secondPileRockCount - removalAmount;
            if (newSecondPileRockCount < 0){
                newSecondPileRockCount = secondPileRockCount;
            }
            else{
            secondPileRockCount = newSecondPileRockCount;
            }
        }
        else if (pile == 3){
            newThirdPileRockCount = thirdPileRockCount - removalAmount;
            if (newThirdPileRockCount < 0){
                newThirdPileRockCount = thirdPileRockCount;
            }
            else{
                thirdPileRockCount = newThirdPileRockCount;
            }
        }
    }
    turn = "computer";
    display();
    computerTurn();   
}
   
function display(){
    rocksInFirstPile.innerHTML = firstPileRockCount;
    rocksInSecondPile.innerHTML = secondPileRockCount;
    rocksInThirdPile.innerHTML = thirdPileRockCount;
    newComment.innerHTML = unkComment;
}

function computerTurn(){
    randomNum = randomPile();
    unkComment = "It is my turn";
    if (firstPileRockCount > secondPileRockCount && firstPileRockCount > thirdPileRockCount){
        computerPileChoice = 1;
    }
    else if (secondPileRockCount > firstPileRockCount && secondPileRockCount > thirdPileRockCount){
        computerPileChoice = 2;
    }
    else if (thirdPileRockCount > secondPileRockCount && thirdPileRockCount > firstPileRockCount){
        computerPileChoice = 3;
    }
    else if (firstPileRockCount == secondPileRockCount && firstPileRockCount > thirdPileRockCount){
        if (randomNum <=.5 ){
            computerPileChoice = 1;
        }
        else{
            computerPileChoice = 1;
        }
                 
    }
    else if (thirdPileRockCount == secondPileRockCount && thirdPileRockCount > firstPileRockCount){
        if (randomNum <=.5 ){
            computerPileChoice = 2;
        }
        else{
            computerPileChoice = 3;
        }
                  
    }
    else if (thirdPileRockCount == firstPileRockCount && thirdPileRockCount > secondPileRockCount){   
        if (randomNum <=.5 ){
            computerPileChoice = 1;
        }
        else{
            computerPileChoice = 3;
        }         
    }
    rockRemoval(computerPileChoice, 1);
    turn = "player";
    unkComment = "It is your turn";
    display();
}
function randomPile(){
    return Math.random();
}
function turnSwitch() {
    
}