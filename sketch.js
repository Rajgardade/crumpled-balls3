const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var engine, world
var h;
var boy
var ground1
var boxes = [50];
var checkpoint1
var gamestate,
  start,play,end

var binImg,bin;


  var paper,paperimage
function preload(){

 
  paperimage = loadImage("paper.png")
  binImg = loadImage("Images/dustbingreen.png");






}
function setup()
  {
  createCanvas(1200,400);
  rectMode(CENTER)
 engine=Engine.create();
  world = engine.world;
  

 
  
if(gamestate === start){


  var optionse = {
  isStatic:true,
  frication:1
 }
  ground1= Bodies.rectangle(600,450,1600,100,optionse)
  World.add(world,ground1)
  

   //var optionss= {
     //restitution:0.7,
     //friction:0.1,
    //density: 1
    
   //}
  
    //rectMode(CENTER)
   //hi2 = Bodies.circle(100,80,25,optionss)
   //World.add(world,hi2)

   var static = {
   isStatic: true, 
   }
   border = Bodies.rectangle(5,190,50,300,static)
   World.add(world,border)

  // ground = new Ground(600,390,1200,100)
   //var etc = {
   // isStatic:false,
   // density: 10,
   // friction:10,
  //  weight:1000,

 hi3 = new Circle1(200,90,50)

 bin = createSprite(950,320,20,20);
 bin.addImage(binImg);
 bin.scale = 0.5;
    
  // }
  // object1 = Bodies.rectangle(900,100,50,80,etc)
  // World.add(world,object1)

  // object2 = Bodies.rectangle(920,160,50,50,etc)
   //World.add(world,object2)

    object1  = new Block(1100,380,50,800,)
    fill("yellow")
    object2 = new Block(1000,350,25,100)
    object3 = new Block(900,350,25,100)
    object4 = new Block(950,395,125,20)


   //object2 = new Block(930,160,50,50,)
   
   
   //checkpoint1 = createSprite(1100,290,20,20);

   //var render = Render.create({


    //element:document.body,
   // engine : engine,

   // options: {
    //  width:1200,
     // height: 400,
    //  wireframes: false
  //  }

   // });

    //Render.run(render);
  }
   }
   
  

function draw() {
  background('white')
  Engine.update(engine);
  rectMode(CENTER)

 
  hi3.display();
  //rect(object2.position.x,object2.position.y,50,50)
  //rect(object1.position.x,object1.position.y,50,80)
  //rect(ground1.position.x,ground1.position.y,1200,100)
  fill("black")
  rect(border.position.x,border.position.y,50,300)
  //fill("yellow")
  object1.display();
  fill("cyan")

  object2.display();
  object3.display();
  object4.display();
 // ground.display();


// boxes.push(new Block(mouse.X,mouse.Y,random(10,15)))
  //rectMode(CENTER)
   //for(var i = 0; i < boxes[50]; i++){
   
   
  
     //boxes[i].display();

   //}





   rectMode(CENTER)
   rect(ground1.position.x,ground1.position.y,1600,100)
   fill("orange")
   rectMode(CENTER)
   //ellipse(RADIUS)
   //ellipse(hi2.position.x,hi2.position.y,50)
   
   stroke ("cyan")
   fill("white")
   textSize(15)
   text("Hello,  welcome to my  game ",200,30)
   text("To start click on the UP ARROW key  ",200,50)
  // text("and space to jump",200,70)

 
drawSprites();
 
}












//function keyPressed(){
 // if (keyCode === RIGHT_ARROW ) {
   // Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
     // x: 50,
      //y: 0
    //});
  //}


 // if (keyCode === LEFT_ARROW ) {
   // Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
     // x: -50,
      //y: 0
    //});
  //}


  //if (keyCode === 32 ) {
    //Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      //x: 0,
      //y: -50
   // });
  //}

  //if (keyCode === DOWN_ARROW ) {
    //Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
     // x: 0,
      //y: 50
    //});
  //}

  
  //if ( hi2.position.y < 230 ) {
   // Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
     // x: 0,
      //y: 100
    //});
  
    //if ( hi2.position.y  >= 351 ) {
      //Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
        //x: 0,
        //y: 0
      //});
   // }
//  }
//}

function mouseDragged(){


//boxes.push(new Block(mouseX,mouseY,20,20))
 



}

function keyPressed(){

 //if(hi2.position.x < 100){
  //if (keyCode === UP_ARROW ) {

    
    //Matter.Body.applyForce(hi2 , {x: hi2.position.x, y: hi2.position.y}, {
      //x: 100,
      //y: -102
    //});
  //}
 //}
 

 //if(hi3.position.x < 200){
  //if (keyCode === UP_ARROW ) {

    
    //Matter.Body.applyForce(hi3.body , {x: hi3.body.position.x, y: hi3.body.position.y}, {
      //x: 100,
      //y: -102
    //});
  //}//


//f(hi3.position.y >= 400){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(hi3.body,hi3.body.position,{x:303,y:-500});
}
//}






 }
 
//}