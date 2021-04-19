var bgImg,mouse,cat;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;

function preload() {

   bgImg = loadImage("images/garden.png");
   catImg1 = loadAnimation("images/cat1.png");
   mouseImg1 = loadAnimation("images/mouse1.png");
   catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
   mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(600,400,200,200)
   mouse = createSprite(200,400,200,200)
}

function draw() {

    background(bgImg);

    
  
  
  
  
  
    keyPressed();
    drawSprites();
    
}


function keyPressed(){

if(keyCode === RIGHT_ARROW){


    mouse.addAnimation("dfnkj",mouseImg1);
    mouse.changeAnimation(mouseImg2);
    mouse.frameDelay = 25 ;
    mouse.scale=0.25;
    mouse.x=mouse.x+10;
    
}

if (keyCode === LEFT_ARROW){

    cat.addAnimation("dfnkj",catImg1);
    cat.changeAnimation(catImg2);
    cat.frameDelay = 25 ;
    cat.scale=0.25;


}




}
