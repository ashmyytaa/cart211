
"use strict";


var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let eyee = {
    x: 650,
    y: 320,
    size: 700,
    tall: 300,

    minSize: 600,
    maxSize: 900,

    minTall: 250,
    maxTall: 450,

    sizeSpeed: 3,
    tallSpeed: 3,


    pupil: {
        x: 650,
        y: 320,
        size: 250,

    },


    pupilOne: {
        x: 650,
        y: 320,
        size: 150,

    }


}

let binarys = [];




function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);

    for (let i = 0; i < 50; i++) {
        binarys.push(createBinary());
    }
}



function createBinary() {

    let binary = {
        x: random(0, width),
        y: random(0, height),
        size: 20,

        fill: {
            r: random(0, 255),
            g: random(50, 100),
            b: random(100, 255),
            a: random(200, 255),
        },

        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };

    return binary;
}


function draw() {
    background(26, 19, 59);



    for (let binary of binarys) {
        moveBinary(binary);
        bounceBinary(binary);
        drawBinary(binary);
    }




    eye();


}


function eye() {

    eyee.size += eyee.sizeSpeed;
    eyee.tall += eyee.tallSpeed;


    if (eyee.size >= eyee.maxSize || eyee.size <= eyee.minSize) {
        eyee.sizeSpeed *= -1;
    }

    if (eyee.tall >= eyee.maxTall || eyee.tall <= eyee.minTall) {
        eyee.tallSpeed *= -1;
    }



    push()
    fill(0)
    stroke(0)
    ellipse(eyee.x, eyee.y, eyee.size, eyee.tall);
    pop();



    push()
    fill(255)
    noStroke()
    ellipse(eyee.pupil.x, eyee.pupil.y, eyee.pupil.size);
    pop();

    push()
    fill(0)
    noStroke()
    ellipse(eyee.pupilOne.x, eyee.pupilOne.y, eyee.pupilOne.size);
    pop();



}


function moveBinary(binary) {
    binary.x += binary.velocity.x;
    binary.y += binary.velocity.y;
}


function bounceBinary(binary) {
    // Check if the ball has reached the left or right
    const bounceX = (binary.x > width || binary.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (binary.y > height || binary.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        binary.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        binary.velocity.y *= -1;
    }
}


function drawBinary(binary) {
    push();
    noStroke();
    fill(binary.fill.r, binary.fill.g, binary.fill.b, binary.fill.a);
    textSize(20);
    text("1 0 1 0 1 0 1 0 1 0", binary.x, binary.y,)
    pop();
}


