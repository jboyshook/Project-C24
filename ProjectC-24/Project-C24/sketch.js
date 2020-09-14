const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	prefab1 = new Prefab(630, 657, 20, 120);
	prefab2 = new Prefab(740, 657, 20, 120);
	prefab3 = new Prefab(686, 690, 100, 20);
	prefab4 = new Prefab(88, 687, 120, 20)

	ball = new ball(694, 349, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ball.display();
  ball.keyPress();
  show();

  text(mouseX + "," + mouseY, mouseX, mouseY);
}

function show() {
	prefab1.display();
	prefab2.display();
	prefab3.display();
	prefab4.display();
	ball.display();
}