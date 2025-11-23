
"use strict";


var canvas;

let eyes = [
    { x: 100, y: 200 },
    { x: 300, y: 300 },
    { x: 900, y: 400 },
    { x: 600, y: 550 },

    { x: 500, y: 100 },
    { x: 700, y: 50 },
    { x: 200, y: 90 },
    { x: 450, y: 350 },

    { x: 700, y: 200 },
    { x: 850, y: 300 },
    { x: 1200, y: 450 },
    { x: 900, y: 580 },

    { x: 1100, y: 300 },
    { x: 1100, y: 50 },
    { x: 1200, y: 100 },
    { x: 900, y: 200 },

    { x: 70, y: 600 },
    { x: 200, y: 500 },
    { x: 300, y: 610 },
    { x: 400, y: 500 },
];

let eyeWidth = 125;
let eyeHeight = 60;

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

    drawEyes();    // call function to draw all eyes


}


function drawEyes() {
    for (let eye of eyes) {
        drawEye(eye.x, eye.y);
    }
}

function drawEye(x, y) {
    // Draw eyeball
    fill(255);
    stroke(255);
    ellipse(x, y, eyeWidth, eyeHeight);

    // Pupil follows mouse, stays inside the eye
    let pupilX = constrain(mouseX, x - eyeWidth * 0.2, x + eyeWidth * 0.2);
    let pupilY = constrain(mouseY, y - eyeHeight * 0.2, y + eyeHeight * 0.2);

    // Draw pupil
    fill(0);
    noStroke();
    ellipse(pupilX, pupilY, eyeWidth * 0.2, eyeHeight * 0.4);
}
