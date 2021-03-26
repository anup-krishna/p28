const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone;
var boy,boyI;
var sling;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload()
{
	boyI = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,280,10,10);
	boy.addImage(boyI);
	boy.scale=0.1;
	
    ground = new Ground(400,380,width*2,20);

	stone = new Stone(140,220,20);
    sling = new SlingShot(stone.body,{x:140,y:220});

	mango1 = new Mango(525,40,20);
	mango2 = new Mango(645,50,20);
	mango3 = new Mango(675,110,20);
	mango4 = new Mango(515,180,20);
	mango5 = new Mango(600,150,20);
    mango6 = new Mango(536,105,20);
    mango7 = new Mango(720,145,20);

    tree = new Tree(600,185,20,20);
    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(229, 229, 229);
  Engine.update(engine);
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  console.log(tree.image.height,tree.image.width);

  drawSprites();
  textSize(15);
  text("PRESS 'SPACE' TO GET A SECOND CHANCE TO PLAY!!",10,30);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
if(keyCode===32){
    Body.setPosition(stone.body,{x:140,y:220});
    sling.attach(stone.body);
}
}

function detectCollision(obj1,obj2){
    object1 = obj1.body.position;
    object2 = obj2.body.position;
    var distance = dist(object1.x,object1.y,object2.x,object2.y);
    if(distance<=obj1.radius+obj2.radius){
        Body.setStatic(obj2.body,false);
    }
}