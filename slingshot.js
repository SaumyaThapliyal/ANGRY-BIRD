class Slingshot{
    constructor(body1, point){
        var option = {
            bodyA:body1,
            pointB:point,
            stiffness:0.04,
            length:10
        }
         this.pointB = point;
        this.sling = Constraint.create(option);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world,this.sling)
    }

    fly (){
        this.sling.bodyA = null;
    }

    attached(body){
    this.sling.bodyA = body;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);

        if(this.sling.bodyA){
        var posA= this.sling.bodyA.position;
        var posB= this.pointB;
        push();
        strokeWeight(7);
        stroke(48,22,8);
        if(posA.x<220){
        line(posA.x-20,posA.y,posB.x-20,posB.y);
        line(posA.x-20,posA.y,posB.x+30,posB.y);
        image(this.sling3,posA.x-30,posA.y-10,15,30);
        }
        else{
            strokeWeight(3);
            line(posA.x+25,posA.y,posB.x-20,posB.y);
        line(posA.x+25,posA.y,posB.x+30,posB.y);
        image(this.sling3,posA.x+25,posA.y-10,15,30);
        }
        pop();
        }
    }
}
