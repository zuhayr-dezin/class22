const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,ground);
   var options={
       restitution:2.5
   }


    ball= Bodies.rectangle(200,100,20,20,options);
    World.add(world,ball);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ball.position.x,ball.position.y,20,20)
    rect(ground.position.x,ground.position.y,400,20);
}
