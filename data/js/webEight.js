

"use strict";


var canvas;
let circles = []; //empty circles array
let centerX; ///variables to be used lated on for our spinning animation
let centerY;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0) //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1'); //this is to put the javascript canvas in the background, behind all the html and css
    centerX = width / 2; //to delimit the center on thehorizontal way
    centerY = height / 2; //to delimit the center on the vertical way
}


function draw() {
    background(26, 19, 59); //navy blue bakground for our canvas

    if (frameCount % 2 === 0) {
        let angle = random(TWO_PI); //random angle within pi/2
        let radius = random(200, 400); //random radius

        circles.push({ //adding the circles to the array
            angle: angle,
            radius: radius,
            speedSpin: random(0.05, 0.1),
            speedCenter: random(0.5, 1),
            size: random(5, 12),
            alpha: 255
        });
    }

    for (let i = circles.length - 1; i >= 0; i--) {

        let circle = circles[i]; //referring to the array
        circle.angle += circle.speedSpin; //adds spead to our circle
        circle.radius -= circle.speedCenter; //adds spead towards the circle
        let x = centerX + cos(circle.angle) * circle.radius; //this is what makes ir spin in a rotational movement
        let y = centerY + sin(circle.angle) * circle.radius;

        push(); //draws our circles in a spinning motion
        noStroke();
        fill(255, 16, 240, circle.alpha);
        ellipse(x, y, circle.size);
        pop();

        circle.alpha -= 4; //fades out the color by 4 


    }

}
