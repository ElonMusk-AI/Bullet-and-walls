var bullet;
var speed, weight, wall, thickness;

function setup() {
  createCanvas(1440,400);

  thickness = Math.round(random(22,80));

  wall = createSprite(1200,200,thickness,height/2);
 

  speed = random(250,350);
  weight  = random(30,55);

  bullet = createSprite(50, 200, 50, 5);

  bullet.velocityX = speed;


 
}

function draw() {
  background("black");  

  if (collision(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed / (thickness**3);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }

  }


  drawSprites();
}

function collision(bull,walll){
  var bulletRightEdge  =bull.x - bull.width;
  var wallLeftEdge =walll.x

  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{
    return false
  }


}