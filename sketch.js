const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone, ground, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var mango11, mango12, mango13, mango14, mango15, rope;

function preload()
{
	boyImg = loadImage("boy.png");
	mangoImg = loadImage("mango.png");
	stoneImg = loadImage("stone.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(900, 600);
	background("white");


	engine = Engine.create();
	world = engine.world;

    tree = new Tree(600,350);
	mango1 = new Mango(600, 200, 30);
	mango2 = new Mango(580, 180, 30);
	mango3 = new Mango(635, 100, 30);
	mango4 = new Mango(700, 200, 30);
	mango5 = new Mango(620, 250, 30);
	mango6 = new Mango(710, 280, 30);
	mango7 = new Mango(760, 110, 30);
	mango8 = new Mango(800, 290, 30);
	mango9 = new Mango(770, 270, 30);
	mango10 = new Mango(800, 200, 30);
	mango11 = new Mango(700, 120, 30);
	mango12 = new Mango(790, 230, 30);
	mango13 = new Mango(750, 220, 30);
	mango14 = new Mango(650, 220, 30);
	mango15 = new Mango(750, 150, 30);
	ground = new Ground(450, 550, 900, 20);
	stone = new Stone(180, 360, 45);
	rope = new Chain(stone.body, {x:180, y:360})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  ground.display();
  rope.display();
  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
  detectCollision(stone, mango13);
  detectCollision(stone, mango14);
  detectCollision(stone, mango15);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.throw();
}

function keyPressed(){
    if(keyCode === 32){
       rope.attach(stone.body);
    }
}

function detectCollision(Lstone, Lmango){
    mangoPosition = Lmango.body.position;
    stonePosition = Lstone.body.position;

    var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
    if(distance<=Lstone.r + Lmango.r){
        Matter.Body.setStatic(Lmango.body, false)
    }
}
