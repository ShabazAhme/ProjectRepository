var ball,balli,paddlei,paddle;

function preload() {
  balli=loadAnimation('ball.png');
  paddlei=loadAnimation('paddle.png');
}
function setup() {
 
  createCanvas(400, 400);
  
  ball = createSprite(25,200,25,25);
  ball.addAnimation("t1",balli);
  ball.scale=0.75;
  
  paddle = createSprite(375,200,10,100);
  paddle.addAnimation("p1",paddlei)
  paddle.setCollider("rectangle",0,0,20,100);
 
  
  ball.velocityX=9 ;
}

function draw() {
  
  background(205,153,0);
  edges=createEdgeSprites(); 
    
  ball.bounceOff(paddle,randomVelocity);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=random(-8,8);
}

