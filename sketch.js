var gameState=0,playerCount,database,form,player,game; 
var car1, car2, car3, car4, cars=[];
var trackImage, car1Image, car2Image, car3Image, car4Image, groundImage;
function preload(){
  trackImage=loadImage("fast&Nitro/images/track.jpg");
  car1Image=loadImage("fast&Nitro/images/car1.png");
car2Image=loadImage("fast&Nitro/images/car2.png");
car3Image=loadImage("fast&Nitro/images/car3.png");
car4Image=loadImage("fast&Nitro/images/car4.png");
groundImage=loadImage("fast&Nitro/images/ground.png");
}

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(displayWidth-20,displayHeight-30);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){ 
if(playerCount==4){
  game.update(1)
}
if(gameState==1){
  clear();
  game.play();
}
if(gameState==2){
  game.end();
}


}
