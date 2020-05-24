var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(160,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  block = createSprite(600, 300, 50, 80);
  block.shapeColor = "yellow";
  block.debug = true;
  square = createSprite(400, 600,80,30);
  square.shapeColor = "yellow";
  square.debug = true;

  movingRect.velocityX = +5;
  fixedRect.velocityY = +5;
  square.velocityY = -5;
  block.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounce(fixedRect,square);
  drawSprites();
}

