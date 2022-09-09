var trex ,trex_running,ground;
function preload(){
  //loading pics of animation in a varaible
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,15)
 //adding aniimation to trex
 trex.addAnimation("running",trex_running)
 // creating boundaries
 edge = createEdgeSprites()
 // adding scale and postion to trex
 trex.scale = 0.5 
 // creating ground sprite
 ground = createSprite(200,180,400,20)
 // adding picture
 ground.addImage("ground_picture",ground_image)
}

function draw(){
  //set background color
  background("whilte");
  //trex jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -8;
  }
  
  //adding gravity to pull the object to itself
  trex.velocityY +=  0.5
  // collsion with bottom edge ( stop trex from falling down  )
  trex.collide(ground);
  //using consloe.log 
  console.log(trex.y)
  // 
  ground.velocityX = -2  
  // infinte ground
  if(ground.x <0 ){
   ground.x = ground.width/2 
  }    
  drawSprites()

}
        