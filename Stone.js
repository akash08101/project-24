class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
    var options={
       'restitution':0.8,
       'friction':0.9,
       'density':12
    }
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y,50,50, options);
		World.add(world, this.body);
this.width=50;
this.height=50;
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
rect(0,0,50,50);
			pop()
	}

}