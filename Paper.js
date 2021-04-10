class Paper
{
	constructor(x,y,w,h,angle)
	{
		var options={
			isStatic:false,	
            'restitution':0.3,
            'friction':0,
            'density':1.2

			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , angle, options);
        this.image=loadImage("paper.png");
		Matter.Body.setAngle(this.body,angle);
 		World.add(world, this.body);

	}
	display()
	{
		var angle = this.body.angle;
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			image(this.image,0,0,this.r,this.r);

			
			
			pop()
			
	}

}