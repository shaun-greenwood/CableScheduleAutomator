//assign global variables
let state = "locked";
let block;
let nodes = [];

//create a connection point in a device, in a building.
let mainBuilding = new Location('main building');
let mc = new Device('multicoupler 1', mainBuilding);
let output = new Port('output', new NType(), mc);

//create another one.
let rfSwitch = new Device('rfSwitch', 'mainBuilding');
let input = new Port('input 1', new NType(), rfSwitch);

//create a new cable.
let cable = new RG223();

//create a link between the two ports using the cable.
let link = new Link(output, input, cable);

//SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  block = new Block();
  nodes.push(block);

}

//Drawing Loop
function draw() {
  clear();
  block.show();
}

//mousePressed() will trigger regardless of what you clicked on.
//use it to trigger another function that determines what was clicked.
function mousePressed() {
  for(let i = 0; i < nodes.length; i++){
    nodes[i].mouseDown();
  }
}

function whatGotClicked() {
  for (i = 0; i < nodeArr.length; i++) {}
}
