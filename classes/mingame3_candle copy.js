// MiniGame3  class keep clicking mouse until the music from the radio starts playing
let barImg;

class MiniGame3 {
  constructor(options = {}) {
    this.circle = {
    x : 50,
    y : width/1.2,
    r : 50,
    color : 0
    }
    this.xSpeed = 5;
    this.hit = 0;
    this.bars = {
     x: width/2,
     y: height/1.2,
     size: 400,
     bar:options.barImage
    }
    this.candle = {
      x: 320,
      y: height/2,
      size: 300,
      candleimg: options.Candle
    }
    this.directions = {
    x: width/2,
    y: height/4,
    size: 32,
    word: "Hit the Middle Green to blow candle"
    }
}
  text() {
    textAlign(CENTER);
    textSize(this.directions.size);
    text (this.directions.word,this.directions.x,this.directions.y,)
  }
  update() {
    fill(this.circle.color);
    ellipse(this.circle.x,this.circle.y,this.circle.r)
  }

  show() {
    if (this.bars.bar){
      imageMode(CENTER);
      image(this.bars.bar,this.bars.x,this.bars.y,this.bars.size,this.bars.size);

      if (this.candle.candleimg){
        imageMode(CENTER);
                image(this.candle.candleimg,this.candle.x,this.candle.y,this.candle.size,this.candle.size)
        }
  }
  
}

  bounce() {
  this.circle.x = this.circle.x + this.xSpeed;
  // console.log(this.circle.x);
  if(this.circle.x>width){
    this.xSpeed = -this.xSpeed;
  }
  if(this.circle.x < 0){
    this.xSpeed = -this.xSpeed;
  }
  if(this.circle.x <= 300 && this.circle.x >= 270 && mouseIsPressed){
    console.log("HIT");
    this.hit++;

  }
  if(this.circle.x <= 350 && this.circle.x >=300 && mouseIsPressed){
    console.log("HIT");
    console.log(this.circle.x)
    this.hit++;
  }

  }
} 

function preload(){
  barImg = loadImage('assets/Bar.png');
  candleImage = loadImage('assets/candle.png')
}

function setup(){
  createCanvas(600,600);
  miniGame3 = new MiniGame3({
  
    barImage:barImg,
    Candle:candleImage
 });
}

function draw(){
  background(220);
  miniGame3.bounce();
  miniGame3.show();
  miniGame3.update();
  push();
  miniGame3.text();
  pop();
  if (miniGame3.hit > 0){
  background(0);
  }
  
}