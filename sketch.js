const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower,floor
var blowerMouth;
var button,button2,button3
var hoop
function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(250, height / 2 - 80, 80, 80);
  blower = new Blower(300,300,600,50);
  wall=new Blower(300,150,450,50)
  button = createButton("Click to blow Up");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button2=createButton("Click to blow Left")
  button2.position(width/1,height-100)
  button.mousePressed(blow);
   button2.mousePressed(left)
  hoop=new Blower(350,100,50,50)
  button3=createButton("Click to blow Right")
  button3.position(width/3,height-100)
  button3.mousePressed(right)
}

function draw() {
  background(59);
  Engine.update(engine);
   wall.show()
  blower.show();
  ball.show();
  hoop.show()
  if(Matter.SAT.collides(ball.body,hoop.body).collided){
   gameOver()
  }
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});


}
function left(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:-0.05,y:0})
}
function right(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0.05,y:0})
}
function gameOver(){
swal(
  {
    title: "Game Over",
    text: "You Won!!!",
    imageUrl:
    "https://raw.githubusercontent.com/vishalgaddam973/PiratesInvision/main/assets/board.png",
    imageSize: "150x150",
    confirmButtonText: "Play Again"
},
  function(isConfirm){
    if(isConfirm){
      location.reload();
    }
  }
 );
}