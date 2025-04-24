//Meryl Home
  class Meryl {
  constructor(options = {}) {
   this.meryl = {
    x:width/2,
    y:height/2,
    sizeW:100,
    sizeH:100,
    img:options.merylImage
   }
  }

  show() {
    if(this.dirty){
      imageMode(CENTER);
      image(this.meryl.img,this.meryl.x,this.meryl.y,this.meryl.sizeW,this.meryl.sizeH)
    }
  }


} 
