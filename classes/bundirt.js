//Meryl Home
  class BunDirty {
  constructor(options = {}) {
   this.dirty = {
    x:width/2,
    y:170,
    sizeW:100,
    sizeH:100,
    img:options.DirtImage
   }
  }

  show() {
    if(this.dirty){
      imageMode(CENTER);
      image(this.dirty.img,this.dirty.x,this.dirty.y,this.dirty.sizeW,this.dirty.sizeH)
    }
  }

} 
