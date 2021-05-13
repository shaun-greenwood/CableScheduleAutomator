//assign global variables
let state = 'locked';
let block;
let canvas;
let nodeArr = [];
let connectionArr = [];

//SETUP
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(200);
  block = new Block();
  nodeArr.push(block);
}

//Drawing Loop
function draw(){
  
  
}

//mousePressed() will trigger regardless of what you clicked on.
//use it to trigger another function that determines what was clicked.
function mousePressed(){
  
  
}

function whatGotClicked(){
  for(i = 0; i < nodeArr.length; i++){

  }
}