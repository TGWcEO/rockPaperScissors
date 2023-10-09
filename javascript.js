//javascript goes here

//step0: present the game
console.log("This Is Sparta!!!")
let userChoice="i";
let compChoice="j";
let userPoints=0;
let compPoints=0;
console.log(userChoice)
console.log(compChoice)
play();

function play(){
  if(userPoints<5&&compPoints<5){
    console.log("Your Score: "+userPoints+"\nComputer Score: "+compPoints)
    getChoice();
    compChoose();
    whoWon();
  }else if(userPoints==5){
    console.log("You Won The Game!!")
    playAgain();
  }else{
    console.log("You Lost The Game")
    playAgain();
  }
}

function playAgain(){
let again=prompt("Play Again? 'y' or 'n': ")
  if(again=="y"){
    userPoints=0;
    compPoints=0;
    play();
  }
}

//step1: ask the users choice and display it
function getChoice(){
  userChoice=prompt(`Choose "r", "p", or "s": `);
  console.log(userChoice)
}
//step2: randomly generate the computers choice and display it
function compChoose(){
  let randomNum=Math.floor(Math.random()*(3-1)+1);
  console.log("Random Number: ",randomNum)
  if (randomNum==1){
    compChoice="r";
  }else if(randomNum==2){
    compChoice="p";
  }else if(randomNum==3){
    compChoice="s";
  }
  console.log(compChoice);
}
function win(){
  userPoints++;
  console.log("You won this round!")
  play();
}
function lose(){
  compPoints++;
  console.log("You lost this round")
  play();
}
function tie(){
  console.log("This round was a tie")
  play();
}
//step3: determinee who won and display the winner
function whoWon(){
  if (userChoice=="r"){
    if (compChoice=="r"){
      //tie
      tie();
    }else if(compChoice=="p"){
      //comp wins
      lose();
    }else{
      //user wins
      win();
    }
  }else if(userChoice=="p"){
    if(compChoice=="r"){
      //user wins
      win();
    }else if(compChoice=="p"){
      //tie
      tie();
    }else{
      //comp wins
      lose();
    }
  }else{
    if(compChoice=="r"){
      //comp wins
      lose();
    }else if(compChoice=="p"){
      //user wins
      win();
    }else{
      //tie
      tie();
    }
  }
}
//step4: add a point to the winners total point count

//step5: determine if game is over, if so display "the winner" and "Game Over"
         //if not go back to step1
