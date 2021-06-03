var fixedRect, movingRect;
var A,B
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  A=createSprite(100,100,70,70);
  A.shapeColor="skyblue"
  B=createSprite(100,200,70,70);
  B.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,B)){
  movingRect.shapeColor = "red";
  B.shapeColor = "red";
}
  else{
  movingRect.shapeColor = "green";
  B.shapeColor = "yellow";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true 
}
else {
  return false
}
}