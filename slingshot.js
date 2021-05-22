
    var ch = 0
    class Slingshot {
        constructor(pointA,bodyB){
            var options = {
                stiffness:0.007,
                pointA: pointA,
                bodyB: bodyB,
                length: 5
            }
    
    this.Slingshot = Matter.Constraint.create(options)
    World.add(world,this.Slingshot);
    this.pointA = pointA;
    
    
        }


        fly(){
       
            this.Slingshot.bodyB = null;
            ch=1 
           
        }
        
        display(){
            strokeWeight(6)
            //if(ch===0){
           
            if (this.Slingshot.bodyB!=null){
           line(this.pointA.x,this.pointA.y,this.Slingshot.bodyB.position.x,this.Slingshot.bodyB.position.y)
          
                }
          
        }
    }
    