class Block{

  constructor(originX, originY, width, height){
    
    if(originX === undefined){
      this._originX = windowWidth/2;
    } else {
      this._originX = originX;
    }
    if(originY === undefined){
      this._originY = windowHeight/2;
    } else {
      this._originY = originY;
    }
    if(width === undefined){
      this._width = 100;
    } else {
      this._width = width;
    }
    if(height === undefined){
      this._height = 100;
    } else {
      this._height = height;
    }
  };

  show(){
    noFill();
    stroke('black');
    rectMode(CENTER);
    rect(this._originX, this._originY, this._width, this._height);
  };

  mouseDown(){
      if(mouseX > (this._originX - (this._width/2)) 
      && mouseX < (this._originX + (this._width/2))
      && mouseY > (this._originY - (this._height/2))
      && mouseY < (this._originY + (this._height/2))){
        
        console.log('clicked the block');
      }
  }
}