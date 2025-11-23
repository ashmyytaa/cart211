
"use strict";


var canvas;

let eyes = [
    { x: 200, y: 150 },
    { x: 500, y: 300 },
    { x: 800, y: 200 },
    { x: 400, y: 500 },
];

let eyeWidth = 120;  // same for all eyes
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
