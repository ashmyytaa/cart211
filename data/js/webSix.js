
"use strict";
let moneyX = [];
let moneyY = [];
let moneyAlpha = [];

var canvas;

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

    spawnMoneySigns();

}

function spawnMoneySigns() {
    // Set text properties inside the function
    textSize(90);
    textAlign(CENTER, CENTER);

    // Randomly create new $ signs
    if (random() < 1) {
        moneyX.push(random(width));
        moneyY.push(random(height));
        moneyAlpha.push(255);
    }

    // Draw $ signs and fade them
    for (let i = moneyX.length - 1; i >= 0; i--) {
        fill(217, 1, 102, moneyAlpha[i]);
        noStroke();
        text('$', moneyX[i], moneyY[i]);
        moneyAlpha[i] -= 4;

        // Remove fully faded signs
        if (moneyAlpha[i] <= 0) {
            moneyX.splice(i, 1);
            moneyY.splice(i, 1);
            moneyAlpha.splice(i, 1);
        }
    }
}
