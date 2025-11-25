
"use strict";


var canvas;

let eyes = [ //eyes array thag contains all my eye shapes in which i specifially decided where will be the x and y values of my eyes
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

let size = 125; //size of my eye
let height = 60; //height of my eye

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);  //canvas size equals to the browser window's size
    canvas.position(0, 0) //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1');  //this is to put the javascript canvas in the background, behind all the html and css
    background(175);


}


function draw() {
    background(26, 19, 59); //davy blue background

    drawEyes(); //call function to draw all eyes


}


function drawEyes() {
    for (let eye of eyes) {
        drawEye(eye.x, eye.y);
    }
}

function drawEye(x, y) { //takes the x and y parameters from where i initialized them from the array

    //draws my eye shape
    push();
    fill(255);
    stroke(255);
    ellipse(x, y, size, height);
    pop();

    //using mouseX and mouseY to make the pupil follows the user's cursor
    let pupilX = constrain(mouseX, x - size * 0.2, x + size * 0.2);
    let pupilY = constrain(mouseY, y - height * 0.2, y + height * 0.2);

    //draws my pupil shape
    push();
    fill(0);
    noStroke();
    ellipse(pupilX, pupilY, size * 0.2, height * 0.4);
    pop();
}
