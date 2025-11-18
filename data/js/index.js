
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






function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);




}





function draw() {
    background(26, 19, 59);

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






