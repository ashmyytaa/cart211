
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
        fill(255, 16, 240, a.alpha);
        textSize(a.size);
        text("ACCEPT", a.x, a.y);
        pop();

        a.x += a.speedx; //moves the text according to speed
        a.y += a.speedy; //moves the text according to speed
        a.alpha -= 5; //reduces fading by 5
    }

}

function mouseMoved() {
    for (let i = 0; i < 6; i++) {
        accepts.push({ //adds the text onto the array each time the mouse moves, pushes it to the array
            //random values are generated for all the properties
            x: mouseX + random(-15, 15),
            y: mouseY + random(-15, 15),
            speedx: random(-1.0, 1.0),
            speedy: random(-1.0, 1.0),
            size: random(40, 50),
            alpha: 255,
        });
    }
}
