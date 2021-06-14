var issImg,iss,spaceCraft,hasDocked;

function  preload(){
  issImg = loadImage("Docking-undocking/iss.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite(200,200,20,20);
  iss = addImage(issImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  iss.display();
}