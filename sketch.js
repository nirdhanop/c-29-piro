const Engine = matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function preload() {

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,5);
  ground1= new Ground(600,300,360,15);
  ground2 = new Ground(1000,250,250,15);

  bird1 = new Bird(100,220);

  slingshot = new SlingShot(bird1.body,{x:100, y:200});

  box1 = new Box2(449,272,40,40);
  box2 = new Box2(491,272,40,40);
  box3 = new Box(533,272,40,40);  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(bird1.body);
      Matter.Body.setPosition(bird1.body, {x: 200 , y: 50});
  }
}