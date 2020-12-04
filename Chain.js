class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 2
        }
       
        this.pointB = pointB
        this.rope = Constraint.create(options);
        this.image = loadImage("boy.png")
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    throw(){
        this.rope.bodyA = null;
    }

    display(){
        image(this.image,160, 320, 150, 300);
        //if(this.rope.bodyA){
           // var pointA = this.rope.bodyA.position;
            //var pointB = this.pointB;
            //push();
            //strokeWeight(6);
            //stroke("black");
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
           // pop();
        //}
 
    }
    
}