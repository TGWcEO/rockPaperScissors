//javascript goes here
//present and prepare the game
console.log("This Is Sparta!!!")
let userChoice="i";
let compChoice="j";
let userC='';
let compC='';
let userPoints=0;
let compPoints=0;

const start=document.querySelector('#startButton');
const box=document.querySelector('#playBox');
const scoreboard=document.createElement('div');
const choices=document.createElement('div');
const announce=document.createElement('div');
start.addEventListener('click', createPlay);

function createPlay(){
  //find out how to remove all children and stick it here
  userPoints=0;
  compPoints=0;
  const rock=document.createElement('button');
  const paper=document.createElement('button');
  const scissor=document.createElement('button');
  rock.textContent='ROCK';
  paper.textContent='PAPER';
  scissor.textContent='SCISSOR';
  box.appendChild(scoreboard);
  box.appendChild(rock);
  box.appendChild(paper);
  box.appendChild(scissor);
  box.appendChild(choices);
  box.appendChild(announce);
  rock.addEventListener('click',()=>{userChoice='r';whoWon();});
  paper.addEventListener('click',()=>{userChoice='p';whoWon();});
  scissor.addEventListener('click',()=>{userChoice='s';whoWon();});
}

  scoreboard.textContent="Your Score: "+userPoints+"\nComputerScore: "+compPoints;

function play(){
  if(userPoints<5&&compPoints<5){
    scoreboard.textContent="Your Score: "+userPoints+"\nComputer Score: "+compPoints;
  }else if(userPoints==5){
    announce.textContent="YAY!! You Won The Game!!";
//  playAgain();
  }else{
    announce.textContent="SORRY. You Lost The Game.";
//  playAgain();
  }
}

function compChoose(){
  let randomNum=Math.floor(Math.random()*(3-1+1)+1);
//console.log("Random Number: ",randomNum)
  if (randomNum==1){
    compC='Rock';
    compChoice="r";
  }else if(randomNum==2){
    compC="Paper";
    compChoice="p";
  }else if(randomNum==3){
    compC="Scissors";
    compChoice="s";
  }
}

function win(){
  userPoints++;
  announce.textContent="You won this round!";
}
function lose(){
  compPoints++;
  announce.textContent="You lost this round.";
}
function tie(){
  announce.textContent="This round was a tie."; 
}

function whoWon(){
  compChoose();
  if (userChoice=="r"){
    userC="Rock";
    if (compChoice=="r"){;
      tie();
    }else if(compChoice=="p"){
      lose();
    }else{
      win();
    }
  }else if(userChoice=="p"){
    userC="Paper";
    if(compChoice=="r"){
      win();
    }else if(compChoice=="p"){
      tie();
    }else{
      lose();
    }
  }else{
    userC="Scissors";
    if(compChoice=="r"){
      lose();
    }else if(compChoice=="p"){
      win();
    }else{
      tie();
    }
  }
  choices.textContent="You: "+userC+" / / Computer: "+compC;
  play();
}

