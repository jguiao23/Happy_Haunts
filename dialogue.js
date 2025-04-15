

let i = 0;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  textBox();
  textScene1();
  
}

function keyPressed(){
  if(keyCode === 39){
    i++;
  }
  if(keyCode === 37){
    i--;
  }
  
}

function textScene1(){
  
  let dialogue =  [{
    line: "Happy hundred Years of haunt-aversary to me, I suppose."
  },
  {
    line: "Hi"
  },
]
  
  textAlign(CENTER);
  textSize(24);
  text(dialogue[i].line,width/2,height/1.5,height - height / 3 - 2);

}

function textBox(){
  rectMode(CENTER);
  rect(width / 2, 300, 300, 150);
}

