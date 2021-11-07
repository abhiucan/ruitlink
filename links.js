class Links{
constructor(bodyA,bodyB){

var last=bodyA.body.bodies.length-2
this.body=Constraint.create({
bodyA:bodyA.body.bodies[last],bodyB:bodyB,
length:-10,
stiffness:0.01




})

World.add(world,this.body)








}
}
