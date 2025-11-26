
"use strict";


let moneyWidth = [];
let moneyHeight = [];
let moneyAlpha = [];

var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);  //canvas size equals to the browser window's size
    canvas.position(0, 0)  //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1'); //this is to put the javascript canvas in the background, behind all the html and css

}


function draw() {
    background(26, 19, 59); //background color which is navy blue

    moneySign(); //calls the moneySign() function where belongs all the composition of my animation

}

function moneySign() {
    //Adds a new money sign at a random position for its width and height
    moneyWidth.push(random(width));
    moneyHeight.push(random(height));
    moneyAlpha.push(255);

    //This checks the array for all the elements that have been pushed, for the moneyAlpha portion and starts from the end 
    for (let i = moneyAlpha.length - 1; i >= 0; i--) {

        moneyAlpha[i] -= 2; //this orders the alpha to reduce by 2 each frame, until it completely disapears

        if (moneyAlpha[i] <= 0) { //checks if the fade has completely dissapeared, and if so, remove it from the array
            moneyWidth.splice(i, 1);
            moneyHeight.splice(i, 1);
            moneyAlpha.splice(i, 1);
        }

        //draws the money signs onthe the canvas
        push();
        textSize(80);
        fill(255, 16, 240, moneyAlpha[i]);
        noStroke();
        text('$', moneyWidth[i], moneyHeight[i]);
        pop();
    }
}
