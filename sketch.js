var boatSailing;
var boat;
function preload(){
boatSailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  boat = createSprite(150,290,20,50)
  boat.addAnimation("Sailing",boatSailing)
  boat.scale =.3;


}

function draw() {
  background("blue");
  drawSprites();
 
}