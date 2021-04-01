const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)

    hammer = new Hammer(10,100);

    rub1 = new Rubber(800,20,PI/2)
    rub2 = new Rubber(802,20,PI/2)
    rub3 = new Rubber(804,20,PI/2)
    rub4 = new Rubber(806,20,PI/2)
    rub5 = new Rubber(808,20,PI/2)

    iron = new Iron(600,470,80,50)

     brick = new Brick(450,500,60,70)

     ball1  = new Ball(250,80,PI/2)
     ball2 = new Ball(300,80,PI/2)
     ball3 = new Ball(350,80,PI/2)
     ball4 = new Ball(400,80,PI/2)

    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rub1.display()
    rub2.display()
    rub4.display()
    rub5.display()
    rub3.display()
    iron.display()
    brick.display()
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
   
  
    
    

    
 
}