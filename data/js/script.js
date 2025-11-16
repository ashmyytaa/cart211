
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



    binary();
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

function binary() {
    let x = random(0, width);
    let startY = random(0, height);
    let diameter = 20;
    let speed = 0.0001;


    push()
    fill(191, 10, 109);
    noStroke();
    drawingContext.shadowBlur = 50; // features that i found online that adds glow to a text
    drawingContext.shadowColor = color(255, 255, 255);
    textSize(40);


    for (let i = 0; i < 20; i++) {
        let y = startY + i * diameter + frameCount * speed;;
        text("1 0 1 0", x, y);
    }

    pop();
}
