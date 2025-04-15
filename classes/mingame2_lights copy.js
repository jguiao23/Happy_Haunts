// MiniGame2  class find the light while guest are sleeping
class MiniGameLight {
  constructor(options = {}) {
    this.light = {
      x: 100,
      y: 200,
      size: options.size||100,
      upImg:options.lightSwitchUp,      
    }
    this.counter = 0;

    this.direction = {
      x: width/2,
      y: height/2,
      size: 32,
      word: "Find and Flicker the Light"
      }
  }

  text() {
    textAlign(CENTER);
    fill(255);
    textSize(this.direction.size);
    text (this.direction.word,this.direction.x,this.direction.y,)
  }

  show() {
    if(this.light){
      imageMode(CENTER)
      image(this.light.upImg,this.light.x,this.light.y,this.light.size,this.light.size)
    }
  }

  search(px,py) {
  let d = dist(px,py,this.light.x,this.light.y)

  if (d < this.light.size/2){
    cursor('pointer')
    console.log('BOO')
  } else{
    cursor('default')
  }

  if (d< this.light.size/2&&mouseIsPressed){
    background(255);
    image(this.light.upImg,this.light.x,this.light.y,this.light.size,this.light.size)
  }else{
    background(0); 
  }
  
  }


  mousePresseds(px,py){
    let d = dist(px,py,this.light.x,this.light.y)

    if (d< this.light.size/2&&mouseIsPressed){
    this.counter++;
    console.log(this.counter)
    } 
  }

}


let lightDown,lightUp;

function preload(){
  lightUp = loadImage('assets/light_up.png')
}

function setup() {
  imageMode(CENTER);
  createCanvas(600, 600);
  minigamelight= new MiniGameLight({
  
    lightSwitchDown:lightDown,
    lightSwitchUp:lightUp

  })

}

function draw() {
  background(0);
  
  minigamelight.show();
  minigamelight.search(mouseX,mouseY);
  push();
  minigamelight.text();
  pop();
}

function mousePressed(){
 minigamelight.mousePresseds(mouseX,mouseY);
}