//Meryl Home
  class AnnBackground {
  constructor(options = {}) {
   this.house = {
    x:width/2,
    y:width/2,
    sizeW:width,
    sizeH:height,
    img:options.backGroundImg
   }
  }

  show() {
    if(this.house){
      imageMode(CENTER);
      image(this.house.img,this.house.x,this.house.y,this.house.sizeW,this.house.sizeH)
    }
  }

} 
