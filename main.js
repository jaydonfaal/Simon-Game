const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const id = document.getElementById('level');
const dir = document.getElementById('directions');
dir.textContent = ("Press Enter Key To Start");
id.textContent = "0";

let gameInAction = false;
let userCanPlay = false;
let pattern = [];
let colors = [yellow, red, blue, green];
let userInput = [];
let count = 0;
let userCount = 0;

console.log(pattern);

(document).addEventListener('keyup', e => {
  if (event.keyCode === 13) {
    if(gameInAction == false){
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
    console.log("yellow clicked");
      userInput.push(0);
      checkInput(0);
  }

});
 green.addEventListener('click', e =>{
   if(userCanPlay == true){
     console.log("green clicked");
  userInput.push(1);
  checkInput(1);
}
 });
 blue.addEventListener('click', e => {
   if(userCanPlay == true){
  console.log("blue clicked");
    userInput.push(2);
    checkInput(2);
  }
 });
 red.addEventListener('click', e =>{
   if(userCanPlay == true){
  console.log("clicked");
  userInput.push(3);
  checkInput(3);
}
 });


function getRandomInt() {
    pattern.push(Math.floor(Math.random() * 4));
    count++;
    displayPattern();
}

function displayPattern(){
  userCanPlay = false;
  for(let i = 0; i < count; i++){

setTimeout(() => {
  switch (pattern[i]){
    case 0:
    yellow.classList.add('clicked');
    setTimeout(() => {  yellow.classList.toggle('clicked'); }, 500);
    break;
    case 1:
    green.classList.add('clicked');
    setTimeout(() => {  green.classList.toggle('clicked'); }, 500);
    break;
    case 2:
    blue.classList.add('clicked');
    setTimeout(() => {  blue.classList.toggle('clicked'); }, 500);
    break;
    case 3:
    red.classList.add('clicked');
    setTimeout(() => {  red.classList.toggle('clicked'); }, 500);
    break;
}
},1000)

  }
  userCanPlay = true;
}

function gameOver(){
  gameInAction = false;
  userCanPlay = false;
  userCount = 0;
  pattern = [];
  userInput = [];
  count = [];
  dir.textContent = ("Press Enter Key To Start");
}

function checkInput(input){
  if(input != pattern[userCount] && userCanPlay == true){
    gameOver();
  }
  userCount++;
  if (pattern.length == userCount) {

    id.textContent = userCount;
    userCount = 0;
    setTimeout(() =>{getRandomInt();},1000)
  }
}

// function gatherUserInput(){
//   for(let i = 0; i < count; i++){
//     if(userInput[i] != pattern[i]){
//       gameOver();
//     }
//
//   }
//
//}
