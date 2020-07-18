
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,250,20);
	bob1 = new Bob(420,374,20);
	bob2 = new Bob(400,380,20);
	bob3 = new Bob(380,384.66,20);
	bob4 = new Bob(360,384.99,20);
	bob5 = new Bob(340,385,20);
	//First Rope
	rope1=new Rope(bob1.body,roof.body,40*2,0);
	//Second Rope
	rope2=new Rope(bob2.body,roof.body,20*2,0);
	//Third Rope
	rope3=new Rope(bob3.body,roof.body,-0*2,0);
	//Fourth Rope
	rope4=new Rope(bob4.body,roof.body,-20*2,0);
	//Fifth Rope
	rope5=new Rope(bob5.body,roof.body,-40*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display()
}