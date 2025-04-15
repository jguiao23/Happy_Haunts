//Meryl Home
  class Home {
  constructor(options = {}) {
   this.house = {
    x:width/2,
    y:150,
    sizeW:width,
    sizeH:height/2,
    img:options.houseImage
   }
  }

  show() {
    if(this.house){
      imageMode(CENTER);
      image(this.house.img,this.house.x,this.house.y,this.house.sizeW,this.house.sizeH)
    }
  }

} 
