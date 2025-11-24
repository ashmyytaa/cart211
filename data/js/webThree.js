
"use strict";


var canvas;

function windowResized() {  // this is too resize the canvas whenever the browser window gets resized/gets minimized
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0)  //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1');  //this is to put the javascript canvas in the background, behind all the html and css
    background(175);


}


function draw() {
    background(26, 19, 59); //background color which is navy blue



}
