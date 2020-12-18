const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(320, 155, 1200, 20);

    box8 = new Box(330,235,30,40);
    box7 = new Box(360,235,30,40);
    box6 = new Box(390,235,30,40);
    box5 = new Box(420,235,30,40);
    box4 = new Box(450,235,30,40);

    box3 = new Box(360,195,30,40);
    box2 = new Box(390,195,30,40);
    box1 = new Box(420,195,30,40);

    box0 = new Box(390,155,30,40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon, {x:100, y:200});
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    //slingshot.fly();
}
