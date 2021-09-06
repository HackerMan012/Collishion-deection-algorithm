var fixedr, movingr;


function setup() {
  createCanvas(800,400);
  fixedr = createSprite(400,200,50,70);
  
  fixedr.debug = true;

  movingr = createSprite(100, 100, 60, 80);
  
  movingr.debug = true;
}

function draw() {
  background(0);  
  movingr.x = mouseX;
  movingr.y = mouseY;

  if(movingr.x-fixedr.x <= movingr.width/2 + fixedr.width/2
    && 
    fixedr.x-movingr.x <= movingr.width/2 + fixedr.width/2
    &&
    movingr.y-fixedr.y <= movingr.height/2 + fixedr.height/2
    &&
    fixedr.y-movingr.y <= movingr.height/2 + fixedr.height/2){

    movingr.shapeColor = "orange";
    fixedr.shapeColor = "orange";
  }
  else{
    fixedr.shapeColor = "grey";
    movingr.shapeColor = "blue";
  }
  drawSprites();
}