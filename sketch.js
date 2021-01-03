const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,Ball,round;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options =
  {

    isStatic: true

  }

  ground = Bodies.rectangle(200,350,400,20,ground_options);

  World.add(world,ground);

  var Ball_options = 
  {

    restitution: 2

  }

  Ball = Bodies.circle(200,200,5,Ball_options);

  World.add(world,Ball);

  var round_options =
  {

    restitution: 1

  }

  round = Bodies.circle(150,200,3,round_options);

  World.add(world,round);



 
}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,50)

  ellipseMode(RADIUS);

  ellipse(Ball.position.x,Ball.position.y,30,30)

  ellipse(round.position.x,round.position.y,20,20)






 
}