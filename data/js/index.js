
"use strict";


var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}

let eyee = { //variable eyee and its properties
    x: 650,
    y: 320,
    size: 700,
    tall: 300,

    minSize: 600, //min and max sizes for when it will move/animate
    maxSize: 900,

    minTall: 250,
    maxTall: 450,

    sizeSpeed: 3, //speed at which frequency it will move
    tallSpeed: 3,

    pupil: { //white pupil properties
        x: 650,
        y: 320,
        size: 250,

    },
    pupilOne: { //black pupil properties
        x: 650,
        y: 320,
        size: 150,

    }
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0) //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1'); //this is to put the javascript canvas in the background, behind all the html and css
}


function draw() {
    background(26, 19, 59); //background color which is navy blue
    eye(); //calls the draw() function where i crafted my eye animation
}


function eye() { //function eye() and its propreties
    eyee.size += eyee.sizeSpeed; //adds speed to the eye width which is 3
    eyee.tall += eyee.tallSpeed; //adds speed to the eye height which is 3

    if (eyee.size >= eyee.maxSize || eyee.size <= eyee.minSize) {
        eyee.sizeSpeed *= -1; //when the eye size reaches its max or its min size, it bounces back and goes the other way
    }

    if (eyee.tall >= eyee.maxTall || eyee.tall <= eyee.minTall) {
        eyee.tallSpeed *= -1; //when the eye size reaches its max or its min size, it bounces back and goes the other way
    }

    push() //draws the eye
    fill(0)
    stroke(0)
    ellipse(eyee.x, eyee.y, eyee.size, eyee.tall);
    pop();

    push() //draws the white pupil
    fill(255)
    noStroke()
    ellipse(eyee.pupil.x, eyee.pupil.y, eyee.pupil.size);
    pop();

    push() //draws the black pupil
    fill(0)
    noStroke()
    ellipse(eyee.pupilOne.x, eyee.pupilOne.y, eyee.pupilOne.size);
    pop();
}






