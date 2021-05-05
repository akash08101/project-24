class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
    var options={
       'restitution':0.7,
       'friction':3,
       'density':30
    }
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y,80,80, options);
		World.add(world, this.body);
this.width=80;
this.height=80;
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
rect(0,0,80,80);
			pop()
	}

}