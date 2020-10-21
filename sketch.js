var car1,car2,car3,car4;
var speed,weight;
var wall1,wall2,wall3,wall4


function setup() {
  createCanvas(1200,400)
  
  speed = random(55,90);
  weight = random(400,1500);
  car1 = createSprite(50,50,10,10);
  car1.velocityX = speed;
  car2 = createSprite(50,120,10,10);
  car2.velocityX = speed;
  car3 = createSprite(50,190,10,10);
  car3.velocityX = speed;
  car4 = createSprite(50,260,10,10);
  car4.velocityX = speed;

  wall1 = createSprite(1100,50,20,50);
  wall2 = createSprite(1100,120,20,50);
  wall3 = createSprite(1100,190,20,50);
  wall4 = createSprite(1100,260,20,50);


 
}

function draw() {
  background(255,255,255);  

  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car1.shapecolor = color(255,0,0);
    }
    if(deformation<108 && deformation>100)
    {
      car1.shapecolor = color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapecolor = color(0,255,0);
    }

  }

  if(wall2.x-car2.x < (car2.width+wall1.width)/2)
  {
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car2.shapecolor = color(255,0,0);
    }
    if(deformation<108 && deformation>100)
    {
      car2.shapecolor = color(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapecolor = color(0,255,0);
    }

  }

  if(wall3.x-car3.x < (car3.width+wall1.width)/2)
  {
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car3.shapecolor = color(255,0,0);
    }
    if(deformation<108 && deformation>100)
    {
      car3.shapecolor = color(230,230,0);
    }
    if(deformation<100)
    {
      car3.shapecolor = color(0,255,0);
    }

  }

  if(wall4.x-car4.x < (car4.width+wall4.width)/2)
  {
    car4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car4.shapecolor = color(255,0,0);
    }
    if(deformation<108 && deformation>100)
    {
      car4.shapecolor = color(230,230,0);
    }
    if(deformation<100)
    {
      car4.shapecolor = color(0,255,0);
    }

  }

  drawSprites();
}