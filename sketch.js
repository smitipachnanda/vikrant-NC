
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,335,20);
	bobObject2 = new Bob(240,335,20);
	bobObject3 = new Bob(280,335,20);
	bobObject4 = new Bob(320,335,20);
	bobObject5 = new Bob(380,335,20);
	
roof = new Roof(380,135,190,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



