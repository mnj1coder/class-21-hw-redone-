var bullet,speed,weight;
var wall,thickness;

var bulletRughtEdge,lwallLeftEdge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,88);

  bullet=createSprite(40, 200, 40, 10);
  //lbullet=createSprite(40, 200, 40, 10);
  
  wall=createSprite(1200,200,thickness,70);
  //lwall=createSprite(1200,200,thickness,70);

  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
  background(0);  
  
  bullet.velocityX=random(2,5);

  hascollided(bullet,wall);

  if(hascollided(bullet,wall)){

    bullet.velocityX=0;

    var damage=0.5*speed*speed*weight/thickness*thickness*thickness

    if(damage>=10){
      wall.shapeColor=("green");
    }
     if(damage<10){
       wall.shapeColor=("red");
     }
  }

  drawSprites();

}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    else{
      return false;}

    }
