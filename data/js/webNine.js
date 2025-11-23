
"use strict";


var canvas;
let accepts = [];

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);


}


function draw() {
    background(26, 19, 59);
    // Fade out and display all the "ACCEPT" texts
    for (let a of accepts) {
        fill(217, 1, 102, a.alpha);
        textSize(a.size);
        text("ACCEPT", a.x, a.y);

        // Movement & fade
        a.x += a.vx;
        a.y += a.vy;
        a.alpha -= 4;
    }

    // Remove faded ones
    accepts = accepts.filter(a => a.alpha > 0);


}

function mouseMoved() {
    // Spawn multiple "ACCEPT" per movement
    for (let i = 0; i < 6; i++) {
        accepts.push({
            x: mouseX + random(-10, 10),
            y: mouseY + random(-10, 10),
            vx: random(-1.5, 1.5),
            vy: random(-1.5, 1.5),
            size: random(30, 50),
            alpha: 255
        });
    }
}
