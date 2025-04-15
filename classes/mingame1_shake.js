// MiniGame class Shake Bun Bun till Bun Bun Falls
class MiniGame {
  constructor(options = {}) {
    this.score = 0;
    this.player = {
      x: width / 2,
      y: height /2,
      size: 300,
    
    };
    this.img = options.bunImage;

    
  }

  update() {
    // Implement game logic here (e.g., moving player, collisions, etc.)
  }

  show(){
    if (this.img){
      imageMode(CENTER);
      image(this.img,this.player.x,this.player.y,this.player.size,this.player.size);
    }
  }
  

  draw() {
    fill(0);
    // ellipse(this.player.x, this.player.y, this.player.size);
    textSize(18);
    fill(50);
    text("Score: " + this.score, 50, 50);
    if(this.score === 3){
      this.player.x += random(-4,4);
      }
    if (this.score === 4){
      this.player.x += random(-6,6)
    }
    if(this.score===5){
      // this.player.y - 6;
    }
    
  }

  mousePressed() {
    // Example: increase score when the minigame is clicked
    this.score++;
  }
}
