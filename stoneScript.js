//Allan Tenenbaum
function initialize(){
    gameStatus = true;
    validChoice = false;
    turn = "player";
    firstPileRockCount = 3;
    secondPileRockCount = 3;
    thirdPileRockCount = 3;
    computerPileChoice = 0;
    loser = "none";
    unkComment ="Hello, it is your turn";
    randomNum = 0;
    rocksInFirstPile = document.getElementById("pile_one_count");           
    rocksInSecondPile = document.getElementById("pile_two_count");           
    rocksInThirdPile = document.getElementById("pile_three_count");
    newComment = document.getElementById("unk_comment");
    display();           
}
function nextRound(pile, removalAmount){
    if (gameStatus == true){    
        turn = "player";
        rockRemoval(pile, removalAmount);
        lossCheck();
        if(loser == "none"){
            computerTurn();
            lossCheck();
        
        }
    }
        display();       
}
function rockRemoval(pile, removalAmount){
    if (pile == 1){
        newfirstPileRockCount = firstPileRockCount - removalAmount;
        if (newfirstPileRockCount < 0){
            validChoice = false;
            newfirstPileRockCount = firstPileRockCount;
        }
        else{
            validChoice = true;
            firstPileRockCount = newfirstPileRockCount;
        }
    }
    else if (pile == 2){
        newSecondPileRockCount = secondPileRockCount - removalAmount;
        if (newSecondPileRockCount < 0){
            validChoice = false;
            newSecondPileRockCount = secondPileRockCount;
        }
        else{
            validChoice = true;
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
            computerPileChoice = 2;
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
    turn = "computer";
}

function randomPile(){
    return Math.random();
}
function lossCheck() {
    if (firstPileRockCount == 0 && secondPileRockCount == 0 && thirdPileRockCount == 0){
        gameStatus = false;
        loser = turn;
        if (loser == "player"){
            unkComment = "HAHAHAHA YOU LOST!!! I WIN I WIN I WIN YAY";
        }
        else if( loser == "computer"){
            unkComment = "Oh. I lost.... I'll win next game I bet";
        }       
    }
    else{
        unkComment = "It is your turn";
    }
}