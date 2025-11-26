
"use strict";


var canvas;
let accepts = []; //empty array that will hold all my accepts texts

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0) //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1'); //this is to put the javascript canvas in the background, behind all the html and css



}


function draw() {
    background(26, 19, 59); //navy blue background

    for (let a of accepts) { //for loop that will draw my "Accept" texts

        push(); //draws my text
        fill(217, 1, 102, a.alpha);
        textSize(a.size);
        text("ACCEPT", a.x, a.y);
        pop();


        a.x += a.vx; //moves the text according to speed
        a.y += a.vy; //moves the text according to speed
        a.alpha -= 5; //reduces fading by 5
    }




}

function mouseMoved() {

    for (let i = 0; i < 6; i++) {
        accepts.push({ //adds the text onto the array each time the mouse moves
            x: mouseX + random(-10, 10),
            y: mouseY + random(-10, 10),
            vx: random(-1.5, 1.5),
            vy: random(-1.5, 1.5),
            size: random(30, 50),
            alpha: 255
        });
    }
}
