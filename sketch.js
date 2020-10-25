const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    box1 = new Box(200,200,50,50);
    box2 = new Box(230,100,40,80);

    ground = new Ground(200,350,400,20);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
}