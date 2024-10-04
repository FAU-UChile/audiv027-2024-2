class wall{
  
  constructor (x,y,z){
  this.x=x;
  this.y=y;
  this.z=z;  
    

      
  }
  

  display(){
    texture(bricks);
    
    push();
    strokeWeight(5);
    translate(this.x,this.y,this.z);
    box(400,400);
    pop();
     var d= dist(this.x,this.y,this.z,cam.eyeX,cam.eyeY,cam.eyeZ)
    if(d>=350){
    var lastGoodX=cam.eyeX;
    var lastGoodY = cam.eyeY;
    var lastGoodZ=cam.eyeZ;

      return lastGoodX;
    
      
    }

  }
  
            touching(){
        
      var d= dist(this.x,this.y,this.z,cam.eyeX,cam.eyeY,cam.eyeZ)
        
      if(d<350){
        return true;
      }
        else {
          return false;
          
        }
        
      }


}