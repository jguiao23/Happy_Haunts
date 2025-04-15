// MiniGameBun class Player gets to customize Bun Bun
class MiniGameBun {
  constructor(options = {}) {
    this.bun = {
      x: width/2,
      y: height/2,
      size: 100,
      img:BunImg
    };
    this.buttonB = {
      x: width/2,
      y: 350,
      size:10    
    }
    

    }


  draw() {
    
  }


  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);
    rectMode(CENTER);
    ellipse(this.button.x, this.button.y, this.button.size);
  }
} 
let defaultBun

function preload(){
defaultBun = loadImage('assets/allBun/Bun_Original.png')
}

function setup() {
  createCanvas(600, 600);

  minigameBun = new MiniGameBun({
    BunImg:defaultBun,
  })

  
}

function draw() {
  background(220);
}