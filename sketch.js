var sea,ship
var seaImg,shipImg

function preload(){
seaImg = loadImage("sea.png")
shipImg =loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200)
  sea .addImage("sea",seaImg)
  sea.velocityX =-5
  sea.scale=0.3
  ship = createSprite(130,200,30,10)
ship.addImage("movingship",shipImg)
ship.scale =0.5

}

function draw() {
  background("blue");
 sea.velocityX = -3
 if(sea.x < 0 ) {
  sea.x = sea.width/ 8 
 }
 drawSprites()
 
}