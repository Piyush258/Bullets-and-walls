var wall,thickness;
var bullet, speed, weight, damage;


function setup() {
  createCanvas(1600,400);
  background(0);
  bullet = createSprite(100, 200, 25, 5);
  wall = createSprite(1350,200,thickness,height/2);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
   bullet.shapeColor = (255,255,255);
   bullet.depth = wall.depth;
   bullet.depth = bullet.depth+1;
   wall.shapeColor = (255,255,255);
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   console.log(damage);
}

function draw() {
 
  if (bullet.x-wall.x < wall.width/2+bullet.width/2 && 
    wall.x-bullet.x < wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    
    if (damage>=10){
      wall.shapeColor = "red";
    }

    if (damage<10){
      wall.shapeColor = "green"; 
    }
  }
 
  background(235);  
  drawSprites();
}