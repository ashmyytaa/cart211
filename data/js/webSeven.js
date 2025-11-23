
"use strict";


var canvas;
let progress = 0;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


//function preload() {
// world = loadImage('assets/download.png')
//}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);



}


function draw() {
    background(26, 19, 59);

    drawDashedLineRightToLeft();
}


function drawDashedLineRightToLeft() {
    let startX = width;           // start on the right
    let startY = height / 2;
    let endX = 0;                 // end on the left
    let endY = height / 2;
    let dashLength = 20;
    let gapLength = 10;
    let speed = 3;

    let lineLength = dist(startX, startY, endX, endY);

    // Draw dashes along the line up to current progress
    let distance = 0;
    while (distance < progress) {
        let t1 = distance / lineLength;
        let t2 = min((distance + dashLength) / lineLength, 1);

        let x1 = lerp(startX, endX, t1);
        let y1 = lerp(startY, endY, t1);
        let x2 = lerp(startX, endX, t2);
        let y2 = lerp(startY, endY, t2);

        stroke(217, 1, 102);
        strokeWeight(3);
        line(x1, y1, x2, y2);

        distance += dashLength + gapLength;
    }

    // Move the dashes along the line
    progress += speed;

    // Reset when reaching the end
    if (progress > lineLength) {
        progress = 0;
    }
}