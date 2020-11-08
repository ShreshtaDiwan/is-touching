var stella,pen;

function setup() {
  createCanvas(800,400);
  stella = createSprite(400, 200, 50, 50);
  stella.shapeColor = "cyan";

  pen = createSprite(200,200,30,30);
  pen.shapeColor = "pink" 
}

function draw() {
  background(0);  
  stella.x = mouseX;
  stella.y = mouseY;

  console.log(stella.x)

  if(stella.x - pen.x < stella.width/2  +  pen.width/2 && pen.x - stella.x < pen.width/2+stella.width/2 && 
    stella.y - pen.y < stella.height/2 + pen.height/2 && pen.y - stella.y < pen.height/2+stella.height/2){
    stella.shapeColor = "orange";
    pen.shapeColor = "orange";
  }

  else {
  stella.shapeColor = "cyan";
  pen.shapeColor = "pink" 

  }
  drawSprites();
}