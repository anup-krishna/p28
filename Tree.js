class Tree{
    constructor(x,y,height,width){
        var options = {
          isStatic:true
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.image = loadImage("tree.png")
    }
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width*20,this.height*20);
      pop();
    }
  }