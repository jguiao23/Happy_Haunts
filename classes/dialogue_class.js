// Define the TextScene class
class TextScene {
  constructor(dialogue, options = {}) {
    // Store dialogue array and initialize dialogue index
    this.dialogue = dialogue;
    this.currentIndex = 0;

    // Allow configurable properties with defaults
    this.textX = width/2;
    this.textY = options.textY || height / 1.5;
    this.textSize = options.textSize || 24;
    this.maxW = options.maxW || height - height / 3 - 2;
    // this.maxH = 

    this.nameX=width/2;
    this.nameY=height/2;
    this.textSize = 32;

    // Textbox properties (position and size)
    this.boxX = options.boxX || width / 2;
    this.boxY = options.boxY || height/1.3;
    this.boxWidth = options.boxWidth || 500;
    this.boxHeight = options.boxHeight || 350;

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
    fill(255);
    // Draw a rectangle at the specified position
    rect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
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




