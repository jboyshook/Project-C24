class ball {
    constructor(x, y) {
        var options = {
            isStatic: true,
            'restitution': 1.0,
            friction:0.6,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, 20, options);

        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("green");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
    keyPress() {
        if (keyDown("space")) {
            Matter.Body.setStatic(this.body, false);
        }
    }
}