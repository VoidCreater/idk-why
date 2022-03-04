
var frontground , frontgroundImg, temple, templeImg, manRunning, man;
var stone, stoneImg, skyStone, skyStoneImg;
var gameState = "start"

function preload() {
  templeImg = loadImage("./images/temple.png");
  frontgroundImg = loadImage("./images/background.png");
  manRunning = loadAnimation("./images/man1.png", "./images/man2.png", "./images/man3.png");
  stoneImg = loadImage("./images/stone.png");
  skyStoneImg = loadImage("./images/SkyStone.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //creating the background
  frontground = createSprite(width/2, height/2, width, height);
  frontground.addImage(frontgroundImg);
  //creating the temple
  temple = createSprite(200, height- 180);
  temple.addImage(templeImg);
  
  frontground.scale = 2.5;
  man = createSprite(240, height -120);
  man.addAnimation("running",manRunning);
  man.scale = 0.5;

  ground = createSprite(width/2 , height , width, 30 );
  ground.shapeColor = "brown";
  ground.visible = true;
}

function draw() {

 console.log(man.y);
  background(255,255,255); 
  
  //gamestate start this doesn't work
  if(gameState === "start"){
    textSize(40);
    text("Press Space To Run", width/2, height/2);
    
   }

  if(frontground.x< 0){
    frontground.x = width/2;
  }
  if(keyDown("space")){
    frontground.velocityX = -3;
    temple.visible = false;
  }
  spawnSkyStone();
  drawSprites();
  
  if(keyDown("up_arrow")&& man.y > 543){
    man.velocityY = -8;
  }
  man.velocityY = man.velocityY + 0.5
  man.collide(ground);
}

function spawnSkyStone(){
  if(frameCount %120 === 0){
    skyStone = createSprite(10, 0);
    skyStone.addImage(skyStoneImg);
    skyStone.x= Math.round(random(20, width -200));
    skyStone.velocityY = 5;
    skyStone.scale = 0.2;
  }
}

function Stone(){
  if(frameCount %150 === 0){
    stone = createSprite(width, height);
    stone.addImage(stoneImg);
    stone.velocityX = -3;
  }
}