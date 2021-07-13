
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var Rock
var ground;
var Wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.99,
    frictionAir:0.01
  } 
   
   var ground_options ={
     isStatic: true
   };
  var opt={restitution:0.8}

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Rock=Bodies.circle(300,20,30,opt);

  World.add(world,Rock)
  Wall=Bodies.rectangle(300,200,200,20,ground_options)
World.add(world,Wall)
  }

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(Rock.position.x,Rock.position.y,30);
 rect(Wall.position.x,Wall.position.y,200,10)
}

