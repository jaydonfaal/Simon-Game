const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const level = document.getElementById('level');
const dir = document.getElementById('directions');
const game_over = document.getElementById('gameOver');
const header = document.getElementById('header');
const title = document.getElementById('title');
const letters = ["S", "I", "M", "O", "N"];
const timer = ms => new Promise(res => setTimeout(res, ms));

dir.textContent = ("Press Enter Key To Start");
level.textContent = "0";

let gameInAction = false;
let userCanPlay = false;
let pattern = [];
let colors = [yellow, red, blue, green];
let userInput = [];
let userCount = 0;

addTitle();

//functions

function gameOver(){
  gameInAction = false;
  userCanPlay = false;
  userCount = 0;
  console.log(userCount);
  pattern.length = 0;
  userInput.length = 0;
  level.textContent = 0;
  game_over.textContent = ("GAME OVER");
  dir.textContent = ("Press Enter Key To Start");
}

async function addTitle(){
  for (let i = 0; i < 5; i++) {
    await timer(800)
      const letterElement = document.createElement('h1')
      letterElement.classList.add('effect');
      letterElement.textContent = letters[i];
      header.append(letterElement);
  }
}

function getRandomInt() {
    pattern.push(Math.floor(Math.random() * 4));
  userCanPlay = false;
    displayPattern();
}

async function displayPattern(){
  for(let i = 0; i < pattern.length; i++){
    await timer(800);
    switch (pattern[i]){
    case 0:
    yellow.classList.add('glow');
    setTimeout(function()  { yellow.classList.remove('glow'); }, 400);
    break;
    case 1:
    green.classList.add('glow');
    setTimeout(function()  {  green.classList.remove('glow'); }, 400);
    break;
    case 2:
    blue.classList.add('glow');
    setTimeout(function()   {  blue.classList.remove('glow'); }, 400);
    break;
    case 3:
    red.classList.add('glow');
    setTimeout(function()  {  red.classList.remove('glow'); }, 400);
    break;
}
  }
  userCanPlay = true;
}

// function checkInput(input){
//   console.log(userCount);
//   if(input != pattern[userCount] && userCanPlay == true){
//
//     console.log(userCount +"p "+pattern.length + " " + input);
//     gameOver();
//   }
//   userCount++;
//   if (pattern.length == userCount) {
//
//     level.textContent = userCount;
//     userCount = 0;
//     userCanPlay = false;
//     setTimeout(() =>{getRandomInt();}, 1000)
//   }
// }



function checkInput(input){
  if(input == pattern[userCount] && userCanPlay == true && gameInAction == true){
    userCount++;
    if(userCount == pattern.length){
      level.textContent = userCount;
      userCount = 0;
      getRandomInt();
    }
  }
  else{
    gameOver();

  }

}



//Event Listeners


(document).addEventListener('keyup', e => {
  if (event.keyCode === 13) {
    if(gameInAction == false){
      game_over.textContent = "";
      setTimeout(() => {
        getRandomInt();
      },1000);
    }
    gameInAction = true;
      dir.textContent = "";
}
});

yellow.addEventListener('click', e => {
  if(userCanPlay == true){
    yellow.classList.add('glow');
    setTimeout(function()   {  yellow.classList.remove('glow'); }, 400);
      checkInput(0);
  }
});

 green.addEventListener('click', e =>{
   if(userCanPlay == true){
     green.classList.add('glow');
     setTimeout(function()   {  green.classList.remove('glow'); }, 400);
     console.log("green clicked");
  checkInput(1);
}
});

 blue.addEventListener('click', e => {
   if(userCanPlay == true){
     blue.classList.add('glow');
     setTimeout(function()   {  blue.classList.remove('glow'); }, 400);
  console.log("blue clicked");
    checkInput(2);
  }
 });

 red.addEventListener('click', e =>{
   if(userCanPlay == true){
     red.classList.add('glow');
     setTimeout(function()   {  red.classList.remove('glow'); }, 400);
  console.log("clicked");
  checkInput(3);
 }
});
