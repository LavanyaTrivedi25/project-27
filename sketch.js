
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(400,680,800,10)
hammer = new Hammer(200,200,100,20)
paper = new Paper(100,100,50,50)
rock = new Rock (500,500,70,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  hammer.display();
  rock.display();
  fill ("white")
  drawSprites();
  paper.display();

}



