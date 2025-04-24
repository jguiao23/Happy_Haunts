// Define the TextScene class
class TextScene {
  constructor(dialogue, options = {}) {
    // Store dialogue array and initialize dialogue index
    this.dialogue = dialogue;
    this.currentIndex = 0;

    // Allow configurable properties with defaults
    this.textX = width/2;
    this.textY = options.textY || height / 1.3;
    this.textSize = options.textSize || 23;
    this.maxW = options.maxW || height - height / 3 - 2;
    this.font = options.fontOtf;

    this.nameX=width/2;
    this.nameY=height/1.6;
    this.textSize = 25;

    // Textbox properties (position and size)
    this.boxX = options.boxX || width / 2.03;
    this.boxY = options.boxY || height/2.3;
    this.boxWidth = options.boxWidth || 800;
    this.boxHeight = options.boxHeight || 750;
    this.boxImg = options.boxImg;
    

  }

  // Display the dialogue text
  displayText() {
    textAlign(CENTER);
    rectMode(CENTER);
    textSize(this.textSize);
    
    // Ensure index is valid
    if (this.dialogue[this.currentIndex]) {
      text(this.dialogue[this.currentIndex].line, this.textX, this.textY,this.maxW);
      text(this.dialogue[this.currentIndex].name, this.nameX, this.nameY,this.maxW)
    }
  }

  // Draw the textbox
  displayBox() {
    rectMode(CENTER);
    imageMode(CENTER);
    fill(255);
    // Draw a rectangle at the specified position
    //rect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
    if(this.boxImg){
    image(this.boxImg,this.boxX,this.boxY,this.boxWidth,this.boxHeight)
    }
  }

  // A method to advance to the next dialogue line
  nextLine() {
    this.currentIndex++;
    // Optionally, you might want to loop or cap the index
    // if (this.currentIndex >= this.dialogue.length) {
    //   this.currentIndex = this.dialogue.length - 1; // Stop at the last line
    //   // Alternatively, reset using: this.currentIndex = 0; to loop
    // }
  }
}




