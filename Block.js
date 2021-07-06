class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
    
this.visiblity = 255;

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 3) {
        
      }
      else {
        World.remove(world, this.body)
       this.Visiblity = this.Visiblity-5
        tint(255,this.Visiblity)
      }
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}