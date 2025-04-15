let npc = [];

function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 1; i++) {
  let x = random(width/2);
  let y = height / 2;
  let w = random(50, 50);
  let h = random (50, 60);

  let n = new Npc(x, y, w, h);
  npc.push(n);
  }
}

// function mousePressed() {
//   for (let i = 0; i < npc.length; i++) {
//   }
// }

function draw() {
  background(0);
  for (let i = 0; i < npc.length; i++) {
    npc[i].rollover(mouseX,mouseY);
    // npc[i].move();
    npc[i].show();
  }
  textSize(32);
  textAlign(CENTER);
  text("FIND THE LIGHT",width/2,height/4);
}

class Npc {
  constructor(tempX, tempY, tempW,tempH, tempB) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.brightness = tempB;
  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w/2 && this.h/2 && mouseIsPressed ) {
      this.brightness = 125;
      background(255);
    } else {
      this.brightness = 0;
    }
  }

  move() {
    this.x = this.x++;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness);
    rectMode(CENTER);
    rect(this.x, this.y, this.w,this.h);
  }
}
