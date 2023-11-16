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
start.addEventListener('click',createPlay);

function createPlay(){
  //find out how to remove all children and stick it here
  //while box.hasChild
  //remove first child
  let child=box.lastElementChild;
  while(child){
    box.removeChild(child);
    child=box.lastElementChild;
  }
  userC="";
  compC="";
  userPoints=0;
  compPoints=0;
  const rock=document.createElement('button');
  const paper=document.createElement('button');
  const scissor=document.createElement('button');
  rock.textContent='ROCK';
  paper.textContent='PAPER';
  scissor.textContent='SCISSOR';
  score();
  announce.textContent="Ready to Start a New Game!";
  box.appendChild(scoreboard);
  box.appendChild(rock);
  box.appendChild(paper);
  box.appendChild(scissor);
  box.appendChild(choices);
  box.appendChild(announce);
  rock.addEventListener('click',()=>{userChoice='r';userC="Rock";whoWon();});
  paper.addEventListener('click',()=>{userChoice='p';userC="Paper";whoWon();});
  scissor.addEventListener('click',()=>{userChoice='s';userC="Scissors";whoWon();});
}

function startNew(){
  const start2=document.createElement('button')
  start2.textContent="Start A New Game";
  start2.addEventListener("click",createPlay)
  box.appendChild(start2);
}

function play(){
  if(userPoints<5&&compPoints<5){
    score();
  }else if(userPoints==5){
    score();
    announce.textContent="YAY!! You Won The Game!!";
    startNew();
    userPoints=userPoints+10;
    compPoints=compPoints+10;
  }else if(compPoints==5){
    score()
    announce.textContent="SORRY. You Lost The Game.";
    startNew();
    userPoints=userPoints+10;
    compPoints=compPoints+10;
  }else{
    createPlay()
  }
}

function score(){
  scoreboard.textContent="Your Score: "+userPoints+" / / Computer Score: "+compPoints;
  choices.textContent="You Choose: "+userC+" / Comp Choose: "+compC;
}

function compChoose(){
  let randomNum=Math.floor(Math.random()*(3-1+1)+1);
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
    if (compChoice=="r"){;
      tie();
    }else if(compChoice=="p"){
      lose();
    }else{
      win();
    }
  }else if(userChoice=="p"){
    if(compChoice=="r"){
      win();
    }else if(compChoice=="p"){
      tie();
    }else{
      lose();
    }
  }else{
    if(compChoice=="r"){
      lose();
    }else if(compChoice=="p"){
      win();
    }else{
      tie();
    }
  }
  play();
}

