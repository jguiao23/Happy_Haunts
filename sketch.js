

let bunBun;
let counter = 0; 
function setup() {
  createCanvas(400, 400);
  
  bunBun = new Bunbun (width/2,height/2,200,200);
}

function draw() {
  background(220);
  bunBun.show();
  bunBun.tickle();
  console.log(bunBun.x,bunBun.y);
  console.log(counter);
}




class Bunbun{
  constructor(tempX,tempY,tempW,tempH){
    this.x = tempX;
    this.y = tempY;
    this.w = tempW; 
    this.h = tempH;
  }


  show(){
  fill(0,0,0);
  if (counter >=10 ){
    fill(255,0,0);
  }
  rectMode(CENTER);
  rect(this.x,this.y,this.w,this.h);
  
  }

  tickle(){
    if (mouseIsPressed)
       {
      this.x += random (-5,5);
      this.y += random (-5,5);
      
    }
   
  }


}


